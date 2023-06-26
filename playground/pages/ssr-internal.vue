<template>
  <h4>ssr w/internal request</h4>
  Payload: {{ payloadData }}
</template>
<script setup>
import { useNuxtApp, useAsyncData } from '#app';
const { $axios } = useNuxtApp();

const payload = useAsyncData(async () => {
  try {
    const response = await $axios.get("/api/hello");
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const payloadData = payload.data;
</script>
