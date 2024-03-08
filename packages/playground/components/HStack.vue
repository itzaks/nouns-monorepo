<template lang="pug">
div(flex="~ row")
  slot
  
</template>

<script lang="ts" setup>
defineProps<{
  fold?: 'md' | 'lg',
}>()
</script>