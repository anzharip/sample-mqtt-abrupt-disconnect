var mqtt = require("mqtt");
const topic = "customer_devices/1313/status/update";
const willPayload = {
  deviceId: "1313",
  hardwareId: "1313",
  mqttClientId: "1313",
  elapsedTime: 90.1531753540039,
  lastCommand: "prepare",
  temperature: -1.0,
  batteryLeft: 70.0,
  playingContentId: 1,
  playingContentStatus: "started_content",
  connectionStatus: "disconnected",
  chargeStatus: "discharging",
  appStatus: "run",
  userCamera: { x: 0.0, y: 0.0, z: 1.0 },
};
const publishPayload = {
  deviceId: "1313",
  hardwareId: "1313",
  mqttClientId: "1313",
  elapsedTime: 90.1531753540039,
  lastCommand: "prepare",
  temperature: -1.0,
  batteryLeft: 70.0,
  playingContentId: 1,
  playingContentStatus: "started_content",
  connectionStatus: "connected",
  chargeStatus: "discharging",
  appStatus: "run",
  userCamera: { x: 0.0, y: 0.0, z: 1.0 },
};

var client = mqtt.connect("mqtt://localhost", {
  will: {
    topic: topic,
    payload: JSON.stringify(willPayload),
  },
});

client.on("connect", function () {
  client.subscribe(topic, function (err) {
    if (!err) {
      client.publish(topic, JSON.stringify(publishPayload));
    }
  });
  process.exit();
});

client.on("message", function (topic, message) {
  // message is Buffer

  console.log(message.toString());
  client.end();
});
