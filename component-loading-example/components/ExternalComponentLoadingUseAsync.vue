<script setup>
import { defineAsyncComponent } from "vue";
import externalComponent from "../utils/external-component";

const props = defineProps({
  url: String,
});
console.log(props.url);

const AsyncComp = defineAsyncComponent(() =>
  externalComponent(props.url).then(r => r.default)
);
</script>

<template>
  <ClientOnly>
    <AsyncComp />
  </ClientOnly>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}
select {
  display: block;
  margin: 10px auto;
  font-size: x-large;
  margin-bottom: 50px;
}
</style>

