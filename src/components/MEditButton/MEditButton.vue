<template>
    <div class="action-container">
        <div class="edit-btn">Sửa</div>
        <div class="action-list" @click="handleShow">
            <div class="action-list-icon"></div>
            <div class="action-list-dropdown" v-if="isShow">
                <div class="action">Nhân bản</div>
                <div class="action">Xóa</div>
                <div class="action">Ngừng sử dụng</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MEditButton',
    methods: {
        handleShow() {
            this.isShow = !this.isShow;
            this.$emit('zIndex', this.isShow);
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
