import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';

export default function canvas(canvas) {
  const screenDimensions = {
    width: canvas.width,
    height: canvas.height,
  };

  const THREE = require('three');
  const OrbitControls = require('three-orbit-controls')(THREE);

  function buildScene() {
    const scene = new THREE.Scene();
    return scene;
  }
  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;

    return renderer;
  }
  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 75;
    const nearPlane = 0.1;
    const farPlane = 1000;
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

    camera.position.z = 50;
    camera.position.y = 20;
    camera.position.x = -10;
    camera.lookAt(scene.position);

    return camera;
  }
  function createSceneSubjects(scene) {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);
    // const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
    // scene.add(hemiLightHelper);
    //
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.color.setHSL(0.1, 1, 0.9);
    dirLight.position.set(-1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    var d = 50;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = -0.0001;
    // const dirLightHeper = new THREE.DirectionalLightHelper(dirLight, 10);
    // scene.add(dirLightHeper);

    const loader = new THREE.ObjectLoader();

    loader.load(
      // resource URL
      'models/ohutlevykeskus.js',

      // onLoad callback
      // Here the loaded data is assumed to be an object
      function(obj) {
        // Add the loaded object to the scene
        obj.traverse(function(child) {
          if (child instanceof THREE.Mesh) child.material.shading = THREE.FlatShading;
        });
        obj.rotation.y = Math.PI;
        obj.position.x = -20;
        obj.position.z = 10;
        scene.add(obj);
      },

      // onProgress callback
      function(xhr) {
        console.log(xhr.loaded / xhr.total * 100 + '% loaded');
      },

      // onError callback
      function(err) {
        console.error('An error happened');
      },
    );
  }
  function update() {
    const radius = 50;
    var angle = 0;
    renderer.render(scene, camera);
    // control.orbitControl();
    // camera.position.z = radius * Math.sin(angle);
    // camera.position.x = radius * Math.cos(angle);
    // angle += 0.01;
  }
  function onWindowResize() {
    const { width, height } = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }
  //   function orbitControl() {
  //     const control = new THREE.OrbitControls(camera, canvas);
  //     return control;
  //   }

  const scene = buildScene();
  const renderer = buildRender(screenDimensions);
  const camera = buildCamera(screenDimensions);
  const sceneSubjects = createSceneSubjects(scene);
  // const control = orbitControl();
  const control = new OrbitControls(camera, canvas);

  return {
    update,
    onWindowResize,
  };
}
