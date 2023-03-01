<script setup>
import { ref } from 'vue'
const count = ref(0)
defineProps({ msg: String, })
</script>

<template>
  <div class="top">
    <h1>Pink：{{ msg }}</h1>

    <div>
      <button type="button" @click="count++">Count: {{ count }}</button>
      <p>
      This is pink colored component<br />
      which was loaded at runtime.
      </p>
    </div>
  </div>
</template>

<style scoped>
.top {
  border: pink 10px solid;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 40px;
}
h1 {
  color: pink;
}
</style>
