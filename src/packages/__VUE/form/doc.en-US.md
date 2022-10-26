# Form

### Intro

It is used for data entry and verification. It supports input box, radio box, check box, file upload and other types. It needs to be used with cell components.

### Install

    
``` javascript
import { createApp } from 'vue';
// vue
import { Form,FormItem,Cell,CellGroup } from '@nutui/nutui';
// taro
import { Form,FormItem,Cell,CellGroup  } from '@nutui/nutui-taro';

const app = createApp();
app.use(Form);
app.use(FormItem);
app.use(Cell);
app.use(CellGroup);
```


### Basic Usage

:::demo

```html
<template>
  <nut-form>
      <nut-form-item label="Name">
          <input class="nut-input-text" placeholder="Please enter your name" type="text" />
      </nut-form-item>
      <nut-form-item label="Age">
          <input class="nut-input-text" placeholder="Please enter age" type="text" />
      </nut-form-item>
      <nut-form-item label="Tel">
          <input class="nut-input-text" placeholder="请输入联系电话" type="text" />
      </nut-form-item>
      <nut-form-item label="Address">
          <input class="nut-input-text" placeholder="Please enter address" type="text" />
      </nut-form-item>
      <nut-form-item label="备注">
          <nut-textarea  placeholder="请输入备注" type="text" />
      </nut-form-item>
  </nut-form>
</template>
```
:::


### Dynamic Form

:::demo

```html
<template>
  <nut-form :model-value="dynamicForm.state" ref="dynamicRefForm">
    <nut-form-item label="Name" prop="name" required :rules="[{ required: true, message: 'Please enter your name' }]">
      <input class="nut-input-text" v-model="dynamicForm.state.name" placeholder="Please enter your name" type="text" />
    </nut-form-item>
    <nut-form-item :label="'Tel'+index" :prop="'tels.' + index + '.value'" required
      :rules="[{ required: true, message: 'Please enter tel'+index }]" :key="item.key"
      v-for="(item,index) in dynamicForm.state.tels">
      <input class="nut-input-text" v-model="item.value" :placeholder="'Please enter tel'+index" type="text" />
    </nut-form-item>
    <nut-cell>
      <nut-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.add">Add</nut-button>
      <nut-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.remove">Remove</nut-button>
      <nut-button type="primary" style="margin-right: 10px" size="small" @click="dynamicForm.methods.submit">Submit</nut-button>
      <nut-button size="small" @click="dynamicForm.methods.reset">Reset prompt status</nut-button>
    </nut-cell>
  </nut-form>
</template>
<script lang="ts">
import { ref,reactive } from 'vue';
export default {
  setup(){
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
              console.log('success', dynamicForm);
            } else {
              console.log('error submit!!', errors);
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
}
</script>
```

:::


### Validate Form

:::demo

