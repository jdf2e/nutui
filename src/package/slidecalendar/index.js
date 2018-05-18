import SlideCalendar from './src/slidecalendar.vue';

SlideCalendar.install = function(Vue) {
    Vue.component(SlideCalendar.name, SlideCalendar);
};

export default SlideCalendar