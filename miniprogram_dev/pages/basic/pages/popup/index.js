

Component({
    data:{
        show:false,
        positionShow: false,
        styleShow:false,
        timeShow:false
    },

    methods: {
        onClickShow() {
            this.trigger(true);
        },

        onClickHide(){
            this.trigger(false);
        },

        onClickOverlay(){
            this.trigger(false);
        },

        trigger(tag){
            this.setData({ show:tag });
        },

        onClickPositionShow(){
            this.setData({positionShow:true})
        },
        onClickPositionHide(){
            this.setData({positionShow:false})
        }
    }
})
