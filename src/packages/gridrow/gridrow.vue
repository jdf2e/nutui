<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    
    const prefixCls = 'nut-grid-row';
    export default {
        name: 'nut-grid-row',
        props: {
            type: {
                validator (value) {
                    return this.oneOf(value, ['flex']);
                }
            },
            align: {
                validator (value) {
                    return this.oneOf(value, ['top', 'middle', 'bottom']);
                }
            },
            justify: {
                validator (value) {
                    return this.oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
                }
            },
            gutter: {
                type: Number,
                default: 0
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: !this.type,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                        [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    };
                }
                return style;
            }
        },
        methods: {
            oneOf (value, validList) {
                for (let i = 0; i < validList.length; i++) {
                    if (value === validList[i]) {
                        return true;
                    }
                }
                return false;
            },
            findComponentDownward (context, componentName) {
                const childrens = context.$children;
                let children = null;

                if (childrens.length) {
                    for (const child of childrens) {
                        const name = child.$options.name;
                        if (name === componentName) {
                            children = child;
                            break;
                        } else {
                            children = this.findComponentDownward(child, componentName);
                            if (children) break;
                        }
                    }
                }
                return children;
            },
            findBrothersComponents (context, componentName, exceptMe = true) {
                let res = context.$parent.$children.filter(item => {
                    return item.$options.name === componentName;
                });
                let index = res.findIndex(item => item._uid === context._uid);
                if (exceptMe) res.splice(index, 1);
                return res;
            },
            updateGutter (val) {
                // 这里会嵌套寻找，把 Col 里的 Row 里的 Col 也找到，所以用 兄弟找
                // const Cols = findComponentsDownward(this, 'iCol');
                const Col = this.findComponentDownward(this, 'iCol');
                const Cols = this.findBrothersComponents(Col, 'iCol', false);
                if (Cols.length) {
                    Cols.forEach((child) => {
                        if (val !== 0) {
                            child.gutter = val;
                        }
                    });
                }
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    };
</script>