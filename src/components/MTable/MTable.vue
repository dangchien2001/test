<template>
    <table class="table-container">
        <tr class="table-header-container">
            <th
                class="table-header-item"
                style="
                    min-width: 20px;
                    text-align: center;
                    position: sticky;
                    top: 0;
                    left: 0;
                "
            >
                <MCheckbox @isClick="handleSelectAll"></MCheckbox>
            </th>
            <th
                class="table-header-item"
                :style="column.style"
                v-for="(column, index) in columns"
                :key="index"
            >
                {{ column.title }}
            </th>
        </tr>
        <tr
            class="table-body-container"
            v-for="(data, index) in datas"
            :key="index"
        >
            <MRow
                :datas="data"
                @deleteEmployee="deleteEmployee"
                v-model="isSelectAll"
            ></MRow>
        </tr>
    </table>
</template>
<script>
import MRow from '../MRow/MRow.vue';
import MCheckbox from '../MCheckbox/MCheckbox.vue';

export default {
    name: 'MTable',
    props: ['columns', 'employee', 'datas'],
    emits: ['deleteEmployee'],
    components: {
        MRow,
        MCheckbox,
    },
    methods: {
        handleSelect(isShow) {
            this.isSelect = !this.isSelect;
            console.log('isShow', isShow);
        },
        /**
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Description: Hàm dùng để emit hàm tín hiệu xóa nhân viên từ MRow ra ngoài
         */
        deleteEmployee(value) {
            this.$emit('deleteEmployee', value);
        },
        handleSelectAll() {
            this.isSelectAll = this.selectAll == true ? 'select' : '';
            this.selectAll = !this.selectAll;
        },
    },
    data() {
        return {
            isSelect: false,
            isSelectAll: '',
            selectAll: true,
        };
    },
};
</script>
<style scoped>
@import url(./table.css);
</style>
