<script>
export default {
    name: 'MTest',
    mounted() {
        this.$refs.input.focus();
    },
};
</script>
<template>
    <input ref="input" />
</template>
