import * as THREE from 'three'
import { MeshBasicMaterial } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    new MeshBasicMaterial({color: 'blue'})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    new THREE.MeshBasicMaterial({color: 'red'})
)
cube2.position.set(1, 2, -1)

group.add(cube1)
group.add(cube2)
scene.add(group)

group.position.set(1,-1,-1)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1,0,3)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)