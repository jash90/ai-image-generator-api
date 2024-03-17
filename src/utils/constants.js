// src/utils/constants.js

export const ADVANCED_PARAMS = {
  adaptive_cfg: 7,
  adm_scaler_end: 0.3,
  adm_scaler_negative: 0.8,
  adm_scaler_positive: 1.5,
  canny_high_threshold: 128,
  canny_low_threshold: 64,
  controlnet_softness: 0.25,
  debugging_cn_preprocessor: false,
  debugging_inpaint_preprocessor: false,
  disable_preview: false,
  freeu_b1: 1.01,
  freeu_b2: 1.02,
  freeu_enabled: false,
  freeu_s1: 0.99,
  freeu_s2: 0.95,
  inpaint_disable_initial_latent: false,
  inpaint_engine: "v1",
  inpaint_erode_or_dilate: 0,
  inpaint_respective_field: 1,
  inpaint_strength: 1,
  invert_mask_checkbox: false,
  mixing_image_prompt_and_inpaint: false,
  mixing_image_prompt_and_vary_upscale: false,
  overwrite_height: -1,
  overwrite_step: -1,
  overwrite_switch: -1,
  overwrite_upscale_strength: -1,
  overwrite_vary_strength: -1,
  overwrite_width: -1,
  refiner_swap_method: "joint",
  sampler_name: "dpmpp_2m_sde_gpu",
  scheduler_name: "karras",
  skipping_cn_preprocessor: false,
};

export const SYSTEM_MESSAGE_CONTENT = `Based on the prompt, prepare an array containing the prompt for generating images, the number of images (imageNumber), aspectRatio, and performanceSelection. Each prompt must be translated into English and expanded with as much detail as possible so that a realistic image can be generated based on it. The array should be in only array objects JSON without format. If the user does not provide an aspect ratio, performanceSelection, or the number of images, set aspectRatio to 1920*1920, performanceSelection to Extreme Speed, and imageNumber to 4. Please ensure prompts are as detailed and accurate as possible. If the user provides a number of images greater than 1, prepare a different prompt for each image.`;
export const USER_MESSAGE_CONTENT = (
  inputText,
  imageNumber = 1,
  aspectRatio = "1920*1920",
  performanceSelection = "Extreme Speed",
) =>
  `${inputText}. If I did not specify the number of images, aspect ratio, and performance selection, use these: imageNumber = ${imageNumber}, aspectRatio = ${aspectRatio}, performanceSelection = ${performanceSelection}.`;

export const GENERATE_IMAGE_FROM_TEXT_REQUEST_DATA = {
  prompt: "test",
  negative_prompt: "",
  style_selections: ["Fooocus V2", "Fooocus Enhance", "Fooocus Sharp"],
  performance_selection: "Speed",
  aspect_ratios_selection: "1920*1080",
  image_number: 1,
  image_seed: -1,
  sharpness: 2,
  guidance_scale: 4,
  base_model_name: "juggernautXL_version6Rundiffusion.safetensors",
  refiner_model_name: "None",
  refiner_switch: 0.5,
  loras: [
    {
      model_name: "sd_xl_offset_example-lora_1.0.safetensors",
      weight: 0.1,
    },
  ],
  advanced_params: ADVANCED_PARAMS,
  require_base64: false,
  async_process: false,
  webhook_url: "",
};
