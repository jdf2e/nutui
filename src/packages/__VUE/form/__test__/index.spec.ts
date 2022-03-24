import { config, DOMWrapper, mount } from '@vue/test-utils';
import Form from '../index.vue';
import NutCellGroup from '../../cellgroup/index.vue';
import FormItem from '../../formitem/index.vue';
import NutCell from '../../cell/index.vue';
import NutIcon from '../../icon/index.vue';
import NutButton from '../../button/index.vue';
import NutTextarea from '../../textarea/index.vue';
import NutSwitch from '../../switch/index.vue';
import NutCheckbox from '../../checkbox/index.vue';
// import NutRadio from '../../radio/index.vue';
// import NutRadioGroup from '../../radiogroup/index.vue';
import NutRate from '../../rate/index.vue';
import NutInputnumber from '../../inputnumber/index.vue';
import NutRange from '../../range/index.vue';
import NutUploader from '../../uploader/index.vue';
import NutAddress from '../../address/index.vue';
import NutElevator from '../../elevator/index.vue';
import NutProgress from '../../progress/index.vue';
import NutPopup from '../../popup/index.vue';
import { nextTick, toRefs, ref, reactive } from 'vue';

beforeAll(() => {
  config.global.components = {
    NutCellGroup,
    FormItem,
    NutCell,
    NutIcon,
    NutButton,
    NutTextarea,
    NutSwitch,
    NutCheckbox,
    // NutRadio,
    // NutRadioGroup,
    NutRate,
    NutInputnumber,
    NutRange,
    NutUploader,
    NutAddress,
    NutElevator,
    NutProgress,
    NutPopup
  };
});

afterAll(() => {
  config.global.components = {};
});

