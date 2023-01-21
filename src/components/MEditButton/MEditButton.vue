<template>
    <div class="action-container">
        <div class="edit-btn">Sửa</div>
        <div class="action-list" @click="handleShow">
            <div class="action-list-icon"></div>
            <div class="action-list-dropdown" v-if="isShow">
                <div class="action">Nhân bản</div>
                <div class="action" @click="deleteEmployee">Xóa</div>
                <div class="action">Ngừng sử dụng</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MEditButton',
    emits: [],
    methods: {
        handleShow() {
            this.isShow = !this.isShow;
            this.$emit('zIndex', this.isShow);
        },
        /**
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Description: Hàm dùng để emit tín hiện xóa employee ra ngoài
         */
        deleteEmployee() {
            this.$emit('deleteEmployee');
        },
    },
    data() {
        return {
            isShow: false,
        };
    },
};
</script>
<style scoped>
@import url(./editButton.css);
</style>
