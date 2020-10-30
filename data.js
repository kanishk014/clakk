var APP_DATA = {
  "scenes": [
    {
      "id": "0-balcony",
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
        "yaw": 2.1458430207016086,
        "pitch": 0.1286226037641498,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 1.7165721792192201,
          "pitch": 0.5272409664463922,
          "rotation": 0,
          "target": "1-drawing-room"
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
        "yaw": -0.6814102582977437,
        "pitch": 0.3330201198380571,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -2.891313723261508,
          "pitch": 0.47687066248427,
          "rotation": 0,
          "target": "0-balcony"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
