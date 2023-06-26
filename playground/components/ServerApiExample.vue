<template>
  <Demo :payload="payload" @send-request="sendRequest" />
</template>

<script setup>
  import { useNuxtApp } from '#app';
  import { ref } from 'vue';
  const { $axios } = useNuxtApp();
  const payload = ref(null);
  const sendRequest = async () => {
    payload.value = null;
    payload.value = (await $axios.get("/api/external")).data;
  };
</script>
