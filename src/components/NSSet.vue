<script setup>
defineProps({
  nsset: Object,
});
</script>

<template>
  <div class="box">
    <div class="box-header">NSSet:</div>
    <div class="box-body" v-if="nsset">
      <table class="nsset-table">
        <tbody>
          <tr>
            <td class="label"><strong>Handle:</strong></td>
            <td>
              <span class="link">{{ nsset.handle }}</span>
            </td>
          </tr>
          <tr>
            <td class="label"><strong>Registrar:</strong></td>
            <td>{{ nsset.registrar }}</td>
          </tr>
          <tr>
            <td class="label"><strong>DNS:</strong></td>
            <td>
              <ul class="dns-list">
                <li v-for="entry in nsset.dns" :key="entry.name">
                  {{ entry.name }} ({{ entry.ip_address }})
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="loading">Loading NSSet data...</div>
  </div>
</template>

<style scoped>
.loading {
  background: white;
  padding: 16px;
  color: gray;
  font-style: italic;
}

.dns-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.dns-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nsset-table {
  width: 100%;
  border-collapse: separate;
  table-layout: fixed;
}

.label {
  white-space: nowrap;
  padding-right: 10px;
  vertical-align: middle;
  width: 100px;
}
</style>
