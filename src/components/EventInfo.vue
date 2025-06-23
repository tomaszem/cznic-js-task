<script setup>
import { formatDate } from "../utils/helpers.js";

defineProps({
  events: Object,
});
</script>

<template>
  <div class="box">
    <div class="box-header">Events:</div>
    <div class="box-body" v-if="events">
      <table class="event-table">
        <tbody>
          <tr>
            <td class="label">Create date:</td>
            <td class="date">{{ formatDate(events.registered?.timestamp) }}</td>
            <td class="registrar">
              <strong>Registrar:</strong>
              <span class="registrar-handle">{{
                events.registered?.registrar_handle
              }}</span>
            </td>
          </tr>
          <tr>
            <td class="label">Update date:</td>
            <td class="date">{{ formatDate(events.updated?.timestamp) }}</td>
            <td class="registrar">
              <strong>Registrar:</strong>
              <span class="registrar-handle">{{
                events.updated?.registrar_handle
              }}</span>
            </td>
          </tr>
          <tr>
            <td class="label">Transfer date:</td>
            <td class="date">
              {{ formatDate(events.transferred?.timestamp) }}
            </td>
            <td class="registrar">
              <strong>Registrar:</strong>
              <span class="registrar-handle">{{
                events.transferred?.registrar_handle
              }}</span>
            </td>
          </tr>
          <tr>
            <td class="label">Delete date:</td>
            <td class="date">—</td>
            <td class="registrar"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="loading">Loading event data...</div>
  </div>
</template>

<style scoped>
.event-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 10px;
  column-gap: 16px;
  align-items: center;
}

.label {
  font-weight: bold;
  font-size: 14px;
  width: 160px;
}

.value {
  font-size: 14px;
}

.event-table {
  width: 100%;
  border-collapse: collapse;
}

.event-table td {
  padding: 8px 10px;
  vertical-align: top;
}

.date {
  width: 300px;
}

.registrar {
  width: 250px;
  color: #000;
}

.registrar-handle {
  color: #2196f3;
  margin-left: 4px;
}
</style>
