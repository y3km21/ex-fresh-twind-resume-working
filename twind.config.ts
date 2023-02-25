import { Options } from "$fresh-main-plugins/twindv1.ts";
import { defineConfig } from "twind";

import presetAutoPrefix from "twind-preset-autoprefix";
import presetTailWind from "twind-preset-tailwind";

export default {
  ...defineConfig({
    presets: [presetAutoPrefix(), presetTailWind()],
  }),

  selfURL: import.meta.url,
} as Options;
