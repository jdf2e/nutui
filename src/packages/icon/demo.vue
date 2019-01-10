<template>
    <div>
        <h4>所有ICON</h4>
        <table>
            <tr>
                <td><nut-icon type="top"></nut-icon><span>top</span></td>
                <td><nut-icon type="down"></nut-icon><span>down</span></td>
                <td><nut-icon type="right"></nut-icon><span>right</span></td>
                <td><nut-icon type="action"></nut-icon><span>action</span></td>
            </tr>
            <tr>
                <td><nut-icon type="more"></nut-icon><span>more</span></td>
                <td><nut-icon type="trolley"></nut-icon><span>trolley</span></td>                
                <td><nut-icon type="search"></nut-icon><span>search</span></td>
                <td><nut-icon type="tick"></nut-icon><span>tick</span></td>
            </tr>
            <tr>
                <td><nut-icon type="plus"></nut-icon><span>plus</span></td>
                <td><nut-icon type="minus"></nut-icon><span>minus</span></td>
                <td><nut-icon type="cross"></nut-icon><span>cross</span></td>
                <td><nut-icon type="circle-cross"></nut-icon><span>circle-cross</span></td>
            </tr>
        </table>
        <h4>自定义尺寸</h4>
        <table>
            <tr>
                <td><nut-icon type="more" size="40px"></nut-icon><span>more</span></td>
                <td><nut-icon type="trolley" size="40px"></nut-icon><span>trolley</span></td>
                <td><nut-icon type="search" size="40px"></nut-icon><span>search</span></td>
                <td><nut-icon type="tick" size="40px"></nut-icon><span>tick</span></td>
            </tr>
        </table>
        <h4>自定义颜色</h4>
        <table>
            <tr>
                <td><nut-icon type="more" color="#f0250f"></nut-icon><span>more</span></td>
                <td><nut-icon type="trolley" color="#f0250f"></nut-icon><span>trolley</span></td>
                <td><nut-icon type="search" color="#f0250f"></nut-icon><span>search</span></td>
                <td><nut-icon type="tick" color="#f0250f"></nut-icon><span>tick</span></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
table{
    width:100%;
    border-collapse:collapse;
    td{
        width:25%;
        text-align:center;
        vertical-align: middle;
        height:100px;
        border:1px solid #ebebeb;
        font-size:12px;
    }
    span{
        display:block;
    }
}
</style>