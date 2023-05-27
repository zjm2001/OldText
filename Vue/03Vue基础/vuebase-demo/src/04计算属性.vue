<template>
  <div id="app">
    {{ num }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 100,
      b: 200,
    }
  },
  computed: {
    num() {
      return this.a + this.b
    }
  }
}
</script>

<style></style>