<script setup>
defineProps({
  keyset: Object,
});
</script>

<template>
  <div class="box">
    <div class="box-header">KeySet:</div>
    <div class="box-body" v-if="keyset">
      <table class="keyset-table">
        <tbody>
          <tr>
            <td class="label"><strong>Handle:</strong></td>
            <td>
              <span class="link">{{ keyset.handle }}</span>
            </td>
          </tr>
          <tr>
            <td class="label"><strong>Registrar:</strong></td>
            <td>{{ keyset.registrar }}</td>
          </tr>
          <tr>
            <td class="label"><strong>DNS keys:</strong></td>
            <td>
              <ul class="key-list">
                <li
                  class="key"
                  v-for="(key, index) in keyset.dns_keys"
                  :key="index"
                >
                  {{ key }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.key {
  font-size: 13px;
  word-break: break-all;
  color: #333;
  padding: 2px 0;
  word-break: keep-all;
}

.label {
  white-space: nowrap;
  padding-right: 10px;
  vertical-align: center;
}

.key-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.keyset-table {
  width: 100%;
  border-collapse: separate;
  table-layout: fixed;
}

.label {
  width: 100px;
  white-space: nowrap;
}
</style>
