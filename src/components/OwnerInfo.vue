<script setup>
defineProps({
  owner: Object,
});
</script>

<template>
  <div class="box" v-if="owner">
    <div class="box-header">Owner</div>
    <div class="box-body">
      <table class="owner-table">
        <tbody>
          <tr>
            <td class="icon-cell"></td>
            <td class="label"><strong>Handle:</strong></td>
            <td class="value">
              <span class="link">{{ owner.handle }}</span>
            </td>
          </tr>
          <tr>
            <td class="icon-cell">
              <Icon
                :icon="
                  owner.publish?.organization
                    ? 'mdi:eye'
                    : 'mdi:eye-off-outline'
                "
                :class="owner.publish?.organization ? 'green' : 'red'"
                class="status-icon"
              />
            </td>
            <td class="label"><strong>Organization:</strong></td>
            <td class="value">{{ owner.organization }}</td>
          </tr>
          <tr>
            <td class="icon-cell">
              <Icon
                :icon="owner.publish?.name ? 'mdi:eye' : 'mdi:eye-off-outline'"
                :class="owner.publish?.name ? 'green' : 'red'"
                class="status-icon"
              />
            </td>
            <td class="label"><strong>Name:</strong></td>
            <td class="value">{{ owner.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.eye-icon {
  color: green;
}

.box-body p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.owner-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 6px;
}

.label {
  white-space: nowrap;
  width: 140px;
  vertical-align: middle;
}

.value {
  vertical-align: middle;
}

.status-icon {
  margin-right: 6px;
  vertical-align: middle;
}
</style>
