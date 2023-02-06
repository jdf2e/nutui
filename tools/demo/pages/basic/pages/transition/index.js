

Component({
    data:{
        amishow:false,
        showCustom:false,
        name:'fade'
    },

    methods: {
        onClickFade() {
            console.log('点击')
        this.trigger('fade');
        },
    
        onClickFadeUp() {
        this.trigger('fade-up');
        },
    
        onClickFadeDown() {
        this.trigger('fade-down');
        },
    
        onClickFadeLeft() {
        this.trigger('fade-left');
        },
    
        onClickFadeRight() {
        this.trigger('fade-right');
        },
    
        onClickSlideUp() {
        this.trigger('slide-up');
        },
    
        onClickSlideDown() {
        this.trigger('slide-down');
        },
    
        onClickSlideLeft() {
        this.trigger('slide-left');
        },
    
        onClickSlideRight() {
        this.trigger('slide-right');
        },

        onClickCustom() {
            this.setData({ showCustom: true });

            setTimeout(()=>{
                this.setData({  showCustom: false });
            }, 1000)
        },

        trigger(name){
            this.setData({ name, amishow: true });

            setTimeout(()=>{
                this.setData({  amishow: false });
            }, 1000)
        }
    }
})
