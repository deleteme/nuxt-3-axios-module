<template>
  <div class="demo box">
    <button type="button" @click="$emit('sendRequest')">
      Send Request
    </button>
    <span class="label">
      Response Payload:
    </span>
    <div style="height: 22px">
      {{ payload }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payload: String,
})
</script>
