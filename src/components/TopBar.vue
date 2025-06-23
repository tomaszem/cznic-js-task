<template>
  <div class="topbar">
    <div class="left">
      <Icon icon="mdi:menu" class="hamburger-icon" />
      <span class="title">Ferda</span>
    </div>

    <div class="user-section" @click="toggleMenu" ref="button">
      <span class="user-name">JAN MUSÍLEK</span>

      <div v-if="showMenu" class="dropdown" ref="dropdown">
        <div class="user-info">
          <Icon icon="mdi:account-circle" class="account-icon" />
          <div>
            <div class="name">Jan Musílek</div>
            <div class="role">admin</div>
          </div>
        </div>
        <div class="logout" @click.stop="logout">
          <Icon icon="mdi:exit-to-app" class="account-icon" />
          Logout
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showMenu = ref(false);
const dropdown = ref(null);
const button = ref(null);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const handleClickOutside = (e) => {
  if (
    dropdown.value &&
    !dropdown.value.contains(e.target) &&
    button.value &&
    !button.value.contains(e.target)
  ) {
    showMenu.value = false;
  }
};

const logout = () => {
  alert("Logging out...");
  showMenu.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.topbar {
  background: #2196f3;
  color: white;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.left {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
}

.hamburger {
  font-size: 1rem;
  cursor: pointer;
}

.hamburger-icon {
  width: 20px;
  height: 20px;
}

.user-section {
  position: relative;
  cursor: pointer;
}

.user-name {
  font-size: 14px;
}

.dropdown {
  position: absolute;
  right: 0;
  top: 120%;
  background: white;
  color: black;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  width: 250px;
  z-index: 1000;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  gap: 0.5rem;
}

.account-icon {
  height: 24px;
  width: 24px;
  color: #808080;
}

.name {
  font-weight: bold;
}

.role {
  font-size: 12px;
  color: gray;
}

.logout {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.logout:hover {
  background-color: #f5f5f5;
}

.icon {
  font-size: 16px;
}

.title {
  margin-left: 1rem;
}
</style>
