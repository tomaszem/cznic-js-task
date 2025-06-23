<script setup>
import Sidebar from "./components/Sidebar.vue";
import MainContent from "./components/MainContent.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <div class="app">
    <TopBar />
    <div class="body">
      <Sidebar />
      <MainContent />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  overflow: hidden;
}

.body {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
