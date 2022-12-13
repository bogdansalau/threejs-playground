import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Key } from 'ts-keycode-enum'

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xff0000 );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.CircleGeometry(20);
const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    wireframe: false,
});

const disc = new THREE.Mesh(geometry, material)
scene.add(disc)


function setupKeyControls() {
    document.onkeydown = function(e) {
        let geom;
        switch (e.keyCode) {
            case Key.DownArrow:
                break;
            case Key.UpArrow:
                break;
            case Key.RightArrow:
                disc.rotation.x -= 0.1;
                break;
            case Key.LeftArrow:
                disc.rotation.z += 0.1;
                break;
        }
    };
}

setupKeyControls();

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}
animate()
