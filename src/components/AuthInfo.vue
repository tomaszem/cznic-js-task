<script setup>
import { formatDate } from "../utils/helpers.js"
import { ref } from "vue";
const showSecret = ref(false);

defineProps({
  expires_at: Date,
});
</script>

<template>
  <div class="box">
    <div class="box-body info-grid">
      <div class="label">AuthInfo:</div>
      <div class="value">
        <button class="btn" @click="showSecret = true">SHOW</button>
      </div>

      <div class="label">Expires at:</div>
      <div class="value">{{ formatDate(expires_at) }}</div>
    </div>

    <!-- Secret modal -->
    <div v-if="showSecret" class="modal-backdrop">
      <div class="modal">
        <button class="close-btn" @click="showSecret = false">✖</button>
        <h3>Secret AuthInfo</h3>
        <p class="secret-value">abc123-secret-code-value</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 10px;
  column-gap: 16px;
  align-items: center;
}

.label {
  font-weight: bold;
  font-size: 14px;
}

.value {
  font-size: 14px;
}

.right {
  text-align: right;
}

.btn {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #1976d2;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal {
  background: white;
  padding: 24px 30px;
  border-radius: 8px;
  position: relative;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.secret-value {
  font-weight: bold;
  margin-top: 16px;
  font-size: 16px;
  word-break: break-word;
}
</style>
