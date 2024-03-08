import { defineConfig } from 'unocss'

import presetAttributify from "@unocss/preset-attributify";
import extractorPug from "@unocss/extractor-pug";
import presetUno from "@unocss/preset-uno"
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({

  presets: [
    presetUno({ attributifyPseudo: true }),
    presetAttributify({
      ignoreAttributes: ['placeholder']
    }),
    // presetScrollbar({}),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
  extractors: [
    extractorPug(),
    // extractorSplit
  ],
  theme: {
  },
  shortcuts: [
    {
      'pos-absolute-center': 'pos-absolute left-50% top-50%',
      'text-header-sm': 'font-light tracking-widest uppercase text-sm',
      'text-header': 'font-black text-lg',
      'text-header-lg': 'font-black text-2xl',
      'text-subheader': 'font-bold text-sm tracking--0.01em',
    }
  ]
})