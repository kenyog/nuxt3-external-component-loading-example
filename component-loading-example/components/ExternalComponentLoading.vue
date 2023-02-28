<script setup>
import externalComponent from "../utils/external-component";
const NoContent = resolveComponent('NoContent');

const props = defineProps({
  url: String,
});

// An component to be displayed. use 'no-content' when the no target loaded.
const ext_comp = ref(NoContent);

watch(() => props.url, async (current, prev) => {
  try {
    // Load component and set it to 'ext_comp' when the property 'url' changed.
    const newCompModule = await externalComponent(current);
    ext_comp.value = defineComponent(newCompModule.default);
  } catch(e) {
    if (current !== "") console.error(e);
    ext_comp.value = NoContent;
  }
})
</script>

<template>
  <ClientOnly>
    <component :is="ext_comp" msg="aiueo"/>
  </ClientOnly>
</template>
