<template>
  <div class='container'>
    <div class='title'>区块展示图</div>
    <div class='top'>
      <span>区块：</span>
      <el-select v-model='blockValue' placeholder='请选择' @change='changeBlock'>
        <el-option
          v-for='item in blockOptions'
          :key='item.BLOCK'
          :label='item.BLOCK'
          :value='item.BLOCK'
        >
        </el-option>
      </el-select>
      <span>参数：</span>
      <el-select v-model='paramValue' placeholder='请选择' @change='changeParam'>
        <el-option
          v-for='item in paramOptions'
          :key='item.value'
          :label='item.label'
          :value='item.value'>
        </el-option>
      </el-select>
      <span>图表：</span>
      <el-select v-model='chartsValue' placeholder='请选择'>
        <el-option value="0" label="柱状图"></el-option>
        <el-option value="1" label="折线图">
        </el-option>
      </el-select>
    </div>
    <div class='charts-box' v-show="chartsValue==0">
      <div class='charts' ref='domId'></div>
    </div>
    <div class='charts-box' v-show="chartsValue==1">
      <div class='charts' ref='domId2'></div>
    </div>


  </div>
</template>

<script>
import echarts from 'echarts'
import Data from '../utils/request'

export default {

  data() {
    return {

      blockOptions: [],
      blockValue: '华庆',
      paramOptions: [{
        value: 'POIS',
        label: '泊松比'
      }, {
        value: 'MOE',
        label: '杨氏模量'
      }, {
        value: 'LXYLC',
        label: '两向应力差'
      }

      ],
      paramValue: 'MOE',
      chartsValue: '0',
      option: {
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          axisLabel: {
            interval: 0, rotate: 50, //文字斜体
            textStyle: {
              fontSize: 14    //更改坐标轴文字大小
            }
          },
          minorSplitLine: {
            show: false
          },
          type: 'category',
          data: []

        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          splitLine: { // 分割线
            // show: false
            lineStyle: {
              color: '#09345A'
            }
          },
          type: 'value',
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [],
            type: 'bar',
            barWidth: 20,// 柱图宽度
            label: {
              normal: {
                show: true,
                position: 'top',
                formatter: '{c}'

              }
            },

            itemStyle:
              {color: '#34d7f8'}
          }
        ]
      },
      option2: {
        color: '#e8c536',
        tooltip: {
          trigger: "item",
          axisPointer: {
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          boundaryGap: false, // 刻度线对x轴值
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          axisLabel: {
            interval: 0, rotate: 50, //文字斜体
            textStyle: {
              fontSize: 14      //更改坐标轴文字大小
            }
          },
          minorSplitLine: {
            show: false
          },
          type: 'category',
          data: []

        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          splitLine: { // 分割线
            // show: false
            lineStyle: {
              color: '#09345A'
            }
          },
          type: 'value',
          axisTick: {   //是否显示坐标轴刻度
            show: false
          }
        },
        series: [
          {
            data: [],
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(228, 195, 54,0.8)'
                },
                {
                  offset: 1,
                  color: 'rgba(228, 195, 54,0.3)'
                }
              ])
            }
            // itemStyle : { normal: {label : {show: true}}}
          }
        ]
      },
      block: '',
      param: '',
      layer: ''
    }
  },
  computed: {},
  watch: {
    chartsValue: {
      immediate: true,
      deep: true,
      handler(newVal) {
        if (newVal == 0) {
          this.$nextTick(() => {
            console.log('111')
            this.point()
          })
        }
        if (newVal == 1) {
          this.$nextTick(() => {
            const myChart2 = echarts.init(this.$refs.domId2)
            myChart2.resize()
            this.point2()
          })
        }
      }
    },

  },
  methods: {

    // 获取下拉框接口
    getDataBlock() {
      const params = {
        processName: 'queryRockMechanicsBlock'
      }
      Data.getData(params).then(res => {
        // console.log(res)
        this.blockOptions = res.data
        // this.blockValue = res.data[0].BLOCK         ///////////////@@@@@@@@@@@@@@@@@@@@@@
        this.getDataEchart()
      })
    },

    // 图表接口
    getDataEchart() {
      const params = {
        processName: 'queryRockMechanicsData',
        BLOCK: this.blockValue,
        // LAYER: this.layerValue,
        PARAM: this.paramValue,
        MODULAR: '区块'
      }
      Data.getData(params).then(res => {
        // console.log(res)
        const arr1 = []
        const arr2 = []
        res.data.forEach(v => {
          arr1.push(v.DATA)
          arr2.push(v.PARAM)
        })
        this.option.xAxis.data = arr2.slice(0, 10)
        this.option.series[0].data = arr1.slice(0, 10)
        this.option2.xAxis.data = arr2.slice(0, 10)
        this.option2.series[0].data = arr1.slice(0, 10)
        // console.log(arr1, arr2)
        this.point()
        this.point2()
      })
    },
    changeBlock() {
      this.getDataEchart()
    },
    changeParam() {
      this.getDataEchart()
    },

    point() {
      const myChart = echarts.init(this.$refs.domId)
      myChart.setOption(this.option, true)
    },
    point2() {
      const myChart2 = echarts.init(this.$refs.domId2)
      myChart2.setOption(this.option2, true)
    }
  },
  created() {
    this.getDataBlock()
    // this.getDataLayer()
  },
  mounted() {
    window.addEventListener(
      'resize',
      () => {
        const myChart = echarts.init(this.$refs.domId)
        myChart.resize()
        const myChart2 = echarts.init(this.$refs.domId2)
        myChart2.resize()
      },
      false
    )
  }
}
</script>

<style lang='less' scoped>
.container {
  height: 100%;
  width: 100%;
  background: url("../assets/img/边框.png") no-repeat;
  background-size: 100% 100%;
  padding: 30px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;

  .title {
    flex: 0 0 30px;
    padding-left: 20px;
    font-family: "Microsoft YaHei" ! important;
    font-weight: bold;
  }

  .top {
    display: flex;
    flex: 0 0 30px;
    line-height: 30px;

    span {
      display: inline-block;
    }

    span:last-of-type {
      margin-left: 15px;
    }
  }

  .charts-box {
    flex: 1;

    .charts {
      width: 100%;
      height: 100%;
    }
  }
}

/deep/ .el-input__icon {
  line-height: 31px;
}
</style>
