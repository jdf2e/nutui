

Component({
    data:{
        show:false,
        positionShow: false,
        position:'top',
        positionLRShow:false,
        positionLR:'left',
        styleShow:false,
        roundPopopShow:false,
        iconPopopShow:false,
        closeIconPosition:'top-right',
        customIconPopopShow:false
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

        onClickPositionShow(e){
            var posi = e.target.dataset.position
            this.setData({
                position:posi,
                positionShow:true
            })
        },
        onClickPositionLRShow(e){
            var posi = e.target.dataset.position
            this.setData({
                positionLR:posi,
                positionLRShow:true
            })
        },
        onClickPositionHide(){
            this.setData({
                positionLRShow:false,
                positionShow:false})
        },

        onClickRoundHide(){
            this.setData({ roundPopopShow:false });
        },
        onClickRoundShow(){
            this.setData({ roundPopopShow:true });
        },
        onClickIconShow(e){
            var posi = e.target.dataset.position
            if(posi){
                this.setData({
                    closeIconPosition:posi
                })
            }
            this.setData({ iconPopopShow:true });
        },
        onClickIconHide(){
            this.setData({ iconPopopShow:false });
        },
        onClickCustomIconShow(e){
            this.setData({ customIconPopopShow:true });
        },
        onClickCustomIconHide(){
            this.setData({ customIconPopopShow:false });
        },
    }
})
