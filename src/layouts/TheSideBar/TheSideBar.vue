<template>
    <div class="sidebar-container">
        <div class="sidebar-list-item-container">
            <div
                class="sidebar-item-container"
                :class="item.sidebarActive"
                v-for="(item, index) in sidebarItems"
                :key="index"
            >
                <div class="sidebar-item-icon-container">
                    <div class="sidebar-item-icon" :class="item.sidebarIcon"></div>
                </div>
                <div class="sidebar-item-text">{{ item.sidebarText }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import resource from '@/js/resource';

export default {
    name: 'TheSideBar',
    data() {
        return {
            sidebarItems: resource.sidebarItems,
        };
    },
};
</script>
<style scoped>
@import url(./sidebar.css);
</style>
