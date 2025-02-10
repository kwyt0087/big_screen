<template>
  <div class='container'>
    <div class='title'>层位展示图</div>
    <div class='top'>
      <span>层位：</span>
      <el-select v-model='layerValue' placeholder='请选择' @change='changeLayer'>
        <el-option
          v-for='item in layerOptions'
          :key='item.LAYER'
          :label='item.LAYER'
          :value='item.LAYER'
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
      layerOptions: [],
      layerValue: '长6',
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
              fontSize: 14     //更改坐标轴文字大小
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
              {color: '#2de6aa'}
          }
        ]
      },
      option2: {
        color:'#03baca',
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
              fontSize: 14     //更改坐标轴文字大小
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
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(5, 197, 215,0.8)'
                },
                {
                  offset: 1,
                  color: 'rgba(5, 197, 215,0.3)'
                }
              ])
            }
            // itemStyle : { normal: {label : {show: true}}}
          }
        ]
      },
      LAYER: '',
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
    }
  },
  methods: {

    // 获取下拉框接口
    getDataLayer() {
      const params = {
        processName: 'queryRockMechanicsLayer'
      }
      Data.getData(params).then(res => {
        // console.log(res)
        this.layerOptions = res.data
        // this.layerValue = res.data[0].LAYER    ////////@@@@@@@@@@@@@@@@@
        this.getDataEchart()
      })
    },
    // 图表接口
    getDataEchart() {
      const params = {
        processName: 'queryRockMechanicsData',
        LAYER: this.layerValue,
        PARAM: this.paramValue,
        MODULAR: '地层'
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
    changeLayer() {
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
    this.getDataLayer()
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
