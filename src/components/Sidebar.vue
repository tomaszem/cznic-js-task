<script setup></script>

<template>
  <div class="sidebar">
    <div class="menu">
      <div class="menu-label">APPLICATIONS</div>
      <div class="menu-item selected">
        <Icon icon="mdi:earth" class="menu-icon" />
        <span class="item">Registry</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
  color: white;
  background-color: #2196f3;
  padding: 12px;
  border-radius: 4px;
}

.menu {
  margin-top: 1rem;
  text-align: left;
}

.menu-label {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  color: gray;
  margin-left: 1rem;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #ffc107;
  padding: 10px;
  color: #000;
  cursor: pointer;
}

.menu-item .pi {
  margin-right: 1rem;
  font-size: 1rem;
}

.menu-icon {
  font-size: 24px;
  margin-right: 8px;
}

/* Currently hide sidebar on small screens */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
