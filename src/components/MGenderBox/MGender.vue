<template>
    <div class="gender-box-container">
        <label class="container" @click="this.picked = 0"
            >Nam
            <input
                type="radio"
                :checked="picked == 0"
                id="0"
                name="radio"
                value="0"
            />
            <span class="checkmark"></span>
        </label>
        <label class="container" @click="this.picked = 1"
            >Nữ
            <input
                type="radio"
                name="radio"
                :checked="picked == 1"
                id="1"
                value="1"
            />
            <span class="checkmark"></span>
        </label>
        <label class="container" @click="this.picked = 2"
            >Khác
            <input
                type="radio"
                name="radio"
                :checked="picked == 2"
                id="2"
                value="2"
            />
            <span class="checkmark"></span>
        </label>
    </div>
</template>
<script>
export default {
    name: 'MGender',
    watch: {
        picked: function (newValue) {
            this.$emit('emitGenderId', newValue);
        },
    },
    data() {
        return {
            picked: 2,
        };
    },
};
</script>
<style scoped>
@import url(./genderBox.css);
</style>
