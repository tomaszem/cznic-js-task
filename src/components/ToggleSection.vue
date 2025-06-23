<script setup>
defineProps({
  modelValue: Boolean,
});
defineEmits(["update:verbose"]);
</script>

<template>
  <div class="toggle-box">
    <div class="toggle-row">
      <label class="switch">
        <input
          type="checkbox"
          :checked="modelValue"
          @change="$emit('update:verbose', $event.target.checked)"
        />
        <span class="slider"></span>
      </label>
      <span class="label">Verbose view</span>
    </div>
  </div>
</template>

<style scoped>
.toggle-box {
  background: white;
  padding: 10px 16px;
  border-radius: 4px;
  display: flex;
  justify-content: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.toggle-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.2s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(16px);
}

.label {
  font-size: 14px;
  color: #333;
}
</style>
