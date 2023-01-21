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
    props: ['', 'modelValue'],
    methods: {
        handleShow() {
            this.isSelect = !this.isSelect;
            console.log('isSelect thay doi: ', this.isSelect);
            this.$emit('isClick', this.isSelect);
        },
    },
    watch: {
        // modelValue: function () {
        //     this.isSelect = !this.isSelect;
        // },
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
