<template>
    <div class="main-container">
        <div class="main-header">
            <div class="main-title">Nhân viên</div>
            <div class="blank"></div>
            <MButton :text="'Thêm mới nhân viên'" @click="onShowForm">
            </MButton>
        </div>
        <div class="main-content">
            <div class="header-main-content">
                <MInput
                    :placeholder="'Tìm theo mã, tên nhân viên'"
                    class="input-search"
                >
                    <MButton :text="''" class="search-btn">
                        <div class="search-icon-container">
                            <div class="search-icon"></div>
                        </div>
                    </MButton>
                </MInput>
                <MButton class="refresh-btn" @click="resetData">
                    <div class="refresh-icon-container">
                        <div class="refresh-icon"></div>
                    </div>
                </MButton>
            </div>
            <div class="content-main-content">
                <MTable
                    :columns="columns"
                    :datas="datas"
                    v-if="!loading"
                ></MTable>
                <div class="loading-container" v-if="loading">
                    <MLoading></MLoading>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MButton from '@/components/MButton/MButton.vue';
import MInput from '@/components/MInput/MInput.vue';
import MTable from '@/components/MTable/MTable.vue';
import resource from '@/js/resource';
import axios from 'axios';
import MLoading from '../../components/MLoading/MLoading.vue';

export default {
    name: 'TheMain',
    props: ['modelValue'],
    components: {
        MButton,
        MInput,
        // eslint-disable-next-line
        MTable,
        MLoading,
    },
    created() {
        try {
            //lay du lieu
            axios
                .get('https://cukcuk.manhnv.net/api/v1/employees')
                .then(
                    (response) =>
                        (this.datas = resource.formatData(response.data)),
                );
        } catch (error) {
            console.log(error);
        }
    },
    watch: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm sẽ ẩn đi hiệu ứng loading khi data đã được thêm vào bảng (biến data thay đổi)
         */
        datas: function () {
            this.loading = false;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để làm mới dữ liệu bằng cách hứng sự thay đổi từ bên ngoài thông qua props modelValue
         */
        modelValue: function () {
            this.resetData();
        },
    },
    methods: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm làm mới dữ liệu
         */
        resetData() {
            try {
                this.loading = true;
                //lay du lieu
                axios
                    .get('https://cukcuk.manhnv.net/api/v1/employees')
                    .then(
                        (response) =>
                            (this.datas = resource.formatData(response.data)),
                    );
            } catch (error) {
                console.log(error);
            }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để ẩn form
         */
        onShowForm() {
            this.$emit('showForm');
        },
    },
    data() {
        return {
            columns: resource.columns,
            datas: resource.formatData(resource.dataTests),
            loading: true,
        };
    },
};
</script>
<style scoped>
@import url(./main.css);
</style>
