<template>
    <td class="table-body-item check-box-style" :class="isSelect">
        <MCheckbox @isClick="handleSelect"></MCheckbox>
    </td>
    <td class="table-body-item" :style="data.style" v-for="(data, index) in datas" :key="index" :class="isSelect">
        {{ data.data }}
    </td>
    <td class="table-body-item action-container" :class="isSelect + ' ' + zIndex">
        <MEditButton @zIndex="handleIndex"></MEditButton>
    </td>
</template>
<script>
import MCheckbox from '../MCheckbox/MCheckbox.vue';
import MEditButton from '../MEditButton/MEditButton.vue';

export default {
    name: 'MRow',
    props: ['datas'],
    components: {
        MCheckbox,
        MEditButton,
    },
    methods: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 13/01/2023
         * Description: Hàm dùng để bôi đen dòng sau khi chọn checkbox
         */
        handleSelect(isSelect) {
            if (isSelect == true) {
                this.isSelect = 'select';
            }
            if (isSelect == false) {
                this.isSelect = '';
            }
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 13/01/2023
         * Description: Hàm dùng để làm cho ô action có z-index = 1 sau khi bấm drop down để xóa, nhân bản hoặc vô hiệu hóa
         */
        handleIndex(zIndex) {
            if (zIndex == true) {
                this.zIndex = 'z-index';
            }
            if (zIndex == false) {
                this.zIndex = '';
            }
        },
    },
    data() {
        return {
            isSelect: '',
            zIndex: '',
        };
    },
};
</script>
<style scoped>
@import url(../MTable/table.css);
</style>
