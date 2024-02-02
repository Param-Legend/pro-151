AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/car/scene.gltf" }
    },
    init: function() {
      // Do something when component first attached.
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: -1, z: 2 };
      const rotation = { x: 0, y: -10, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    }
  });