<template>
    <div>
        <nut-docheader 
        :name="$route.name"
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <h6>通用数据代码和回调示例</h6>
        <nut-codebox :code="code"></nut-codebox>

        <h6>示例</h6>
        <div class="scroller-container">
          <nut-scroller 
            :onRefresh="onRefresh" :onInfinite="onInfinite">
            <div v-for="(item, index) in list" :key="index" class="content-item">{{'滚动区域的内容' + (index + 1)}}</div>
          </nut-scroller>
        </div>
      
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>是否必传</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>offset</td>
              <td>触发下拉刷新的阈值</td>
              <td>Number</td>
              <td>100</td>
              <td>否</td>
            </tr>
            <tr>
              <td>enableInfinite</td>
              <td>是否开启上拉加载</td>
              <td>Boolean</td>
              <td>true</td>
              <td>否</td>
            </tr>
            <tr>
              <td>enableRefresh</td>
              <td>是否开启下拉刷新</td>
              <td>Boolean</td>
              <td>true</td>
              <td>否</td>
            </tr>
            <tr>
              <td>onRefresh</td>
              <td>下拉刷新执行的函数</td>
              <td>Function</td>
              <td>--</td>
              <td>如果开启下拉刷新功能，必传</td>
            </tr>
            <tr>
              <td>onInfinite</td>
              <td>加载更多执行的函数</td>
              <td>Function</td>
              <td>--</td>
              <td>如果开启上拉加载功能，必传</td>
            </tr>
            <tr>
              <td>noDataText</td>
              <td>没有更多数据时的提示语</td>
              <td>String</td>
              <td>没有更多数据了</td>
              <td>否</td>
            </tr>
            <tr>
              <td>refreshText</td>
              <td>下拉刷新提示</td>
              <td>String</td>
              <td>下拉刷新</td>
              <td>否</td>
            </tr>
            <tr>
              <td>freedRefreshText</td>
              <td>释放下拉提示语</td>
              <td>String</td>
              <td>松开刷新数据</td>
              <td>否</td>
            </tr>
          </tbody>
        </table>
        </div>

        <h5>插槽</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>refresh</td>
              <td>刷新时的效果或文字</td>
            </tr>
            <tr>
              <td>load-more</td>
              <td>加载时的效果或文字</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      list: [...Array(10)],
      code: `
        <template>
          <div class="scroller-container">
            <nut-scroller 
              :on-refresh="onRefresh"
              :on-infinite="onInfinite">
              <div v-for="(item, index) in list" :key="index" class="content-item">{{'滚动区域的内容' + (index + 1)}}</div>
            </nut-scroller>
          </div>
        </template>
        <style lang="scss">
          .scroller-container {
            position: relative;
            width: 100%;
            height: 300px;
            background: #f2f2f2;
          }
          .content-item {
            padding: 5px;
            line-height: 20px;
            background: #cccccc;
            margin-bottom: 10px;
            font-size: 14px;
          }
        </style>
        
          export default {
            data() {
              retuen {
                list: [...Array(10)]
              }
            },
            methods: {
              onRefresh(done) {
                setTimeout(() => {
                  this.list = [...Array(10)]
                    done()
                }, 2000)
              },
              onInfinite(done) {
                setTimeout(() => {
                  if (this.list && this.list.length < 30) {
                    this.list = [...this.list, ...Array(10)]
                    done(true);
                    return
                  }
                  done(false) // 回传没有更多数据的标识
                }, 2000)
              }
            }
          }
        
      `
    };
  },
  mounted() {
    
  },
  methods: {
    onRefresh(done) {
      setTimeout(() => {
        this.list = [...Array(10)]
          done()
      }, 2000)
    },
    onInfinite(done) {
      setTimeout(() => {
        if (this.list && this.list.length < 30) {
          this.list = [...this.list, ...Array(10)]
          done(true);
          return
        }
        done(false)
      }, 2000)
    }
  }
};
</script>

<style lang="scss">
  .scroller-container {
    position: relative;
    width: 100%;
    height: 300px;
		background: #f2f2f2;
  }
  .content-item {
    padding: 5px;
    line-height: 20px;
    background: #cccccc;
    margin-bottom: 10px;
    font-size: 14px;
  }
</style>
