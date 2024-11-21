import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

const width = window.innerWidth;
const height = window.innerHeight;

// Circle Mesh (Improved Material)
const circle = new THREE.IcosahedronGeometry(1, 8);
const circleMaterial = new THREE.MeshPhongMaterial({ 
  color: "yellow", 
  shininess: 80, 
  emissive: "yellow", 
  specular: "yellow" 
});
const mesh = new THREE.Mesh(circle, circleMaterial);

mesh.position.y = 2;
mesh.position.x = 1.5;
mesh.position.z = 2
scene.add(mesh);

// Octahedron Mesh
const octa = new THREE.OctahedronGeometry(1, 8);
const octaMaterial = new THREE.MeshPhongMaterial({ 
 
});
const octaMesh = new THREE.Mesh(octa, octaMaterial);

scene.add(octaMesh);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.5); 
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 30);
camera.position.z = 5;

const canva = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({
  canvas: canva,
});

//control
const control = new OrbitControls(camera, canva);

renderer.setSize(width, height);

function animation() {
  requestAnimationFrame(animation);

  octaMesh.rotation.y += 0.04;
  octaMesh.rotation.x += 0.01;
  octaMesh.rotation.z += 0.02;

  control.update();
  renderer.render(scene, camera);
}

animation();
