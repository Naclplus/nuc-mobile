<template>
    <div class="nuc-date-picker">
        <picker-wrapper
            :item-height="itemHeight" :max-count="maxCount" :show-toolbar="showToolbar" :title="title"
            @cancel="onCancel" @confirm="onConfirm"
        >
            <nuc-flexbox>
                <nuc-flexbox-item v-for="c in columns" :key="c" class="nuc-date-picker-column">
                    <scroller :item-height="itemHeight" :max-count="maxCount" :value="_this[`${c}Index`]" @change="(i) => onChange(i, c)">
                        <li v-for="(item, key) in _this[`${c}s`]" :key="key" :style="itemStyle">{{ formatLabel(item, c) }}</li>
                    </scroller>
                </nuc-flexbox-item>
            </nuc-flexbox>
        </picker-wrapper>
    </div>
</template>

<script>
import Moment from 'moment'
import Flexbox from '../flexbox'
import Scroller from '../scroller'
import PickerWrapper from '../picker-wrapper'

const FlexboxItem = Flexbox.Item

export default {
    name: 'nuc-date-picker',
    components: {
        Scroller,
        PickerWrapper,
        [Flexbox.name]: Flexbox,
        [FlexboxItem.name]: FlexboxItem
    },
    props: {
        value: {
            type: [String, Date, Moment],
            default: undefined
        },
        minYear: {
            type: [String, Number],
            default: undefined
        },
        maxYear: {
            type: [String, Number],
            default: undefined
        },
        format: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'date'
        },
        itemHeight: {
            type: Number,
            default: 44
        },
        maxCount: {
            type: Number,
            default: 5
        },
        showToolbar: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        prefixZero: {
            type: Boolean,
            default: true
        },
        suffix: {
            type: Object,
            default: () => ({
                year: '年',
                month: '月',
                date: '日',
                hour: '时',
                minute: '分'
            })
        }
    },
    data () {
        let date
        if (!this.value) {
            date = Moment()
        } else {
            if (!(this.value instanceof Moment)) {
                date = Moment(this.value)
            }
        }
        return {
            baseYear: undefined,
            mainDate: date,
            selfValue: this.formatDate(date),
            year: undefined,
            month: undefined,
            date: undefined,
            hour: undefined,
            minute: undefined,
            second: undefined
        }
    },
    computed: {
        _this () {
            return this
        },
        columns () {
            const dateType = ['year', 'month', 'date']
            const monthType = ['month', 'date']
            const timeType = ['hour', 'minute']
            if (this.type === 'date') {
                return dateType
            } else if (this.type === 'month') {
                return monthType
            } else if (this.type === 'time') {
                return timeType
            } else if (this.type === 'date-time') {
                return [].concat(dateType, timeType)
            } else if (this.type === 'month-time') {
                return [].concat(monthType, timeType)
            }
            return null
        },
        years () {
            const minYear = Number(this.minYear) || this.baseYear - 10
            const maxYear = Number(this.maxYear) || this.baseYear + 10
            const years = []
            for (let i = minYear; i <= maxYear; i++) {
                years.push(i)
            }
            return years
        },
        months () {
            return Array.apply(null, { length: 12 }).map((item, index) => index + 1)
        },
        dates () {
            const dayOfMonth = Moment({ year: this.year, month: this.month - 1 }).daysInMonth()
            return Array.apply(null, { length: dayOfMonth }).map((item, index) => index + 1)
        },
        hours () {
            return Array.apply(null, { length: 24 }).map((item, index) => index)
        },
        minutes () {
            return Array.apply(null, { length: 60 }).map((item, index) => index)
        },
        yearIndex () {
            return this.years.indexOf(this.year)
        },
        monthIndex () {
            return this.months.indexOf(this.month)
        },
        dateIndex () {
            return this.dates.indexOf(this.date)
        },
        hourIndex () {
            return this.hours.indexOf(this.hour)
        },
        minuteIndex () {
            return this.minutes.indexOf(this.minute)
        },
        itemStyle () {
            return {
                lineHeight: this.itemHeight + 'px'
            }
        }
    },
    watch: {
        value (val) {
            val = Moment(val)
            this.selfValue = this.formatDate(val)
            this.year = val.year()
            this.month = val.month() + 1
            this.date = val.date()
            this.hour = val.hour()
            this.minute = val.minute()
            this.second = val.second()
            this.$emit('input', this.selfValue)
        },
        selfValue (val) {
            if (!this.showToolbar) {
                this.$emit('input', val)
            }
            this.$emit('change', val, this.getMoment())
        }
    },
    created () {
        this.initial()
    },
    methods: {
        formatDate (date) {
            if (!this.format) {
                let format = ''
                if (this.type === 'date') {
                    format = 'YYYY-MM-DD'
                } else if (this.type === 'month') {
                    format = 'MM-DD'
                } else if (this.type === 'time') {
                    format = 'HH:mm'
                } else if (this.type === 'date-time') {
                    format = 'YYYY-MM-DD HH:mm'
                } else if (this.type === 'month-time') {
                    format = 'MM-DD HH:mm'
                }
                return date.format(format)
            }
            return date.format(this.format)
        },
        getMoment () {
            return Moment({
                year: this.year,
                month: this.month - 1,
                date: this.date,
                hour: this.hour,
                minute: this.minute
            })
        },
        formatLabel (num, column) {
            if (column === 'year') {
                return num + this.suffix[column]
            }
            if (this.prefixZero) {
                return (Array(2).join('0') + num).slice(-2) + this.suffix[column]
            } else {
                return num + this.suffix[column]
            }
        },
        initial () {
            this.baseYear = this.mainDate.year()
            this.year = this.mainDate.year()
            this.month = this.mainDate.month() + 1
            this.date = this.mainDate.date()
            this.hour = this.mainDate.hour()
            this.minute = this.mainDate.minute()
            this.second = this.mainDate.second()
        },
        onChange (index, columns) {
            this[columns] = this[`${columns}s`][index]
            if (this.dateIndex === -1) {
                this.date = Moment({ year: this.year, month: this.month - 1 }).daysInMonth()
            }
            this.selfValue = this.formatDate(this.getMoment())
        },
        onCancel () {
            this.$emit('cancel', this.selfValue, this.getMoment())
        },
        onConfirm () {
            this.$emit('confirm', this.selfValue, this.getMoment())
            this.$emit('input', this.selfValue)
        }
    }
}
</script>

<style lang="stylus">
    .nuc-date-picker-column
        overflow hidden
</style>
