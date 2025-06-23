<script setup>
defineProps({
  fqdn: String,
});
</script>

<template>
  <div class="domain">
    <span v-if="fqdn"
      ><strong>{{ fqdn }}</strong></span
    >
    <span v-else class="loading">Loading domain name...</span>
  </div>
</template>

<style scoped>
.domain {
  text-align: left;
  padding-bottom: 1rem;
  font-size: 18px;
}

.loading {
  color: gray;
  font-size: 14px;
  font-style: italic;
}
</style>
