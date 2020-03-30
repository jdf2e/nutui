# TimeLine 时间轴

## 基本用法

```html
<nut-timeline>
    <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
</nut-timeline>
```

## 轴点类型
```html
<nut-timeline>
    <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem pointType="hollow">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem :pointColor="'#456700'">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
</nut-timeline>
```

## 自定义轴点样式
```html
<nut-timeline>
    <nut-timelineitem>
        <div slot="dot">
            <svg class="icon" width="15" height="15"></svg>
        </div>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem pointType="hollow">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem :pointColor="'#456700'">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
    <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
    </nut-timelineitem>
</nut-timeline>
```

### TimeLineItem Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| pointType | 轴点样式：circle/hollow | String | circle
| pointColor | 自定义轴点颜色，表示背景的颜色或表示边框颜色； | String | '‘

### TimeLineItem Slot 

| 字段 | 说明 | 
|----- | ----- | 
| title | 时间轴title | 
| dot | 自定义轴点 | 
| 无 | 基本内容 | 