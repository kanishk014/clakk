var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.048477212022507,
        "pitch": -0.05244065077057414,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 1.6173337146814646,
          "pitch": 0.5225840826018437,
          "rotation": 0,
          "target": "1-drawing-room"
        },
        {
          "yaw": 1.4599868099522881,
          "pitch": 0.07494902942394077,
          "rotation": 4.71238898038469,
          "target": "2-gallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-drawing-room",
      "name": "Drawing Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.1811996857099025,
        "pitch": 0.17468850498397615,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -2.882330394128388,
          "pitch": 0.3451659916384493,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.365508712799695,
          "pitch": 0.2636570263850224,
          "rotation": 4.71238898038469,
          "target": "2-gallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gallery",
      "name": "Gallery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6713917371018407,
          "pitch": 0.31903624926596663,
          "rotation": 0,
          "target": "1-drawing-room"
        },
        {
          "yaw": -2.9117127741911837,
          "pitch": 0.3636227640553997,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.0331030493682718,
          "pitch": 0.21847161729412612,
          "rotation": 0,
          "target": "4-bathroom-1"
        },
        {
          "yaw": -0.3478133129809695,
          "pitch": 0.23663287358939122,
          "rotation": 4.71238898038469,
          "target": "5-bedroom-1"
        },
        {
          "yaw": 0.03770857969181485,
          "pitch": 0.21437560597370364,
          "rotation": 0,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00033495521126170047,
          "pitch": 0.6006293685902406,
          "rotation": 1.5707963267948966,
          "target": "2-gallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom-1",
      "name": "Bathroom-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.024500227639119,
          "pitch": 0.16943693284217254,
          "rotation": 0,
          "target": "2-gallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-1",
      "name": "Bedroom-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4249761577981559,
          "pitch": 0.2826231662663261,
          "rotation": 0,
          "target": "2-gallery"
        },
        {
          "yaw": 1.3951432286264094,
          "pitch": 0.2808599468676878,
          "rotation": 0,
          "target": "6-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom-2",
      "name": "Bathroom-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7780014967325242,
          "pitch": 0.053211687112732164,
          "rotation": 0,
          "target": "5-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.409967417258663,
          "pitch": 0.15269633735918475,
          "rotation": 0,
          "target": "2-gallery"
        },
        {
          "yaw": -0.4796914754902968,
          "pitch": 0.16838315385772873,
          "rotation": 0,
          "target": "8-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.308396583616954,
          "pitch": 0.2745279504685225,
          "rotation": 0,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "House-1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
