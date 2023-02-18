
const scene = new THREE.Scene() // new threejs class called scene
console.log('Test');

// create red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color: 'blue'} );
const mesh = new THREE.Mesh( geometry, material);

//add the cube to our scene
scene.add(mesh);

// create the camera

const size = {w:800, h:600};
const camera = new THREE.PerspectiveCamera(75, size.w/size.h);
camera.position.z = 5;
camera.position.x = 0;
camera.position.y = 2;
scene.add(camera);

//creating the renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const render = new THREE.WebGLRenderer({
    canvas: canvas
});

render.setSize(size.w, size.h);
render.render(scene, camera);