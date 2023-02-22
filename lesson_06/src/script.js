import * as THREE from 'three'
import { MeshDepthMaterial } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


renderer.setSize(sizes.width, sizes.height)

//animations
const clock = new THREE.Clock()
var x = 0
var time = Date.now()
function tick(){

    const current_time = Date.now()
    const delta_time = current_time-time
    time = current_time
    console.log(delta_time)

    const elapsed = clock.getElapsedTime()
    if(mesh.position.x >= 5){
        x+=1
        if(x%2 != 0){
            mesh.material.color.set('blue')
        }
        else{
            mesh.material.color.set('red')
        }
        mesh.position.x = -5
    }
    else{
        mesh.position.x += 0.001*delta_time
    }
    mesh.rotation.y+=0.001*delta_time
    mesh.rotation.z+=0.001*delta_time
    mesh.position.y = Math.sin(elapsed)
    camera.position.x = Math.sin(elapsed)
    camera.position.y = Math.cos(elapsed)
    console.log('tic')
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick) //passes in the tick function as an argument
}

tick() 