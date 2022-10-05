import './style.css'

import * as THREE from 'three';

// 1. Let's add the Scene. A Scene IS A Container
const Scene = new THREE.Scene();

// 2. The Camera 
const Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 3. The Renderer
const Renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

Renderer.setPixelRatio(window.devicePixelRatio );
Renderer.setSize(window.innerWidth, window.innerHeight);
Camera.position.setZ(30);
Renderer.render(Scene, Camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

Scene.add(torus);
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  Renderer.render(Scene, Camera);
}

animate()