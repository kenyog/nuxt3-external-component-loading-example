<script setup>
// Load the list of external components.
const { data } = await useFetch('http://localhost:3001/list.json');
const ext_components = computed(() => {
  const list = {};
  for (const comp of data.value.components) {
    list[comp.name] = {
      name: comp.name,
      url: new URL(comp.file, 'http://localhost:3001/'),
    };
  }
  list["(none)"] = {name: "(none)", url: ""};
  return list;
});

// selected component.
const user_selection = reactive({selected: ext_components.value["(none)"]});

</script>

<template>
  <div>
    <h1>External component loading example</h1>
    <select v-model="user_selection.selected">
      <option v-for="compo of ext_components" :value="compo">
        {{ compo.name }}
      </option>
    </select>
    <ExternalComponentLoading :url="user_selection.selected.url.toString()"/>
    <!--ExternalComponentLoading :url="user_selection.selected.url.toString()"/-->
  </div>
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