```html
<template>
<nut-form :model-value="formData" :rules="{name: [{
            message: 'Name should be at least two characters',
            validator: nameLengthValidator
          }]}" ref="ruleForm">
  <nut-form-item label="Name" prop="name" required :rules="[{ required: true, message: 'Please enter your name' }]">
    <input class="nut-input-text" @blur="customBlurValidate('name')" v-model="formData.name"
      placeholder="Please enter , blur event validate" type="text" />
  </nut-form-item>
  <nut-form-item label="Age" prop="age" required :rules="[
      { required: true, message: 'Please enter age' },
      { validator: customValidator, message: 'You must enter a number' },
      { validator: customRulePropValidator, message: 'You must enter a number', reg: /^\d+$/ },
      { regex: /^(\d{1,2}|1\d{2}|200)$/, message: 'The range 0-200 must be entered' }
    ]">
    <input class="nut-input-text" v-model="formData.age" placeholder="Please enter the age, which must be numeric and in the range of 0-200" type="text" />
  </nut-form-item>
  <nut-form-item label="Tel" prop="tel" required :rules="[
      { required: true, message: 'Please enter tel' },
      { validator: asyncValidator, message: 'Tel format is incorrect' }
    ]">
    <input class="nut-input-text" v-model="formData.tel" placeholder="Async check tel format" type="text" />
  </nut-form-item>
  <nut-form-item label="Address" prop="address" required :rules="[{ required: true, message: 'Please enter address' }]">
    <input class="nut-input-text" v-model="formData.address" placeholder="Please enter address" type="text" />
  </nut-form-item>
  <nut-cell>
    <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit">Submit</nut-button>
    <nut-button size="small" @click="reset">Reset prompt status</nut-button>
  </nut-cell>
</nut-form>
</template>
<script lang="ts">
import { ref,reactive } from 'vue';
export default {
setup(){
    const formData = reactive({
        name: '',
        age: '',
        tel: '',
        address: ''
    });
    const validate = (item: any) => {
        console.log(item);
    };
    const ruleForm = ref<any>(null);

    const submit = () => {
      ruleForm.value.validate().then(({ valid, errors }: any) => {
        if (valid) {
          console.log('success', formData);
        } else {
          console.log('error submit!!', errors);
        }
      });
    };
    const reset = () => {
      ruleForm.value.reset();
    };

    const customBlurValidate = (prop: string) => {
      ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
        if (valid) {
          console.log('success', formData);
        } else {
          console.log('error submit!!', errors);
        }
      });
    };

    const customValidator = (val: string) => /^\d+$/.test(val);
    const customRulePropValidator = (val: string, rule: FormItemRuleWithoutValidator) => {
      return (rule?.reg as RegExp).test(val);
    };
    const nameLengthValidator = (val: string) => val?.length >= 2;
    // Promise async validator
    const asyncValidator = (val: string) => {
      return new Promise((resolve) => {
        Toast.loading('Simulating asynchronous verification');
        setTimeout(() => {
          Toast.hide();
          resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
        }, 1000);
      });
    };
    return { ruleForm, formData, validate, customValidator, customRulePropValidator, nameLengthValidator, asyncValidator, customBlurValidate, submit, reset };
}
}
</script>
```
:::


### Form Type

:::demo

```html
<template>
<nut-form>
    <nut-form-item label="switch">
        <nut-switch v-model="formData2.switch"></nut-switch>
    </nut-form-item>
    <nut-form-item label="checkbox">
        <nut-checkbox v-model="formData2.checkbox">checkbox</nut-checkbox>
    </nut-form-item>
    <nut-form-item label="radio">
        <nut-radiogroup direction="horizontal" v-model="formData2.radio">
            <nut-radio label="1">Option 1</nut-radio>
            <nut-radio disabled label="2">Option 2</nut-radio>
            <nut-radio label="3">Option 3</nut-radio>
        </nut-radiogroup>
    </nut-form-item>
    <nut-form-item label="Rate">
        <nut-rate v-model="formData2.rate" />
    </nut-form-item>
    <nut-form-item label="Inputnumber">
        <nut-inputnumber v-model="formData2.number" />
    </nut-form-item>
    <nut-form-item label="Range">
        <nut-range hidden-tag v-model="formData2.range"></nut-range>
    </nut-form-item>
    <nut-form-item label="Upload file">
        <nut-uploader url="http://apiurl" v-model:file-list="formData2.defaultFileList" maximum="3" multiple>
        </nut-uploader>
    </nut-form-item>
    <nut-form-item label="Address">
        <input class="nut-input-text" v-model="formData2.address" @click="addressModule.methods.show" readonly
            placeholder="Please select an address" type="text" />
        <!-- nut-address -->
        <nut-address v-model:visible="addressModule.state.show" :province="addressModule.state.province"
            :city="addressModule.state.city" :country="addressModule.state.country" :town="addressModule.state.town"
            @change="addressModule.methods.onChange" custom-address-title="Please select your region"></nut-address>
    </nut-form-item>
</nut-form>
</template>
<script lang="ts">
import { ref,reactive } from 'vue';
export default {
setup(){
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
          name: 'file 1.png',
          url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
          status: 'success',
          message: 'Upload successful',
          type: 'image'
        },
        {
          name: 'file 2.png',
          url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
          status: 'uploading',
          message: 'Uploading...',
          type: 'image'
        }
      ]
    });

    const addressModule = reactive({
      state: {
        show: false,
        province: [
          { id: 1, name: 'Beijing' },
          { id: 2, name: 'Guangxi' },
          { id: 3, name: 'Jiangxi' },
          { id: 4, name: 'Sichuan' }
        ],
        city: [
          { id: 7, name: 'C1' },
          { id: 8, name: 'C2' },
          { id: 9, name: 'C3' },
          { id: 6, name: 'C4' }
        ],
        country: [
          { id: 3, name: 'D5' },
          { id: 9, name: 'D6' },
          { id: 4, name: 'D7' }
        ],
        town: []
      },
      methods: {
        show() {
          addressModule.state.show = !addressModule.state.show;
          if (addressModule.state.show) {
            formData2.address = '';
          }
        },
        onChange({ custom, next, value }: any) {
          formData2.address += value.name;
          const name = addressModule.state[next];
          if (name.length < 1) {
            addressModule.state.show = false;
          }
        }
      }
    });
    return { formData2, addressModule };
}
}
</script>
```
:::

