<template lang="pug">
div(flex="~ col")
  slot
  
</template>

<script lang="ts" setup>
defineProps<{
  fold?: 'md' | 'lg',
}>()
</script>