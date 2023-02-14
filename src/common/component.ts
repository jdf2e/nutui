import { basic } from '../mixins/basic.ts';
import { NutComponentOptions } from '../definitions/index.ts';

function mapKeys(
  source: Record<string, any>,
  target: Record<string, any>,
  map: Record<string, any>
) {
  Object.keys(map).forEach((key) => {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function NutComponent<
  Data extends WechatMiniprogram.Component.DataOption,
  Props extends WechatMiniprogram.Component.PropertyOption,
  Methods extends WechatMiniprogram.Component.MethodOption
>(NutOptions: NutComponentOptions<Data, Props, Methods>): void {
  const options: WechatMiniprogram.Component.Options<Data, Props, Methods> = {};

  mapKeys(NutOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    destroyed: 'detached',
    classes: 'externalClasses',
    observers: 'observers'
  });

  // add default externalClasses
  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class');

  // add default behaviors
  options.behaviors = options.behaviors || [];
  options.behaviors.push(basic);

  // add relations
  const { relation } = NutOptions;
  if (relation) {
    options.relations = relation.relations;
    options.behaviors.push(relation.mixin);
  }
  
  // map field to form-field behavior
  if (NutOptions.field) {
    options.behaviors.push('wx://form-field');
  }

  // 添加默认 选项
  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
  };

  Component(options);
}


module.exports = { NutComponent };
