<template>
    <div class="cancel-button-container">
        <div class="cancel-text-button">{{ text }}</div>
    </div>
</template>
<script>
export default {
    name: 'MCancelButton',
    props: ['text'],
};
</script>
<style scoped>
@import url(./cancelButton.css);
</style>
