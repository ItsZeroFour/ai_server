import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "https://www.npmjs.com/package/create-replicate",
});

console.log("Start");

const output = await replicate.run(
  "fofr/any-comfyui-workflow:d638f75dc88a4f849203ead8fead832e46bd2710c79290129dec6480c491d679",
  {
    input: {
      input_file: "https://i.ibb.co/qM6cfmSh/image.png",
      output_format: "webp",
      workflow_json: JSON.stringify({
        1: {
          inputs: {
            measurement: "Pixels",
            left: 0,
            right: ["110", 0],
            top: 0,
            bottom: 0,
            image: ["63", 0],
          },
          class_type: "Image Inset Crop (rgthree)",
          _meta: {
            title: "Image Inset Crop (rgthree)",
          },
        },
        2: {
          inputs: {
            measurement: "Pixels",
            left: ["33", 0],
            right: 0,
            top: 0,
            bottom: 0,
            image: ["63", 0],
          },
          class_type: "Image Inset Crop (rgthree)",
          _meta: {
            title: "Image Inset Crop (rgthree)",
          },
        },
        3: {
          inputs: {
            enabled: true,
            swap_model: "inswapper_128.onnx",
            facedetection: "retinaface_resnet50",
            face_restore_model: "GFPGANv1.4.pth",
            face_restore_visibility: 1,
            codeformer_weight: 0.5,
            detect_gender_input: "no",
            detect_gender_source: "no",
            input_faces_index: "0",
            source_faces_index: "0",
            console_log_level: 1,
            input_image: ["2", 0],
            source_image: ["15", 0],
          },
          class_type: "ReActorFaceSwap",
          _meta: {
            title: "ReActor 🌌 Fast Face Swap",
          },
        },
        12: {
          inputs: {
            clip_name: "CLIP-ViT-H-fp16.safetensors",
          },
          class_type: "CLIPVisionLoader",
          _meta: {
            title: "Load CLIP Vision",
          },
        },
        14: {
          inputs: {
            weight: 0.7000000000000001,
            weight_type: "strong style transfer",
            combine_embeds: "concat",
            start_at: 0,
            end_at: 0.8,
            embeds_scaling: "V only",
            model: ["27", 0],
            ipadapter: ["30", 0],
            image: ["15", 0],
            clip_vision: ["12", 0],
          },
          class_type: "IPAdapterAdvanced",
          _meta: {
            title: "IPAdapter Advanced",
          },
        },
        15: {
          inputs: {
            image: "https://i.ibb.co/qM6cfmSh/image.png",
            upload: "image",
          },
          class_type: "LoadImage",
          _meta: {
            title: "Load Image",
          },
        },
        18: {
          inputs: {
            noise_mask: true,
            positive: ["60", 0],
            negative: ["61", 0],
            vae: ["27", 2],
            pixels: ["19", 0],
            mask: ["72", 0],
          },
          class_type: "InpaintModelConditioning",
          _meta: {
            title: "InpaintModelConditioning",
          },
        },
        19: {
          inputs: {
            image: "https://i.ibb.co/V0qJTQcP/Comfy-UI-temp-iovga-00002.png",
            upload: "image",
          },
          class_type: "LoadImage",
          _meta: {
            title: "Load Image",
          },
        },
        21: {
          inputs: {
            direction: "left",
            match_image_size: false,
            image1: ["3", 0],
            image2: ["1", 0],
          },
          class_type: "ImageConcanate",
          _meta: {
            title: "Image Concatenate",
          },
        },
        27: {
          inputs: {
            ckpt_name: "realisticVisionV60B1_v51HyperVAE.safetensors",
          },
          class_type: "CheckpointLoaderSimple",
          _meta: {
            title: "Load Checkpoint",
          },
        },
        30: {
          inputs: {
            ipadapter_file: "ip-adapter-plus-face_sd15.safetensors",
          },
          class_type: "IPAdapterModelLoader",
          _meta: {
            title: "IPAdapter Model Loader",
          },
        },
        33: {
          inputs: {
            value: 1024,
          },
          class_type: "Int-🔬",
          _meta: {
            title: "Int",
          },
        },
        57: {
          inputs: {
            model: ["14", 0],
          },
          class_type: "DifferentialDiffusion",
          _meta: {
            title: "Differential Diffusion",
          },
        },
        60: {
          inputs: {
            text: ["95", 0],
            clip: ["27", 1],
          },
          class_type: "CLIPTextEncode",
          _meta: {
            title: "CLIP Text Encode (Prompt)",
          },
        },
        61: {
          inputs: {
            text: "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation",
            clip: ["27", 1],
          },
          class_type: "CLIPTextEncode",
          _meta: {
            title: "CLIP Text Encode (Prompt)",
          },
        },
        62: {
          inputs: {
            seed: 687905585250581,
            steps: 6,
            cfg: 2,
            sampler_name: "dpmpp_sde",
            scheduler: "normal",
            denoise: 0.8200000000000001,
            model: ["57", 0],
            positive: ["18", 0],
            negative: ["18", 1],
            latent_image: ["18", 2],
          },
          class_type: "KSampler",
          _meta: {
            title: "KSampler",
          },
        },
        63: {
          inputs: {
            samples: ["62", 0],
            vae: ["27", 2],
          },
          class_type: "VAEDecode",
          _meta: {
            title: "VAE Decode",
          },
        },
        71: {
          inputs: {
            image: "https://i.ibb.co/PvjM8j7D/Goodvar1-Mask.png",
            upload: "image",
          },
          class_type: "LoadImage",
          _meta: {
            title: "Load Image",
          },
        },
        72: {
          inputs: {
            method: "intensity",
            image: ["71", 0],
          },
          class_type: "Image To Mask",
          _meta: {
            title: "Image To Mask",
          },
        },
        74: {
          inputs: {
            model: "wd-v1-4-moat-tagger-v2",
            threshold: 0.35,
            character_threshold: 0.85,
            replace_underscore: false,
            trailing_comma: false,
            exclude_tags: "",
            tags: "solo, looking_at_viewer, smile, simple_background, shirt, black_hair, long_sleeves, 1boy, brown_eyes, jewelry, jacket, upper_body, male_focus, teeth, necklace, grin, black_shirt, ring, blue_jacket, realistic",
            image: ["15", 0],
          },
          class_type: "WD14Tagger|pysssss",
          _meta: {
            title: "WD14 Tagger 🐍",
          },
        },
        76: {
          inputs: {
            action: "replace",
            tidy_tags: "no",
            text_a: ["74", 0],
            text_b:
              "/(?!pink_hair|blue_hair|white_hair|black_hair|brown_hair|blonde_hair|orange_hair|bald)\\b\\w+\\b/",
            text_c: "",
            result: ", , , , , black_hair, , , , , , , , , , , , , , ",
          },
          class_type: "StringFunction|pysssss",
          _meta: {
            title: "String Function 🐍",
          },
        },
        80: {
          inputs: {
            text: ["82", 0],
            blacklist_words: ",\n-",
            replacement_text: "",
          },
          class_type: "CR Text Blacklist",
          _meta: {
            title: "🔤 Text Blacklist",
          },
        },
        82: {
          inputs: {
            text: ["83", 0],
            operation: "remove_spaces",
          },
          class_type: "CR Text Operation",
          _meta: {
            title: "🔤 CR Text Operation",
          },
        },
        83: {
          inputs: {
            text: ["76", 0],
            blacklist_words: "",
            replacement_text: "",
          },
          class_type: "CR Text Blacklist",
          _meta: {
            title: "🔤 Text Blacklist",
          },
        },
        95: {
          inputs: {
            delimiter: ", ",
            clean_whitespace: "true",
            text_a: ["97", 0],
            text_b: ["80", 0],
          },
          class_type: "Text Concatenate",
          _meta: {
            title: "Text Concatenate",
          },
        },
        97: {
          inputs: {
            prompt:
              "highly detailed 3D cartoon, realistic yet stylized human face with exaggerated proportions, soft and realistic lighting,{TEXT_user} smooth shading, reflective surface,  smile",
          },
          class_type: "CR Prompt Text",
          _meta: {
            title: "Color Hint",
          },
        },
        110: {
          inputs: {
            value: 1024,
          },
          class_type: "Int-🔬",
          _meta: {
            title: "Int",
          },
        },
        118: {
          inputs: {
            images: ["21", 0],
          },
          class_type: "PreviewImage",
          _meta: {
            title: "Preview Image",
          },
        },
      }),
      output_quality: 80,
      randomise_seeds: true,
      force_reset_cache: false,
      return_temp_files: false,
    },
  }
);

console.log(output);
