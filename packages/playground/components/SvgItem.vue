<template lang="pug">
VTooltip(:text="itemText")
  template(#activator="{ props }")
    div(v-html="item.code" aspect="1" v-bind="props")
</template>

<script lang="ts" setup>
const { item } = defineProps<{
  item: SVGGeneration
}>()

const itemText = computed(() => `
  body: ${item.body},
  wear: ${item.wear},
  eyes: ${item.eye},
  tail: ${item.tail}
`)

</script>