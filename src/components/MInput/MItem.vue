<template>
    <div class="combobox-select-item" v-for="(data, index) in data" :key="index" @click="handleClick(data[parameter])">
        {{ data[parameter] }}
    </div>
</template>
<script>
export default {
    name: 'MItem',
    emits: {},
    props: ['data', 'parameter'],
    methods: {
        handleClick(value) {
            this.$emit('select', value);
        },
    },
};
</script>
<style scoped>
@import url(./input.css);
</style>
