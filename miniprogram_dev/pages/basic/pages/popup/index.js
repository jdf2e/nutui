

Component({
    data:{
        show:false,
        contentShow: false,
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

        onClickContentShow(){
            this.setData({ contentShow:true });
        },

        onClickContentHide(){
            this.setData({ contentShow:false });
        },

        onClicStyleShow(){
            this.setData({ styleShow:true });
        },

        onClicStyleHide(){
            this.setData({ styleShow:false });
        },

        onClickTimeShow(){
            this.setData({ timeShow:true });
        },

        onClickTimeHide(){
            this.setData({ timeShow:false });
        },

        trigger(tag){
            this.setData({ show:tag });
        }
    }
})
