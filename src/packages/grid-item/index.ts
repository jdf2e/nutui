import { NutComponent } from './../../common/component.ts'
import { useParent } from '../../common/relation.ts'

NutComponent({
  relation: useParent('grid'),
  props: {
    text: String,
    // icon
    icon: String,
    iconSize:  Number,
    iconColor: String,
    replace: {
      type: Boolean,
      value: false
    }
  },

  data:{
    parent:{
      columnNum:4,
      gutter:0,
      center:true,
      square:false,
      border:true,
      reverse:false,
      direction:'vertical',
      clickable:false
    },
    iconProps:{
      name:'',

    }
  },

  methods: {
    updateParent:function(){
      const that = this
      this.setData({
        parent:that.parent.data
      })

    }
  },
});


