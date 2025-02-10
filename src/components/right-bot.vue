<template>
  <div class='container'>
    <div class='title'>层位占比统计图</div>
    <!--    <div class='top'>-->
    <!--      <span>层位：</span>-->
    <!--      <el-select v-model='layerValue' placeholder='请选择' @change='changeLayer'>-->
    <!--        <el-option-->
    <!--          v-for='item in layerOptions'-->
    <!--          :key='item.LAYER'-->
    <!--          :label='item.LAYER'-->
    <!--          :value='item.LAYER'-->
    <!--        >-->
    <!--        </el-option>-->
    <!--      </el-select>-->
    <!--      <span>参数：</span>-->
    <!--      <el-select v-model='paramValue' placeholder='请选择' @change='changeParam'>-->
    <!--        <el-option-->
    <!--          v-for='item in paramOptions'-->
    <!--          :key='item.value'-->
    <!--          :label='item.label'-->
    <!--          :value='item.value'>-->
    <!--        </el-option>-->
    <!--      </el-select>-->
    <!--    </div>-->
    <div class='charts' ref='domId'></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Data from '../utils/request'

export default {

  data() {
    return {
      // paramOptions: [{
      //   value: 'POIS',
      //   label: '泊松比'
      // }, {
      //   value: 'MOE',
      //   label: '杨氏模量'
      // }],
      // paramValue: 'MOE',
      // layerOptions: [],
      // layerValue: '',
      //
      // option: {
      //   tooltip: {
      //     trigger: "item",
      //     axisPointer: {
      //       label: {
      //         backgroundColor: '#6a7985'
      //       }
      //     }
      //   },
      //   xAxis: {
      //     boundaryGap: false, // 刻度线对x轴值
      //     axisLine: {
      //       lineStyle: {
      //         color: '#eee'
      //       }
      //     },
      //     axisLabel: {
      //       interval: 0,  //坐标轴显示所有值
      //       textStyle: {
      //         fontSize: 8     //更改坐标轴文字大小
      //       }
      //     },
      //     minorSplitLine: {
      //       show: false
      //     },
      //     type: 'category',
      //     data: []
      //
      //   },
      //   yAxis: {
      //     axisLine: {
      //       lineStyle: {
      //         color: '#eee'
      //       }
      //     },
      //     splitLine: { // 分割线
      //       // show: false
      //       lineStyle: {
      //         color: '#09345A'
      //       }
      //     },
      //     type: 'value',
      //     axisTick: {
      //       show: false
      //     }
      //   },
      //   series: [
      //     {
      //       data: [],
      //       type: 'line',
      //       // itemStyle : { normal: {label : {show: true}}}
      //     }
      //   ]
      // },
      // LAYER: '',
      // param: '',
      // layer: ''
      option: {
        tooltip: {
          trigger: 'item'
        },

        series: [
          {

            type: 'pie',
            radius: ['20%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#052952',
              borderWidth: 3
            },
            label: {
              show: true,
              fontSize: 13
            },
            emphasis: {
              // scale: true,
              // scaleSize: 50,
              // label: {
              //   show: true,
              //   fontSize: '40',
              //   fontWeight: 'bold'
              // }
            },

            data: [
              {value: 38, name: '长8 38%', itemStyle: {color: "#1ed7f4"}},
              {value: 44, name: '长7 44%', itemStyle: {color: "#007fff"}},
              {value: 10, name: '长6 10%', itemStyle: {color: "#1fcf98"}},
              {value: 1, name: '长10 1%', itemStyle: {color: "#ff6766"}},
              {value: 7, name: '长9 7%', itemStyle: {color: "#f5b82c"}}
            ]
          },
          {
            name: "",
            type: "pie",
            radius: ["66%", "67%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false
            },
            data: []
          }
        ]
      }
    }
  },
  computed: {},
  methods: {

    // 获取下拉框接口
    // getDataLayer() {
    //   const params = {
    //     processName: 'queryRockMechanicsLayer'
    //   }
    //   Data.getData(params).then(res => {
    //     // console.log(res)
    //     this.layerOptions = res.data
    //     this.layerValue = res.data[0].LAYER
    //     this.getDataEchart()
    //   })
    // },
    // // 图表接口
    // getDataEchart() {
    //   const params = {
    //     processName: 'queryRockMechanicsData',
    //     LAYER: this.layerValue,
    //     PARAM: this.paramValue,
    //     MODULAR: '地层'
    //   }
    //   Data.getData(params).then(res => {
    //     // console.log(res)
    //     const arr1 = []
    //     const arr2 = []
    //     res.data.forEach(v => {
    //       arr1.push(v.DATA)
    //       arr2.push(v.PARAM)
    //     })
    //     this.option.xAxis.data = arr2.slice(0,10)
    //     this.option.series[0].data = arr1.slice(0,10)
    //     // console.log(arr1, arr2)
    //     this.point()
    //   })
    // },
    // changeLayer() {
    //   this.getDataEchart()
    // },
    // changeParam() {
    //   this.getDataEchart()
    // },

    point() {
      const myChart = echarts.init(this.$refs.domId)
      const arr = [];
      for (let i = 0; i < 50; i++) {
        arr.push({value: 4, name: "", itemStyle: {color: "#0e8bc3"}});
        arr.push({value: 1, name: "", itemStyle: {color: "#06274a"}});
      }
      this.option.series[1].data = arr;
      myChart.setOption(this.option, true)
    }
  },
  created() {
    // this.getDataLayer()
  },
  mounted() {
    window.addEventListener(
      'resize',
      () => {
        const myChart = echarts.init(this.$refs.domId)
        myChart.resize()
      },
      false
    ), this.point()
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

  .charts {
    flex: 1;
  }
}

/deep/ .el-input__icon {
  line-height: 31px;
}
</style>
