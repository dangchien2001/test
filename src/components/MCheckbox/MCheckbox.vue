<template>
    <div class="checkbox-container" @click="handleShow">
        <div v-if="isSelect" class="checkbox-check-icon">
            <div class="check-icon"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MCheckbox',
    methods: {
        handleShow() {
            this.isSelect = !this.isSelect;
            this.$emit('isClick', this.isSelect);
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
@import url(./checkbox.css);
</style>
