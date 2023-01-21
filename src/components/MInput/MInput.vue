<template>
    <div class="input-container">
        <input
            :type="typeInput"
            class="input"
            :value="modelValue"
            @input="updateValue"
            :placeholder="placeholder"
            :ref="refs"
        />
        <div class="input-icon">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MInput',
    props: ['placeholder', 'modelValue', 'type', 'refs'],
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
    /**
     * Cteated by: Nguyễn Đăng Chiến
     * Created date: 19/01/2023
     * Description: hàm này sẽ forcus vào input có refs là forcusMe
     */
    mounted() {
        this.$nextTick(() => this.$refs.focusMe.focus());
    },
    data() {
        return {
            typeInput: !this.type ? 'text' : this.type,
        };
    },
};
</script>
<style scoped>
@import url(./input.css);
</style>
