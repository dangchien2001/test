<template>
    <div class="date-container">
        <div class="date-info-container">
            <div class="date-info">Tháng {{ this.month }}, {{ this.year }}</div>
            <div class="year-select">
                <div class="year-select-icon"></div>
            </div>
            <div class="blank"></div>
            <div class="pre-month" @click="preMonth">
                <div class="pre-month-icon"></div>
            </div>
            <div class="next-month" @click="nextMonth">
                <div class="next-month-icon"></div>
            </div>
        </div>
        <div class="day-container">
            <div class="day-info">CN</div>
            <div class="day-info">T2</div>
            <div class="day-info">T3</div>
            <div class="day-info">T4</div>
            <div class="day-info">T5</div>
            <div class="day-info">T6</div>
            <div class="day-info">T7</div>
        </div>
        <table class="date-table">
            <!-- bảng 42 ô được tạo ra bằng cách chạy 2 vòng lặp mỗi ô trong vòng lặp có một key tương ứng riêng phục vụ cho việc hiển thị ngày đang được chọn, class active sẽ xuất hiện ở ô ngày được chọn khi ngày được chọn (this.index) trùng với key của ô đó  -->
            <tr class="date-row" v-for="i in 6" :key="i">
                <td
                    class="date-day"
                    v-for="j in 7"
                    :key="j + 7 * (i - 1)"
                    :class="{ active: j + 7 * (i - 1) == this.index }"
                    @click="handleSelectDate(this['td' + (j + 7 * (i - 1))])"
                >
                    {{ this['td' + (j + 7 * (i - 1))] }}
                </td>
            </tr>
        </table>
        <div class="today-container" @click="returnToday">Hôm nay</div>
    </div>
</template>
<script>
/***
 * Created by: Nguyễn Đăng Chiến
 * Created date: 19/01/2023
 * Desciption: Date container hoạt động bằng 1 ma trận bao gồm 42 ô trống tương ứng với 6 tuần (số tuần lớn nhất mà một tháng có thể có), các ngày trong tháng sẽ được thêm lần lượt vào các ô trống đó (mặc định các ô trống có giá trị null), các hàm dưới đây nhằm mục đích xếp các ngày trong tháng vào đúng ô của nó (để tham khảo hãy xem qua datepicker mặc định trên window).
 */
