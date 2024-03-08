<template lang="pug">
div(flex="~ col")
  VForm(@submit.prevent="onGenerate" method="post")
    div(flex="~ row" space-x="3")
      div(w="full"): VTextField(label="Body" type="number" v-model="body" variant="outlined" density="compact")
      div(w="full"): VTextField(label="Wear" type="number" v-model="wear" variant="outlined" density="compact")
      div(w="full"): VTextField(label="Eye" type="number" v-model="eye" variant="outlined" density="compact")
      div(w="full"): VTextField(label="Tail" type="number" v-model="tail" variant="outlined" density="compact")

      div
        VBtn(@click="onGenerate" type="submit" :loading="loading") Generate SVG
        VCheckbox(v-model="drawPixel" label="Draw Pixel")


  div(v-html="svgData")

  VBtn(@click="onEncode" type="submit" variant="outlined" :loading="loadingEncode") Encode new images
</template>

<script lang="ts" setup>
const loading = ref(false)
const svgData = ref("")
const body = ref(0)
const wear = ref(0)
const eye = ref(0)
const tail = ref(0)
const drawPixel = ref(false)
const loadingEncode = ref(false)

const onEncode = async () => {
  loadingEncode.value = true
  await $fetch('/api/encode', { method: 'post' })
  loadingEncode.value = false
}

const onGenerate = async () => {
  loading.value = true
  const data = await $fetch('/api/generate', {
    method: 'post',
    body: {
      body: body.value,
      eye: eye.value,
      wear: wear.value,
      tail: tail.value,
      drawPixel: drawPixel.value
    }
  })
  loading.value = false
  svgData.value = data.svg
}
</script>