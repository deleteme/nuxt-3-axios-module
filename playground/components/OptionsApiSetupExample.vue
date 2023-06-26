<template>
  <Demo :payload="payload" @send-request="sendRequest" />
</template>

<script>
import { useNuxtApp } from '#app';
import { ref } from 'vue';

export default {
  name: "OptionsApiSetupExample",
  setup() {
    const { $axios } = useNuxtApp();
    const payload = ref(null);
    const sendRequest = async () => {
      payload.value = null;
      payload.value = (await $axios.get("/api/hello")).data;
    };
    return { sendRequest, payload };
  }
}
</script>