## API
### Form Props

| Attribute   | Description                                              | Type   | Default |
|-------------|----------------------------------------------------------|--------|---------|
| model-value | Form data object (required when using form verification) | object |         |

### Form Events

| Event    | Description                                                | Arguments                                                                                                            |
|----------|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| validate | Triggered after any single table item fails to be verified | The `prop` value of the form item to be verified, whether the verification is passed, and the error message (if any) |

### FormItem Props

| Attribute           | Description                                                                                 | Type             | Default |
|---------------------|---------------------------------------------------------------------------------------------|------------------|---------|
| required            | Whether to display the red asterisk next to the label of the required field                 | boolean          | `false` |
| prop                | The v-model field of the form field is required when the form verification function is used | string           | -       |
| label-width         | The width of the form item label. The default unit is `px`                                  | number \| string | `90px`  |
| label-align         | Form item label alignment. The optional values are `center` `right`                         | string           | `left`  |
| body-align          | Input box alignment. The optional values are `center` `right`                               | string           | `left`  |
| error-message-align | Error prompt text alignment. The optional values are `center` and `right`                   | string           | `left`  |
| show-error-line     | Whether to mark the input box in red when the verification fails                            | boolean          | `true`  |
| show-error-message  | Whether to display the error prompt under the input box when the verification fails         | boolean          | `true`  |

### FormItem Rule data structure

Use the `rules` attribute of FormItem to define verification rules. The optional attributes are as follows:

| Attribute | Default                            | Type                                    |
|-----------|------------------------------------|-----------------------------------------|
| required  | Is it a required field             | boolean                                 |
| message   | Error prompt copy                  | string                                  |
| validator | Verification by function           | (value) => boolean \| string \| Promise |
| regex     | Verification by regular expression | RegExp                                  |

### FormItem Slots

| Name            | Description         |
|-----------------|---------------------|
| default         | Default slot        |
| label `v3.1.22` | Custom `label` slot |


``` html
  use slot
  <nut-form-item>
    <template v-slot:label>slot label</template>
  </nut-form-item>
```

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) to get Form instance and call instance methods.

| Name              | Description                                                                                                       | Arguments                   | Return value |
|-------------------|-------------------------------------------------------------------------------------------------------------------|-----------------------------|--------------|
| submit            | Method of submitting form for verification                                                                        | -                           | Promise      |
| reset             | Clear verification results                                                                                        | -                           | -            |
| validate`v3.1.13` | Active trigger verification is used to trigger when the user customizes the scene, such as blur and change events | Same as FormItem prop value | -            |