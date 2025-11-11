import { useEffect, useRef } from "react";

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamically load Three.js
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    
    script.onload = () => {
      if (!containerRef.current) return;
      
      // @ts-ignore - Three.js loaded dynamically
      const THREE = window.THREE;
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      containerRef.current?.appendChild(renderer.domElement);

      // Create floating geometric shapes
      const geometries = [
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.OctahedronGeometry(1, 0),
        new THREE.IcosahedronGeometry(1, 0),
      ];

      const material = new THREE.MeshPhongMaterial({
        color: 0x2ecc71,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });

      const meshes: any[] = [];
      
      for (let i = 0; i < 8; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const mesh = new THREE.Mesh(geometry, material.clone());
        
        mesh.position.x = (Math.random() - 0.5) * 20;
        mesh.position.y = (Math.random() - 0.5) * 20;
        mesh.position.z = (Math.random() - 0.5) * 20;
        
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        const scale = Math.random() * 0.5 + 0.5;
        mesh.scale.set(scale, scale, scale);
        
        scene.add(mesh);
        meshes.push({
          mesh,
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
          },
          floatSpeed: Math.random() * 0.02 + 0.01,
          floatOffset: Math.random() * Math.PI * 2,
        });
      }

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0x2ecc71, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      camera.position.z = 15;

      let animationFrameId: number;
      let time = 0;

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        time += 0.01;

        meshes.forEach((item) => {
          item.mesh.rotation.x += item.rotationSpeed.x;
          item.mesh.rotation.y += item.rotationSpeed.y;
          
          // Floating effect
          item.mesh.position.y += Math.sin(time * item.floatSpeed + item.floatOffset) * 0.01;
        });

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        containerRef.current?.removeChild(renderer.domElement);
      };
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeBackground;
