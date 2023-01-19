<template>
  <div class="button-container">
    <slot></slot>
    <div class="text-button">{{ text }}</div>
  </div>
</template>
<script>
export default {
    name: "MButton",
    props: [
        "text"
    ]
}
</script>
<style scoped>
@import url(./button.css);
</style>