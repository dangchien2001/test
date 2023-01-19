<template>
    <table class="table-container">
        <tr class="table-header-container">
            <th class="table-header-item" :style="column.style" v-for="(column, index) in columns" :key="index">
                {{ column.title }}
            </th>
        </tr>
        <tr class="table-body-container" v-for="(data, index) in datas" :key="index">
            <MRow :datas="data"></MRow>
        </tr>
    </table>
</template>
<script>
import MRow from '../MRow/MRow.vue';

export default {
    name: 'MTable',
    props: ['columns', 'employee', 'datas'],
    components: {
        MRow,
    },
    methods: {
        handleSelect(isShow) {
            this.isSelect = !this.isSelect;
            console.log('isShow', isShow);
        },
    },
    data() {
        return {
            isSelect: false,
        };
    },
};
</script>
<style scoped>
@import url(./table.css);
</style>
