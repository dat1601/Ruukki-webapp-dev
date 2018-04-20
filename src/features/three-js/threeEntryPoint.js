import SceneManager from './SceneManager';

export default function containerElement(containerElement) {
  function createCanvas(document, containerElement) {
    const canvas = document.createElement('canvas');
    containerElement.appendChild(canvas);
    return canvas;
  }

  const canvas = createCanvas(document, containerElement);
  const sceneManager = new SceneManager(canvas);

  function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '790px';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    sceneManager.onWindowResize();
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
  }

  function render(time) {
    requestAnimationFrame(render);
    sceneManager.update();
  }

  bindEventListeners();
  render();
}
