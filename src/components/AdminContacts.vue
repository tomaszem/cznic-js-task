<script setup>
defineProps({
  verbose: Boolean,
  contacts: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <!-- Non-verbose view: one box with all contacts -->
  <div v-if="!verbose" class="box">
    <div class="box-header">Administrative contacts:</div>
    <div class="box-body">
      <table class="contact-table">
        <tbody>
          <tr v-for="contact in contacts" :key="contact.handle">
            <td class="label">
              <strong>{{ contact.name }}:</strong>
            </td>
            <td>
              <span class="link">{{ contact.handle }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Verbose view: one box per contact -->
  <template v-else>
    <div class="box" v-for="contact in contacts" :key="contact.handle">
      <div class="box-header">Administrative contact:</div>
      <div class="box-body">
        <table class="contact-table">
          <tbody>
            <tr>
              <td class="icon-cell"></td>
              <td class="label-contact"><strong>Handle:</strong></td>
              <td class="value">
                <span class="link">{{ contact.handle }}</span>
              </td>
            </tr>
            <tr>
              <td class="icon-cell">
                <Icon
                  :icon="
                    contact.publish.organization
                      ? 'mdi:eye'
                      : 'mdi:eye-off-outline'
                  "
                  :class="contact.publish.organization ? 'green' : 'red'"
                  class="status-icon"
                />
              </td>
              <td class="label-contact"><strong>Organization:</strong></td>
              <td class="value">{{ contact.organization }}</td>
            </tr>
            <tr>
              <td class="icon-cell">
                <Icon
                  :icon="
                    contact.publish.name ? 'mdi:eye' : 'mdi:eye-off-outline'
                  "
                  :class="contact.publish.name ? 'green' : 'red'"
                  class="status-icon"
                />
              </td>
              <td class="label-contact"><strong>Name:</strong></td>
              <td class="value">{{ contact.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
</template>

<style scoped>
.status-icon {
  font-size: 18px;
  vertical-align: middle;
}

.box-body p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 6px;
}

.contact-table td {
  vertical-align: middle;
}

.label {
  width: 100px;
  white-space: nowrap;
}

.label-contact {
  white-space: nowrap;
  width: 140px;
  vertical-align: middle;
}

.label-contact .status-icon {
  margin-right: 6px;
  vertical-align: middle;
}
</style>
