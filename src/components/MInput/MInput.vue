<template>
    <div class="input-container">
        <input
            :type="typeInput"
            class="input"
            :value="modelValue"
            @input="updateValue"
            :placeholder="placeholder"
        />
        <div class="input-icon">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MInput',
    props: ['placeholder', 'modelValue', 'type'],
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        },
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
