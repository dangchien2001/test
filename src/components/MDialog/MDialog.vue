<template>
    <div class="dialog-layer">
        <div class="dialog-container">
            <div class="dialog-header">
                <div class="dialog-hearder-title">{{ title }}</div>
                <div class="blank"></div>
                <div class="dialog-cancel-btn" @click="cancel">
                    <div class="dialog-cancel-icon"></div>
                </div>
            </div>
            <div class="dialog-content">
                <div class="dialog-icon-container">
                    <div class="dialos-icon"></div>
                </div>
                <div>{{ description }}</div>
            </div>
            <div class="dialog-footer">
                <div class="blank"></div>
                <div class="dialog-btn" @click="cancel">
                    <MCancelButton
                        :text="'Hủy'"
                        style="margin-right: 8px"
                        class="dialog-white-btn"
                    ></MCancelButton>
                </div>
                <div class="dialog-btn" @click="accept">
                    <MButton
                        :text="'Cất'"
                        style="padding-right: 12px"
                    ></MButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MButton from '../MButton/MButton.vue';
import MCancelButton from '../MButton/MCancelButton.vue';
export default {
    name: 'MDialog',
    props: ['title', 'description', 'data'],
    components: {
        MButton,
        MCancelButton,
    },
    methods: {
        cancel() {
            this.$emit('cancel');
        },
        accept() {
            this.$emit('accept');
        },
    },
};
</script>
<style scoped>
@import url(./dialog.css);
</style>
