<template>
    <div class="date-picker-container" @keyup.capture="updateValue">
        <input
            type="number"
            class="date-picker-day"
            placeholder="DD"
            ref="day"
            :value="this.day"
            @input="handleDay"
            @blur="handleBlurDay"
        />
        <span class="span">/</span>
        <input
            type="number"
            class="date-picker-month"
            placeholder="MM"
            ref="month"
            :value="this.month"
            @input="handleMonth"
            @blur="handleBlurMonth"
        />
        <span class="span">/</span>
        <input
            type="number"
            class="date-picker-year"
            placeholder="YYYY"
            ref="year"
            :value="this.year"
            @input="handleYear"
            @blur="handleBlurYear"
        />
        <div class="logo-datepicker-container" @click="handelShow">
            <div class="logo-date-picker"></div>
        </div>
        <MDateContainer
            v-if="isShow"
            :dateProp="this.month + '/' + this.day + '/' + this.year"
            @datePicker="handleDatePicker"
        ></MDateContainer>
    </div>
</template>
<script>
import MDateContainer from './MDateContainer.vue';
export default {
    name: 'MDatePicker',
    props: ['modelValue'],
    components: {
        MDateContainer,
    },
    watch: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để kiểm tra ngày có vượt quá 31 hay ko nếu có sẽ lập tức lấy giá trị trước và select vào trường tháng
         */
        day(current, prev) {
            if (Number(current) > 31) {
                this.day = prev;
                this.$refs.month.select();
            }
            // if (String(current).length == 2) {
            //     this.$refs.month.select();
            // }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để kiểm tra tháng có vượt quá 12 hay ko nếu có sẽ lập tức lấy giá trị trước và select vào trường năm. Tuy nhiên tính năng này đang bị lỗi
         */
        month(current, prev) {
            if (Number(current) > 12) {
                this.month = prev;
                this.$refs.year.select();
            }
            // if (String(current).length == 2) {
            //     this.$refs.year.select();
            // }
            // if (String(current).length == 0) {
            //     this.$refs.day.select();
            // }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để ngăn không cho năm vượt quá 4 chữ số
         */
        year(current, prev) {
            if (Number(current) > 9999) {
                this.year = prev;
            }
            // if (String(current).length == 0) {
            //     this.$refs.month.select();
            // }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để emit dữ liệu ngày tháng ra bên ngoài mỗi khi có sự thay đổi dữ liệu
         */
        datePicker: function (newValue) {
            this.datePicker = newValue;
            this.day = String(this.datePicker.date).padStart(2, '0');
            this.month = String(this.datePicker.month).padStart(2, '0');
            this.year = String(this.datePicker.year);
            this.$emit(
                'handleDatePicker',
                this.year + '-' + this.month + '-' + this.day,
            );
        },
    },
    methods: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để format ngày tháng về dạng YYYY-MM-DD và hứng dữ liệu ngày tháng mỗi khi người dùng nhập bằng bàn phím
         */
        updateValue() {
            this.$emit(
                'datePicker',
                this.year + '-' + this.month + '-' + this.day,
            );
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu ngày sau khi nhập bằng bàn phím
         */
        handleDay(value) {
            this.day = value.target.value;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu tháng sau khi nhập bằng bàn phím
         */
        handleMonth(value) {
            this.month = value.target.value;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu năm sau khi nhập bằng bàn phím
         */
        handleYear(value) {
            this.year = value.target.value;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để định dạng dũ liệu cho ngày 1 -> 01 được kích hoạt sau khi unfocus
         */
        handleBlurDay() {
            if (this.day == '' || this.day == 0) {
                this.day = new Date();
                this.day = String(this.day.getDate()).padStart(2, '0');
            }
            this.day = String(this.day).padStart(2, 0);
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để định dạng dũ liệu cho tháng 1 -> 01 được kích hoạt sau khi unfocus
         */
        handleBlurMonth() {
            if (this.month == '' || this.month == 0) {
                this.month = new Date();
                this.month = String(this.month.getMonth() + 1).padStart(2, '0');
            }
            this.month = String(this.month).padStart(2, 0);
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm này ko có gì đặc biệt nhưng ko muốn xóa đề phòng lỗi
         */
        handleBlurYear() {
            if (this.year == '' || this.year < 1000) {
                this.year = new Date();
                this.year = String(this.year.getFullYear());
            }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để ẩn hiện dateContainer
         */
        handelShow() {
            this.isShow = !this.isShow;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu được chọn trong dateContainer
         */
        handleDatePicker(date) {
            this.datePicker = date;
            // this.isShow = !this.isShow;
        },
    },
    created() {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Sau khi datePicker xuất hiện sẽ hiển thị giá trị mặc định là ngày tháng hiện tại
         */
        this.day = new Date();
        this.day = String(this.day.getDate()).padStart(2, '0');
        this.month = new Date();
        this.month = String(this.month.getMonth() + 1).padStart(2, '0');
        this.year = new Date();
        this.year = String(this.year.getFullYear());
    },
    data() {
        return {
            day: null,
            month: null,
            year: null,
            datePicker: {},
            isShow: false,
        };
    },
};
</script>
<style scoped>
@import url(./datePicker.css);
</style>
