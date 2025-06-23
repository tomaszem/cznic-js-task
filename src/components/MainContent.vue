<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import ToggleSection from "./ToggleSection.vue";
import AuthInfo from "./AuthInfo.vue";
import EventInfo from "./EventInfo.vue";
import StateFlags from "./StateFlags.vue";
import OwnerInfo from "./OwnerInfo.vue";
import AdminContacts from "./AdminContacts.vue";
import NSSet from "./NSSet.vue";
import KeySet from "./KeySet.vue";
import Domain from "./Domain.vue";

const verboseView = ref(false);
const domainData = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get("/domain-detail.json");
    domainData.value = response.data;
    console.log(response.data);
  } catch (err) {
    console.error("Failed to load domain detail:", err);
  }
});
</script>

<template>
  <div class="main">
    <div class="content">
      <Domain :fqdn="domainData?.fqdn" />
      <div class="toggle-wrapper">
        <ToggleSection v-model:verbose="verboseView" />
      </div>

      <div class="columns">
        <!-- LEFT layout -->
        <div class="left-column">
          <AuthInfo :expires_at="domainData?.expires_at" />
          <EventInfo :events="domainData?.events" />
          <StateFlags
            :verbose="verboseView"
            :flags="domainData?.state_flags?.flags || []"
          />
        </div>
        <!-- RIGHT layout -->
        <div class="right-column">
          <OwnerInfo :owner="domainData?.owner" />
          <AdminContacts
            :verbose="verboseView"
            :contacts="domainData?.administrative_contacts || []"
          />
          <NSSet :nsset="domainData?.nsset" />
          <KeySet :keyset="domainData?.keyset" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  flex: 1;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  padding: 20px;
  overflow-y: auto;
  height: calc(100vh - 50px);
}

.toggle-wrapper {
  margin-bottom: 20px;
}

.domain {
  text-align: left;
  padding-bottom: 1rem;
}

.columns {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.left-column {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 300px;
  width: 100%;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 300px;
  width: 100%;
}

@media (max-width: 768px) {
  .columns {
    flex-direction: column;
  }
}
</style>
