// import * as THREE from 'three';
// import React, { useRef, useEffect } from 'react';

// const Three = () => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     // renderer.setClearColor(0x808080);

//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         canvas.appendChild(renderer.domElement);

//         const geometry = new THREE.SphereGeometry(3, 32, 32); // Create a sphere geometry
//         const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true, wireframeLinewidth: 2, wireframeLinecap: 'round', wireframeLinejoin: 'round', vertexColors: false }); // Use blue color for the material, set wireframe properties
//         const sphere = new THREE.Mesh(geometry, material);
//         scene.add(sphere);

//         camera.position.z = 6;

//         function animate() {
//             requestAnimationFrame(animate);
//             sphere.rotation.x += 0.001;
//             sphere.rotation.y += 0.001;
//             renderer.render(scene, camera);
//         }

//         animate();

       

//         return () => {
//             renderer.dispose();
//         };
//     }, [renderer, scene, camera]);

//     return <div ref={canvasRef} />;
// };

// export default Three;