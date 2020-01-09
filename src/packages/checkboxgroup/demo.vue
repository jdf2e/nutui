<template>
    <div class="demo-list">
        <h4>基本用法(2s后动态更新)</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup ref="checkboxGroup" :checkBoxData="data1" v-model="group1"></nut-checkboxgroup></span>
            </nut-cell>
            <p>{{group1}}</p>
            <nut-button small @click="checkAll(true)">全选</nut-button>
            <nut-button small @click="checkAll(false)">取消全选</nut-button>
            <nut-button small @click="checkAll()">反选</nut-button>
        </div>

        <h4>禁用状态</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup  :checkBoxData="data2" v-model="group2"></nut-checkboxgroup></span>
            </nut-cell>
        </div>
        <h4>自定义尺寸</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup  :size="'small'" :checkBoxData="data3" v-model="group3"></nut-checkboxgroup></span>
                
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup   :size="'base'" :checkBoxData="data3" v-model="group4"></nut-checkboxgroup></span>
                
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup   :checkBoxData="data33" :size="'small'" v-model="group5"></nut-checkboxgroup></span>
                
            </nut-cell>
            <p>size可选值：'small', 'base', 'large'</p>
            <p>data设置size属性高于标签size</p>
        </div>
        <h4>禁用动效</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup  :checkBoxData="data33" v-model="group6"  :animation="false" ></nut-checkboxgroup></span>

            </nut-cell>
            <p>选择状态：{{group6}}</p>
            <p>animation属性值为false时，禁用自带动效 </p>
        </div>
        <h4>横向排列</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup :checkBoxData="data5"  v-model="group7" :vertical="true"></nut-checkboxgroup></span>
            </nut-cell>
            
            <p>avertical属性值为true时，横向排列 </p>
            <p>状态：label值与选中value值不同时，{{group7}}</p>
        </div>
        <h4>事件</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup :checkBoxData="data6" v-model="group0" @change="changeEvt"></nut-checkboxgroup></span>
            </nut-cell>
            <p>选择状态：{{group0}}</p>
            <p>值发生变化时，将触发change事件</p>
        </div>
        <h4>自定义样式</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-checkboxgroup  :customClass="'my-checkbox'" :checkBoxData="data7" v-model="group8"></nut-checkboxgroup></span>
            </nut-cell>
           
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result:'',
            result2:'',
            group0: ['选项1'],
            group1: ['选项A'],
            group2: ['选项2'],
            group3: ['备选项'],
            group4: ['备选项'],
            group5: ['备选项'],
            group6: ['选项1'],
            group7: ['B'],
            group8: ['选项1'],
        	data1:[
                {id:11,value:'选项A',label:'选项A'},
                {id:12,value:'选项B',label:'选项B'},
                {id:13,value:'选项C',label:'选项C'},
                {id:14,value:'选项D',label:'选项D'},
            ],
            data2:[
                {id:21,value:'选项1',label:'选项1',disabled:true},
                {id:22,value:'选项2',label:'选项2',disabled:true},
                
            ],
            data3:[
                {id:31,value:'备选项',label:'备选项'},
            ],
            data33:[
                {id:31,value:'备选项',label:'备选项',size:'large'},
            ],
            data4:[
                {id:41,value:'选项1',label:'选项1'},
                {id:42,value:'选项2',label:'选项2'},
            ],
            data5:[
                {id:51,value:'A',label:'选项1'},
                {id:52,value:'B',label:'选项2'},
                {id:53,value:'C',label:'选项3'},
                {id:54,value:'D',label:'选项4'},
            ],
            data6:[
                {id:51,value:'选项1',label:'选项1'},
                {id:52,value:'选项2',label:'选项2'},
                {id:53,value:'选项3',label:'选项3'},
                {id:54,value:'选项4',label:'选项4'},
            ],
            data7:[
                {id:41,value:'选项1',label:'选项1'},
                {id:42,value:'选项2',label:'选项2'},
            ],
        };
    },
    mounted(){
        setTimeout(() => {
            this.group1.push('选项B')
        }, 2000);
    },
    methods: {
        changeEvt(val,label,e){
            console.log(0,val,label,e)
            alert('已选值:['+ val+']，当前选择值：'+ label);
           
        },
        checkAll(state){
            this.$refs.checkboxGroup.toggleAll(state);
        }
    }
};
</script>

<style lang="scss" >
.nut-checkboxgroup {
    &.my-checkbox{
        padding: 0;
        .checkbox-item{
            padding: 10px 0 6px;
            margin-right: 0;
            border-bottom: 1px solid #efefef;
        }
        .nut-checkbox {
            input:checked {
                background-image: radial-gradient(
                  circle,
                  #fff 0%,
                  #fff 100%,
                  $primary-color 60%
                );
                background-size: 50% 50%;
                border:none;
            }
        }
    } 
}
</style>
