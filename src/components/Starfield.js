"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

export default function Starfield() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Three.js core
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1f153d);
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x1f153d, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Composer + bloom
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1,
      0.8,
      0.85
    );
    composer.addPass(bloomPass);

    // Load and place stars
    const loader = new GLTFLoader();
    loader.load("/blender/star.glb", (gltf) => {
      const starModel = gltf.scene;

      const starCount = 200;
      const gridSize = Math.ceil(Math.cbrt(starCount));
      const spaceSize = 100; // Tamaño del cubo
      const spacing = gridSize > 1 ? spaceSize / (gridSize - 1) : 0; // Evita división por 0 si gridSize=1
      const halfSize = spaceSize / 2;
      
      let index = 0;
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          for (let z = 0; z < gridSize; z++) {
            if (index >= starCount) break;
      
            const star = starModel.clone();
      
            const jitter = () => (Math.random() - 0.5) * spacing * 0.5;
            star.position.set(
              x * spacing - halfSize + jitter(),
              y * spacing - halfSize + jitter(),
              z * spacing - halfSize + jitter()
            );
      
            const scale = Math.random() < 0.8
              ? Math.random() * 0.3 + 0.05
              : Math.random() * 1 + 0.5;
            star.scale.set(scale, scale, scale);
      
            scene.add(star);
            index++;
          }
        }
      }

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.05;
        camera.position.y += (-mouse.current.y * 2 - camera.position.y) * 0.05;
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        composer.render(); // solo usamos composer para evitar doble render
      };

      animate();
    });

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX / width - 0.5;
      mouse.current.y = event.clientY / height - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (renderer.domElement && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full" ref={mountRef} />;
}
