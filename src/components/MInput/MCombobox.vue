<template>
    <div
        class="combobox-container"
        @keyup.down="keyDown"
        @keyup.up="keyUp"
        @keyup.enter="enter"
    >
        <input
            type="text"
            class="combobox-input"
            @input="handleFilter"
            v-model="selected"
        />
        <div class="combobox-btn-container" @click="hanldeShow">
            <div class="bombobox-btn-icon"></div>
        </div>
        <div class="combobox-select-list" v-if="isShow">
            <div
                class="combobox-select-item"
                v-for="(data, index) in dataFilter"
                :key="index"
                @click="select(data, index)"
                :class="{ active: index == this.index }"
            >
                {{ data[parameter] }}
            </div>
            <div
                class="combobox-select-item"
                style="justify-content: center; height: 98px"
                v-if="loading"
            >
                <MLoading></MLoading>
            </div>
        </div>
        <div class=""></div>
    </div>
</template>
<script>
import axios from 'axios';
import MLoading from '../MLoading/MLoading.vue';
export default {
    name: 'MCombobox',
    /***
     * Created by: Nguyễn Đăng Chiến
     * Created date: 14/01/2023
     * Description: Đầu vào của component gồm hai props: data là link api, parameter là thuộc tính dữ liệu cần hiển thị VD: DepartmentName
     */
    props: ['data', 'parameter'],
    components: {
        MLoading,
    },
    methods: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 14/01/2023
         * Description: Hàm dùng để ẩn hiện danh sách tùy chọn
         */
        hanldeShow() {
            this.isShow = !this.isShow;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 14/01/2023
         * Description: Hàm dùng để lọc dữ liệu theo text truyền vào input, hàm lọc ko phân biệt chữ hoa, chữ thường
         */
        handleFilter(value) {
            this.dataFilter = this.datas.filter((data) =>
                data[this.parameter]
                    .toLowerCase()
                    .includes(value.target.value.toLowerCase()),
            );
            this.isShow = true;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 14/01/2023
         * Description: Hàm dùng để bôi đen giá trị đã chọn trong danh sách, bằng cách nhấn vào giá trị đó
         */
        select(data, index) {
            this.selected = data[this.parameter];
            this.index = index;
            this.isShow = !this.isShow;
            this.$emit('selected', this.selected);
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 14/01/2023
         * Description: Ba hàm dứa đây giúp lựa chọn giá trị trong danh sách bằng các nút mũi tên lên xuống và enter để lấy giá trị rồi hiển thị trong input
         */
        keyDown() {
            if (this.index < this.indexTotal - 1) {
                this.index++;
                this.isShow = true;
            }
        },
        keyUp() {
            if (this.index > 0) {
                this.index--;
                this.isShow = true;
            }
        },
        enter() {
            this.selected = this.dataFilter[this.index][this.parameter];
            this.isShow = !this.isShow;
            this.$emit('selected', this.selected);
        },
    },
    created() {
        try {
            /**
             * Created by: Nguyễn Đăng Chiến
             * Created date: 19/01/2023
             * Description: hàm dùng để lấy dữ liệu api rồi filter theo từ khóa được nhập trong input, chức năng này có thể phân biệt chữ hoa chữ thường nhưng chưa phân biệt được tiếng việt hay tiếng anh
             */
            axios.get(this.data).then((response) => {
                this.datas = response.data;
                this.dataFilter = this.datas.filter((data) =>
                    data[this.parameter].toLowerCase().includes(''),
                );
                this.indexTotal = response.data.length;
            });
        } catch (error) {
            console.log(error);
        }
    },
    watch: {
        /**
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Description: hàm dùng để ẩn hiện ứng loading sau khi dữ liệu xuất hiện
         */
        datas: function () {
            this.loading = false;
        },
    },
    data() {
        return {
            isShow: false,
            datas: [],
            dataFilter: [],
            selected: null,
            index: 0,
            indexTotal: null,
            loading: true,
        };
    },
};
</script>
<style scoped>
@import url(./input.css);
</style>
