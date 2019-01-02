<template>
    <div >
    <nut-skeleton class="my-skeleton">
        
        <row padding="15px 10px 0 ">

            <skeleton-square width="200px"  ></skeleton-square>
            <skeleton-square width="50px" margin="0 0 0 40px"></skeleton-square>
            <skeleton-square width="50px"  margin="0 0 0 10px"></skeleton-square>
        </row>
        <row padding="20px 10px">
            <skeleton-circle  diameter="50px"></skeleton-circle>
            <skeleton-square width="275px" :count="3" margin="5px 10px 5px 10px"></skeleton-square>
        </row>

        <row padding="0 10px 20px">
            <skeleton-circle  diameter="50px"></skeleton-circle>
            <column>
                    <skeleton-square width="275px" :count="2" margin="5px 10px 5px 10px"></skeleton-square>
                    <skeleton-square width="100px"    margin="5px 10px 5px 10px"></skeleton-square>
            </column>
        </row>

        <row padding="0 10px 20px">
            <skeleton-square width="75px" height="75px" ></skeleton-square>
            <column padding="0 0 0 10px">
                <skeleton-square width="275px"   height="10px" margin="0 10px 5px 10px"></skeleton-square>
                <skeleton-square width="100px"  height="7.5px"   margin="5px 10px 5px 10px"></skeleton-square>
                <skeleton-square width="275px"  backColor="#ffffff" :count="2"></skeleton-square>
                <skeleton-square width="50px"     margin="0 10px 5px 10px"></skeleton-square>
            </column>
            
        </row>
            <row padding="0 10px 20px">
                <skeleton-square width="30px" height="30px" v-for=" i in 5" :key="i" margin="15px"></skeleton-square>
            </row>
        
    </nut-skeleton>
    </div>
  
</template>

<script>

export default {
    data(){
        return{
        }
    }
    
}
</script>
<style lang="scss" scoped>

.my-skeleton{
    padding-top:60px;
    z-index:998;
}
</style>
