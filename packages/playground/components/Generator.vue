<template lang="pug">
div(flex="~ col")
  VForm(@submit.prevent="onGenerate" method="post")
    VStack() 
      HStack(gap="3")
        div(w="full"): VTextField(label="Body" type="number" v-model="body" variant="outlined" density="compact")
        div(w="full"): VTextField(label="Wear" type="number" v-model="wear" variant="outlined" density="compact")
        div(w="full"): VTextField(label="Eye" type="number" v-model="eye" variant="outlined" density="compact")
        div(w="full"): VTextField(label="Tail" type="number" v-model="tail" variant="outlined" density="compact")

      HStack(gap="3")
        div(w="full")
          VCheckbox(v-model="drawPixel" label="Draw Pixel" hide-details density="compact")

        div(w="full")
          VTextField(label="Wear Weight (%)" type="number" v-model="wearWeight" variant="outlined" density="compact")
        div(w="full")
          VTextField(label="Eye Weight (%)" type="number" v-model="eyeWeight" variant="outlined" density="compact")
        div(w="full")
          VTextField(label="Tail Weight (%)" type="number" v-model="tailWeight" variant="outlined" density="compact")


      HStack(gap="3" items="center")
        VBtn(@click="onGenerate" type="submit" :loading="loading" color="black") Generate One

        Spacer()

        VForm(@submit.prevent="onRandomize" flex="~ row" gap="3")
          VBtn(@click="onRandomize" type="submit" :loading="loading") Randomize Many

          div
            VTextField(label="Generate Amount" type="number" v-model="amount" variant="outlined" density="compact" hide-details)

  VStack(mt="3")
    div(grid="~ cols-6" v-if="svgData.length > 3")
      div(v-html="data" v-for="data in svgData")

    div(grid="~ cols-3" v-else)
      div(v-html="data" v-for="data in svgData")

  div(v-if="false")
    VBtn(@click="onEncode" type="submit" variant="outlined" :loading="loadingEncode") Encode new images
</template>

<script lang="ts" setup>
import { images } from "~/assets/scripts/image-data.json"

const loading = ref(false)
const svgData = ref<string[]>([])

const body = ref(0)
const wear = ref(0)
const eye = ref(0)
const tail = ref(0)
const amount = ref(1)

const bodyWeight = ref(100)
const wearWeight = ref(100)
const eyeWeight = ref(100)
const tailWeight = ref(100)

const drawPixel = ref(false)
const loadingEncode = ref(false)

const onEncode = async () => {
  loadingEncode.value = true
  await $fetch('/api/encode', { method: 'post' })
  loadingEncode.value = false
}

const weighted = (n: number): number => {
  if (Math.random() <= (n / 100))
    return 1
  return 0
}

const randomizeNumbers = () => {
  body.value = Math.floor(Math.random() * images.bodies.length)
  wear.value = Math.floor(Math.random() * images.wearables.length) * weighted(wearWeight.value)
  eye.value = Math.floor(Math.random() * images.eyes.length) * weighted(eyeWeight.value)
  tail.value = Math.floor(Math.random() * images.tailgrip.length) * weighted(tailWeight.value)
}

const onRandomize = async () => {
  let values = []
  for (let i = 0; i < amount.value; i++) {
    randomizeNumbers()
    const svg = await generateSVG()
    values.push(svg)
  }

  svgData.value = values
}

const onGenerate = async () => {
  const svg = await generateSVG()
  svgData.value = [svg]
}

const generateSVG = async (): Promise<string> => {
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
  return data.svg
}
</script>