export default {
    name: 'MDateContainer',
    props: ['dateProp'],
    methods: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để hứng sự thay đổi của ngày tháng sau khi người dùng click chọn một ngày bất kì, chức năng ẩn sau khi chọn đã bị đóng băng
         */
        handleSelectDate(date) {
            this.date = date;
            this.reset();
            this.$emit('hideDateContainer');
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để check năm nhuận hay năm thường trả về boolean để thay đổi sô ngày trong tháng 2
         */
        checkYear(year) {
            if (year % 400 == 0) {
                return true;
            }
            if (year % 4 == 0 && year % 100 !== 0) {
                return true;
            }
            return false;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để tiến lùi các tháng và reset cho các ô trống thành giá trị null
         */
        preMonth() {
            if (this.month == 1) {
                this.month = 13;
                this.year = this.year - 1;
                this.reset();
            }
            if (this.month != 0) {
                this.month = this.month - 1;
                this.reset();
            }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để tiến lùi các tháng và reset cho các ô trống thành giá trị null
         */
        nextMonth() {
            if (this.month == 12) {
                this.month = 0;
                this.year = this.year + 1;
                this.reset();
            }
            if (this.month != 12) {
                this.month = this.month + 1;
                this.reset();
            }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để đưa dữ liệu ngày thàng trở về hiện tại (chức năng ẩn sau khi chọn đã bị đóng băng)
         */
        returnToday() {
            this.date = new Date().getDate();
            this.month = new Date().getMonth() + 1;
            this.year = new Date().getFullYear();
            this.reset();
            this.index = Number(this.date) + Number(this.day) - 1;
            this.$emit('hideDateContainer');
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để đặt lại giá trị null cho 42 ô trống sau đó làm cho ngày đầu tiên của tháng vào đúng ô rồi sắp xếp các ngày tiếp theo vào các ô tăng dần sau đó, hàm cũng sẽ kiểm tra số lượng ngày trong từng tháng để sắp xếp cho hợp lí.
         */
        reset() {
            for (let i = 0; i < 43; i++) {
                this['td' + (i + 1)] = null;
            }
            this.const = 1;
            this.day = new Date(`${this.year}-${this.month}-01`).getDay() + 1;
            this.index = this.date + this.day - 1;
            if (this.checkYear(this.year) && this.month == 2) {
                this.daysInMonth = 29;
            }
            if (!this.checkYear(this.year) && this.month == 2) {
                this.daysInMonth = 28;
            }
            if (
                this.month == 1 ||
                this.month == 3 ||
                this.month == 5 ||
                this.month == 8 ||
                this.month == 10 ||
                this.month == 12
            ) {
                this.daysInMonth = 31;
            }
            if (
                this.month == 4 ||
                this.month == 6 ||
                this.month == 9 ||
                this.month == 11
            ) {
                this.daysInMonth = 30;
            }
            this['td' + this.day] = this.const;
            for (let i = this.day; i < this.day + this.daysInMonth - 1; i++) {
                this['td' + (i + 1)] = this.const + 1;
                this.const++;
            }
        },
    },
    created() {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Sau khi date container xuất hiện sẽ sắp xếp các ngày trong tháng hiện tại ngoài thời gian thực vào các ô cho hợp lí
         */
        this.day = new Date(`${this.year}-${this.month}-01`).getDay() + 1;
        this.index = this.date + this.day - 1;
        if (this.checkYear(this.year) && this.month == 2) {
            this.daysInMonth = 29;
        }
        if (!this.checkYear(this.year) && this.month == 2) {
            this.daysInMonth = 28;
        }
        if (
            this.month == 1 ||
            this.month == 3 ||
            this.month == 5 ||
            this.month == 8 ||
            this.month == 10 ||
            this.month == 12
        ) {
            this.daysInMonth = 31;
        }
        if (
            this.month == 4 ||
            this.month == 6 ||
            this.month == 9 ||
            this.month == 11
        ) {
            this.daysInMonth = 30;
        }
        this['td' + this.day] = this.const;
        for (let i = this.day; i < this.day + this.daysInMonth - 1; i++) {
            this['td' + (i + 1)] = this.const + 1;
            this.const++;
        }
    },
    /***
     * Created by: Nguyễn Đăng Chiến
     * Created date: 19/01/2023
     * Desciption: Hàm dùng để hứng sự thay đổi của ngày tháng sau đó emit ra bên ngoài
     */
    updated() {
        this.datePicker = {
            date: this.date,
            month: this.month,
            year: this.year,
        };
        this.$emit('datePicker', this.datePicker);
    },
    data() {
        return {
            datePicker: {},
            index: null,
            day: null,
            dateActive: null,
            daysInMonth: null,
            const: 1,
            date: new Date(this.dateProp).getDate(),
            month: new Date(this.dateProp).getMonth() + 1,
            year: new Date(this.dateProp).getFullYear(),
            td1: null,
            td2: null,
            td3: null,
            td4: null,
            td5: null,
            td6: null,
            td7: null,
            td8: null,
            td9: null,
            td10: null,
            td11: null,
            td12: null,
            td13: null,
            td14: null,
            td15: null,
            td16: null,
            td17: null,
            td18: null,
            td19: null,
            td20: null,
            td21: null,
            td22: null,
            td23: null,
            td24: null,
            td25: null,
            td26: null,
            td27: null,
            td28: null,
            td29: null,
            td30: null,
            td31: null,
            td32: null,
            td33: null,
            td34: null,
            td35: null,
            td36: null,
            td37: null,
            td38: null,
            td39: null,
            td40: null,
            td41: null,
            td42: null,
        };
    },
};
</script>
<style scoped>
@import url(./dateContainer.css);
</style>
