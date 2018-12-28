import Vue from 'vue'

const lang = {
    lang: {
        dialog: {
            okBtnTxt: 'Ok',
            cancelBtnTxt: 'Cancel'
        },
        calendar: {
            loadPrevMonth: 'Load the last month',
            noMoreMonth: 'No earlier month~',
            start: 'Start',
            end: 'End',
            title: 'Select date',
            week: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
            monthTitle: '{year}/{month}'
        },
        menu: {
            resetBtnTxt: 'Reset'
        },
        searchbar: {
            placeText: 'Please enter the content...',
            textInfo: 'Search'
        },
        shortpassword: {
            tip1: 'Enter a digital password',
            tip2: 'Forget password'
        },
        steps: {
            step: 'Step',
            stepDesc: 'Step description'
        },
        okBtnTxt: 'Ok',
        cancelText: 'Cancel'
    }
}

Vue.config.lang = 'en-US'

export default lang