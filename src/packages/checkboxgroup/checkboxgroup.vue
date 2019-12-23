<template>
    <div :class="['nut-checkboxgroup',{'vertical':vertical},customClass]" >
        <div class="checkbox-item" v-for="(item,index) in checkBoxData" :key="item[keys.id]">
            <nut-checkbox 
            :name="name||item[keys.name]" 
            :disabled=" disabled || item[keys.disabled]" 
            :label="item[keys.label]"
            :animation="animation"
            :size="item.size ? item.size : size"
            
            :id="item[keys.id]"
            :checked.sync="item.checked"
            
            
            v-model="checkboxValues[index]"
            @change="changeEvt(arguments,item)"

            >{{ item[keys.label] || item[keys.value] || item}}
            </nut-checkbox>
        </div>
    </div>
</template>
<script>
import nutcheckbox from "../checkbox/checkbox.vue";
import "../checkbox/checkbox.scss";	
export default {
    name:'nut-checkboxgroup',
    props: {
        name: String,
    	checkBoxData:{
    		type:Array,
            required:true,
            
    	},

        value: {
            type: Array,
            required: true
        },
        keys: {
            type: Object,
            default() {
                return {
                    id: 'id',
                    name: 'name',
                    class: 'class',
                    label: 'label',
                    value: 'value',
                    disabled: 'disabled'
                };
            }
        },
        customClass:{
            type: String,
            default: ''
        },
        label:{
            type: [String, Number, Boolean],
            default: ''
        },
        size: {
            type: [String, Number],
            default: 'base'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        animation: {
            type: Boolean,
            default: true
        },
        vertical:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            ignoreChange: false,
        	checkboxValues: [],
            initialValue: []
        };
    },
    components: {
	    [nutcheckbox.name]: nutcheckbox
    },
    watch:{
        value(){
            this.init();
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.initialValue = this.value;
            this.checkBoxData.map(item=>{
                if(typeof item ==="object"){
                    item.checked = this.isOptionCheckedByDefault(item)
                }
            })
        },
        isObject(obj) {
            return obj !== null && typeof obj === 'object';
        },
        looseIndexOf(arr, val) {
            for (let i = 0; i < arr.length; i++) {
                if (this.looseEqual(arr[i], val)) {
                    return i;
                }
            }

            return -1;
        },
        isOptionCheckedByDefault(item) {
            return this.looseIndexOf(this.initialValue, item[this.keys.value] || item) > -1;
        },
        looseEqual(a, b) {
            return a == b || (
               this.isObject(a) && this.isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false
            );
        },
        changeEvt(args,item) {
            if (this.ignoreChange) {
                return;
            }

            const checked = args[0];
            const label = args[1];
            const e = args[2];

            let value = [];
            const itemValue = item[this.keys.value] || item;
            const i = this.looseIndexOf(this.value, itemValue);

            if (checked && i < 0) {
                value = this.value.concat(itemValue);
            }

            if (!checked && i > -1) {
                value = this.value.slice(0, i).concat(this.value.slice(i + 1));
            }

            this.$emit('input', value);
            this.$emit('change', value,label, e);

           
        },
        toggleAll(checked) {
            if (checked === false) {
                this.$emit("input", []);
                return;
            }
            if(checked === true){
                this.checkBoxData.map(item => {
                    item.checked = true;
                });
            }
            if (!checked) {
                this.checkBoxData.map(item => {
                    item.checked = !item.checked;
                });
            }

            let value = [],
                label = [];
            let resData = this.checkBoxData.filter(item => {
                if (item.checked) {
                value.push(item.value);
                label.push(item.label);
                }
                return item.checked;
            });
            this.$emit("input",value);
            this.$emit("change", value, label, null);
        }
    }
}
</script>