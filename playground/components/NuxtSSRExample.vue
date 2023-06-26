<template>
  <div class="demo box">
    <button type="button" @click="toggleIframe">
      <template v-if="embedded">
        Remove Iframe
      </template>
      <template v-else>
        Embed Iframe
      </template>
    </button>
    <div v-if="embedded">
      <iframe :src="iframeSrc"></iframe>
    </div>
  </div>
</template>

<script>
import { useNuxtApp } from '#app';
import { ref } from 'vue';

export default {
  name: "NuxtSSRExample",
  props: {
    iframeSrc: {
      type: String,
      required: true,
    }
  },
  setup() {
    const embedded = ref(false);
    const toggleIframe = () => {
      embedded.value = !embedded.value;
    };
    return { embedded, toggleIframe };
  }
}
</script>

<style>
iframe {
  border: 1px dashed #999;;
}
</style>
