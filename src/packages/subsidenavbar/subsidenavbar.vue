<template>
    <div class="nut-subsidenavbar">
        <div class="sidenavbar-item">
            <div class="item-title sidenavbar-item-title">
                <a href="javascript:;" class="sidenavbar-title">
                    云产品
                </a>
                <span class="sidenavbar-icon">
                    <nut-icon type="down"></nut-icon>
                </span>
            </div>
            <div class="sub-sidenavbar-box">
                <div class="sub-sidenavbar-list">
                    <div class="sub-sidenavbar-item">
                        <div class="item-title sub-sidenavbar-item-title">
                            <a href="javascript:;" class="sidenavbar-title sub-sidenavbar-title">
                                弹性运算
                            </a>
                            <span class="sidenavbar-icon">
                                <nut-icon type="down"></nut-icon>
                            </span>
                        </div>
                        <ul class="three-sidenavbar-list">
                            <slot></slot>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-subsidenavbar',
    props: {
        
    },
    data() {
        return {
            
        };
    },
    methods: {

    }
}
</script>