describe('Form', () => {
  test('base Form', () => {
    const wrapper = mount(Form);
    const rate = wrapper.find('.nut-form');
    expect(rate.exists()).toBe(true);
  });

  test('base Form usage', async () => {
    const wrapper = mount({
      components: {
        'nut-form': Form,
        'nut-form-item': FormItem
      },
      template: `
      <nut-form>
        <nut-form-item label="姓名">
          <input class="nut-input-text" placeholder="请输入姓名" type="text" />
        </nut-form-item>
        <nut-form-item label="年龄">
          <input class="nut-input-text" placeholder="请输入年龄" type="text" />
        </nut-form-item>
        <nut-form-item label="联系电话">
          <input class="nut-input-text" placeholder="请输入联系电话" type="text" />
        </nut-form-item>
        <nut-form-item label="地址">
          <input class="nut-input-text" placeholder="请输入地址" type="text" />
        </nut-form-item>
        <nut-form-item label="备注">
          <nut-textarea placeholder="请输入备注" type="text" />
        </nut-form-item>
      </nut-form>
      `
    });
    await nextTick();
    const form = wrapper.find('.nut-cell-group__warp');
    expect(form.exists()).toBe(true);
    const formitem = wrapper.findAll('.nut-form-item');
    expect(formitem.length).toBe(5);
  });

  test('base Dynamic Form', async () => {
    const wrapper = mount({
      components: {
        'nut-form': Form,
        'nut-form-item': FormItem
      },
      template: `
      <nut-form :model-value="dynamicForm.state" ref="dynamicRefForm">
        <nut-form-item label="姓名" :show-error-message="false" :show-error-line="false" error-message-align="center" body-align="center" label-width="90px" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
          <input class="nut-input-text" v-model="dynamicForm.state.name" placeholder="请输入姓名" type="text" />
        </nut-form-item>
        <nut-form-item
          :label="'联系方式' + index"
          :prop="'tels.' + index + '.value'"
          required
          :rules="[{ required: true, message: '请填写联系方式' + index }]"
          :key="item.key"
          v-for="(item, index) in dynamicForm.state.tels"
        >
          <input class="nut-input-text" v-model="item.value" :placeholder="'请输入联系方式' + index" type="text" />
        </nut-form-item>
        <nut-cell>
          <nut-button class="add" size="small" style="margin-right: 10px" @click="dynamicForm.methods.add">添加</nut-button>
          <nut-button class="remove" size="small" style="margin-right: 10px" @click="dynamicForm.methods.remove">删除</nut-button>
          <nut-button class="submit" type="primary" style="margin-right: 10px" size="small" @click="dynamicForm.methods.submit"
            >提交
          </nut-button>
          <nut-button class="reset" size="small" @click="dynamicForm.methods.reset">重置提示状态</nut-button>
        </nut-cell>
      </nut-form>
      `,
      setup() {
        const dynamicRefForm = ref<any>(null);
        const dynamicForm = {
          state: reactive({
            name: '',
            tels: new Array({
              key: 1,
              value: ''
            })
          }),
          methods: {
            submit() {
              dynamicRefForm.value.validate().then(({ valid, errors }: any) => {
                if (valid) {
                  // console.log('success', dynamicForm);
                } else {
                  // console.log('error submit!!', errors);
                }
              });
            },
            reset() {
              dynamicRefForm.value.reset();
            },
            remove() {
              dynamicForm.state.tels.splice(dynamicForm.state.tels.length - 1, 1);
            },
            add() {
              let newIndex = dynamicForm.state.tels.length;
              dynamicForm.state.tels.push({
                key: Date.now(),
                value: ''
              });
            }
          }
        };
        return {
          dynamicForm,
          dynamicRefForm
        };
      }
    });
    await nextTick();
    const formitem = wrapper.findAll('.nut-form-item');
    expect(formitem.length).toBe(2);
    const form1 = wrapper.find('.nut-cell__title');
    expect(form1.classes()).toContain('required');
    expect((form1.element as HTMLElement).style.textAlign).toEqual('');
    expect((form1.element as HTMLElement).style.width).toEqual('90px');
    const form2 = wrapper.find('.nut-form-item__body__slots');
    expect((form2.element as HTMLElement).style.textAlign).toEqual('center');
    const form4 = wrapper.find('.submit');
    form4.trigger('click');
    await nextTick();
    const form3 = wrapper.find('.nut-form-item__body__tips');
    expect(form3.exists()).toBe(true);
    const form5 = wrapper.find('.nut-form-item.error.line::before');
    expect(form5.exists()).toBe(false);
    await nextTick();
    const form6 = wrapper.find('.add');
    form6.trigger('click');
    setTimeout(() => {
      expect(formitem.length).toBe(3);
    }, 0);
    const form7 = wrapper.find('.remove');
    form7.trigger('click');
    setTimeout(() => {
      expect(formitem.length).toBe(1);
    }, 0);
    const form8 = wrapper.find('.reset');
    form8.trigger('click');
    setTimeout(() => {
      expect(form3.exists()).toBe(false);
    }, 0);
  });

  test('base Form verification', async () => {
    const wrapper = mount({
      components: {
        'nut-form': Form,
        'nut-form-item': FormItem
      },
      template: `
      <nut-form :model-value="formData" ref="ruleForm">
        <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
          <input
            class="nut-input-text"
            v-model="formData.name"
            placeholder="请输入姓名，blur 事件校验"
            type="text"
          />
        </nut-form-item>
        <nut-cell>
          <nut-button class="submit" type="primary" size="small" style="margin-right: 10px" @click="submit">提交</nut-button>
          <nut-button class="resets" size="small" @click="reset">重置提示状态</nut-button>
        </nut-cell>
      </nut-form>
      `,
      setup() {
        const formData = reactive({
          name: ''
        });
        const ruleForm = ref<any>(null);
        const submit = () => {
          ruleForm.value.validate().then(({ valid, errors }: any) => {
            if (valid) {
              // console.log('success', formData);
            } else {
              // console.log('error submit!!!', errors);
            }
          });
        };
        const reset = () => {
          ruleForm.value.reset();
        };
        return {
          ruleForm,
          formData,
          submit,
          reset
        };
      }
    });

    // .nut-input-text
    const formitem: DOMWrapper<Element> = wrapper.find('.nut-input-text');
    expect(formitem.exists()).toBe(true);
    expect(formitem.attributes().type).toBe('text');
    const formitem2: DOMWrapper<Element> = wrapper.find('.nut-form-item__body__tips');
    const formitem3: DOMWrapper<Element> = wrapper.find('.submit');
    formitem3.trigger('click');
    await nextTick();
    expect(formitem3.exists()).toBe(true);
    const formitem1: DOMWrapper<Element> = wrapper.find('.resets');

    formitem1.trigger('click');
    expect(formitem2.exists()).toBe(false);
  });

  test('base Form Type', async () => {
    const wrapper = mount({
      components: {
        'nut-form': Form,
        'nut-form-item': FormItem
      },
      template: `
      <nut-form>
      <nut-form-item label="开关">
        <nut-switch v-model="formData2.switch"></nut-switch>
      </nut-form-item>
      <nut-form-item label="复选框">
        <nut-checkbox v-model="formData2.checkbox">复选框</nut-checkbox>
      </nut-form-item>
      <nut-form-item label="评分">
        <nut-rate v-model="formData2.rate" />
      </nut-form-item>
      <nut-form-item label="步进器">
        <nut-inputnumber v-model="formData2.number" />
      </nut-form-item>
      <nut-form-item label="滑块">
        <nut-range hidden-tag v-model="formData2.range"></nut-range>
      </nut-form-item>
      <nut-form-item label="文件上传">
        <nut-uploader url="http://服务地址" v-model:file-list="formData2.defaultFileList" maximum="3" multiple>
        </nut-uploader>
      </nut-form-item>
      <nut-form-item label="地址">
        <input
          class="nut-input-text"
          v-model="formData2.address"
          readonly
          placeholder="请选择地址"
          type="text"
        />
        <!-- nut-address -->
        <nut-address
          v-model:visible="addressModule.state.show"
          :province="addressModule.state.province"
          :city="addressModule.state.city"
          :country="addressModule.state.country"
          :town="addressModule.state.town"
          custom-address-title="请选择所在地区"
        ></nut-address>
      </nut-form-item>
    </nut-form>
      `,
      setup() {
        const formData2 = reactive({
          switch: false,
          checkbox: false,
          radio: 0,
          number: 0,
          rate: 3,
          range: 30,
          address: '',
          defaultFileList: [
            {
              name: '文件1.png',
              url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
              status: 'success',
              message: '上传成功',
              type: 'image'
            },
            {
              name: '文件2.png',
              url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
              status: 'uploading',
              message: '上传中...',
              type: 'image'
            }
          ]
        });

        const addressModule = reactive({
          state: {
            show: false,
            province: [
              { id: 1, name: '北京' },
              { id: 2, name: '广西' },
              { id: 3, name: '江西' },
              { id: 4, name: '四川' }
            ],
            city: [
              { id: 7, name: '朝阳区' },
              { id: 8, name: '崇文区' },
              { id: 9, name: '昌平区' },
              { id: 6, name: '石景山区' }
            ],
            country: [
              { id: 3, name: '八里庄街道' },
              { id: 9, name: '北苑' },
              { id: 4, name: '常营乡' }
            ],
            town: []
          }
        });
        return {
          formData2,
          addressModule
        };
      }
    });
    await nextTick();
    const formitem = wrapper.findAll('.nut-form-item');
    expect(formitem.length).toBe(7);
    const formitem1 = wrapper.find('.nut-switch');
    expect(formitem1.exists()).toBe(true);
    const formitem2 = wrapper.find('.nut-checkbox');
    expect(formitem2.exists()).toBe(true);
    const formitem3 = wrapper.find('.nut-rate');
    expect(formitem3.exists()).toBe(true);
    const formitem4 = wrapper.find('.nut-inputnumber');
    expect(formitem4.exists()).toBe(true);
    const formitem5 = wrapper.find('.nut-range');
    expect(formitem5.exists()).toBe(true);
    const formitem6 = wrapper.find('.nut-uploader');
    expect(formitem6.exists()).toBe(true);
  });
});
