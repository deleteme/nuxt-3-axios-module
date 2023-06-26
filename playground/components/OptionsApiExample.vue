<template>
  <Demo :payload="payload" @send-request="sendRequest" />
</template>

<script>
export default {
  name: "OptionsApiExample",
  data() {
    return { payload: null };
  },
  methods: {
    async sendRequest() {
      this.payload = null;
      this.payload = (await this.$axios.get("/api/hello")).data;
    }
  }
}
</script>
