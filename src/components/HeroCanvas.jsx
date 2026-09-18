import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Rotating wireframe icosahedron + quiet starfield behind the hero wordmark.
 * Everything is guarded: if WebGL is unavailable (some sandboxed previews),
 * the component renders an empty canvas and the rest of the page is unaffected.
 */
export default function HeroCanvas({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = containerRef?.current;
    if (!canvas || !host) return undefined;

    // bail early when there's no usable WebGL context
    const supportsWebGL = (() => {
      try {
        const probe = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (probe.getContext('webgl') || probe.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    })();
    if (!supportsWebGL) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let renderer;
    let frameId;
    let handleResize;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      camera.position.z = 62;

      const measure = () => ({
        w: host.clientWidth,
        h: host.clientHeight || 1,
      });

      const { w, h } = measure();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const isMobile = window.innerWidth < 800;

      // wireframe polyhedron
      const wireframe = new THREE.LineSegments(
        new THREE.WireframeGeometry(
          new THREE.IcosahedronGeometry(isMobile ? 20 : 30, 1)
        ),
        new THREE.LineBasicMaterial({
          color: 0x5b6321,
          transparent: true,
          opacity: 0.55,
        })
      );
      scene.add(wireframe);

      // drifting specks
      const starCount = isMobile ? 40 : 80;
      const starPositions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i += 1) {
        starPositions[i * 3] = (Math.random() - 0.5) * 140;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 90;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(starPositions, 3)
      );
      const stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({
          color: 0x9a9da4,
          size: 1.1,
          transparent: true,
          opacity: 0.5,
        })
      );
      scene.add(stars);

      const draw = () => {
        try {
          renderer.render(scene, camera);
        } catch {
          /* stop silently if the context is lost */
        }
      };

      const tick = () => {
        wireframe.rotation.y += 0.0016;
        wireframe.rotation.x += 0.0006;
        draw();
        frameId = requestAnimationFrame(tick);
      };

      draw();
      if (!reduceMotion) frameId = requestAnimationFrame(tick);

      handleResize = () => {
        try {
          const next = measure();
          renderer.setSize(next.w, next.h, false);
          camera.aspect = next.w / next.h;
          camera.updateProjectionMatrix();
          if (reduceMotion) draw();
        } catch {
          /* ignore resize failures */
        }
      };
      window.addEventListener('resize', handleResize);

      return () => {
        if (frameId) cancelAnimationFrame(frameId);
        if (handleResize) window.removeEventListener('resize', handleResize);
        starGeo.dispose();
        wireframe.geometry.dispose();
        wireframe.material.dispose();
        stars.material.dispose();
        renderer.dispose();
      };
    } catch (err) {
      console.warn('Hero animation unavailable, continuing without it:', err);
      if (frameId) cancelAnimationFrame(frameId);
      if (handleResize) window.removeEventListener('resize', handleResize);
      return undefined;
    }
  }, [containerRef]);

  return <canvas className="hero__canvas" ref={canvasRef} aria-hidden="true" />;
}
