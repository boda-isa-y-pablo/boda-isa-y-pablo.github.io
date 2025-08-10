<template>
  <div class="bg-[#fff0ed] relative overflow-auto">
    <div class="relative z-2">
      <h1 class="flex justify-center items-center text-3xl font-bold mt-12 mb-2">
        <Icon :iconNode="gemRing" name="" :size="36" class="mt-1 mr-1 color-primary" />
        <span class="color-primary">Nuestra Boda</span>
      </h1>

      <img class="block mx-auto w-85" src="/img/logo.png" alt="Logo">

      <p class="text-center italic mb-6">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Est dolore quidem in nemo, aliquam autem. Voluptate provident."
      </p>

      <div class="mb-6">
        <h1 class="flex justify-center items-center text-2xl font-bold mb-4">
          <CalendarDays :size="28" class="mt-1 mr-1" />
          <span class="color-primary">Fecha y Hora</span>
        </h1>

        <div style="display: block; margin: 0 auto;">
          <table style="margin: 0 auto; border-collapse: collapse;">
            <thead style="border-bottom: 1px solid black;">
              <tr>
                <th style="border-right: 1px solid black; width: 7rem">
                  Fecha
                </th>
                <th style="width: 7rem">
                  Hora
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border-right: 1px solid black;">
                  <h1 class="text-center m-0 text-4xl color-primary">28</h1>
                  <p class="text-center m-0">Diciembre</p>
                </td>
                <td>
                  <h1 class="text-center m-0 text-4xl color-primary">7:00</h1>
                  <p class="text-center m-0">PM</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-6">
        <h1 class="flex justify-center items-center text-2xl font-bold mb-4">
          <Church :size="28" class="mt-1 mr-1" />
          <span class="color-primary">
            Ceremonia
          </span>
        </h1>
        <p class="text-center font-bold m-0">Parroquia Medalla Milagrosa</p>
        <p class="text-center m-0">Adolfo Ruiz Cortines, Miguel Alemán</p>
      </div>

      <div class="flex justify-center gap-6 text-sm">
        <div>
          <div class="flex justify-center">
            <div class="flex justify-center items-center rounded-full size-10 bg-primary">
              <Phone class="text-gray-100" :size="22" />
            </div>
          </div>
          <p class="text-center">Asistencia</p>
        </div>
        <div>
          <div class="flex justify-center">
            <div class="flex justify-center items-center rounded-full size-10 bg-primary">
              <Church class="text-gray-100" :size="22" />
            </div>
          </div>
          <p class="text-center">Galería</p>
        </div>
        <div>
          <div class="flex justify-center">
            <div class="flex justify-center items-center rounded-full size-10 bg-primary">
              <Church class="text-gray-100" :size="22" />
            </div>
          </div>
          <p class="text-center">Agendar</p>
        </div>
      </div>
    </div>

    <img src="/img/flowers.png" alt="flowers top left"
      class="z-1 absolute top-0 left-0 -translate-x-60 -translate-y-1/2 rotate-280"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(60%);">

    <img src="/img/flowers.png" alt="flowers top right"
      class="z-1 absolute top-0 right-0 translate-x-78 -translate-y-5 rotate-50"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(60%);">

    <img src="/img/flowers.png" alt="flowers bottom right"
      class="z-1 absolute bottom-0 right-0 translate-x-1/2 translate-y-45 rotate-45"
      style="filter: saturate(75%) contrast(75%) sepia(75%) opacity(60%);">

    <vue-particles id="particlesBackground" :options
      class="absolute top-0 left-0 w-screen h-screen z-1"></vue-particles>
  </div>
</template>

<script setup lang="ts">
import { CalendarDays, Icon, Church, Phone, Image, Calendar } from 'lucide-vue-next';
import { gemRing } from '@lucide/lab';

defineProps<{
  // TODO: Define props
}>();


const options = {
  "autoPlay": true,
  "background": {
    "color": {
      // "value": "#101828"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "opacity": 1,
      "color": {
        "value": ""
      }
    },
    "enable": false
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": false,
    "zIndex": -1
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": []
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": [],
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "particle": {
        "replaceCursor": false,
        "pauseOnStop": false,
        "stopDelay": 0
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#81543a", // NOTE: color
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": []
    },
    "groups": {},
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "top",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": false,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false, // NOTE: random movement
      "size": true,
      "speed": 1,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": false,
        "width": 1920,
        "height": 1080
      },
      "limit": {
        "mode": "delete",
        "value": 0
      },
      "value": 30 // NOTE: number
    },
    "opacity": {
      "value": 0.25,
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 0.25,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {},
      "type": "heart" // NOTE: shape
    },
    "size": {
      "value": 4, // NOTE: size
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 5,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0,
      "color": {
        "value": "#ffffff",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "s": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "l": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          }
        }
      },
      "opacity": 1
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#fff"
      },
      "consent": false,
      "distance": 100,
      "enable": false,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "emitters": [],
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
};
</script>
