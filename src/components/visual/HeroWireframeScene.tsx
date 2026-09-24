"use client";

import { Float, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function WireframeSculpture() {
  const groupRef = useRef<Group>(null);

  const ringPoints = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i <= 64; i += 1) {
      const t = (i / 64) * Math.PI * 2;
      points.push([Math.cos(t) * 1.15, Math.sin(t) * 0.72, Math.sin(t * 2) * 0.18]);
    }
    return points;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.35}>
        <mesh>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshBasicMaterial color="#d6d1cb" wireframe transparent opacity={0.55} />
        </mesh>
        <Line
          points={ringPoints}
          color="#9b8de6"
          lineWidth={1.5}
          transparent
          opacity={0.85}
        />
        <mesh position={[0.9, -0.45, 0.2]} rotation={[0.8, 0.4, 0.2]}>
          <boxGeometry args={[0.55, 0.28, 0.7, 2, 1, 2]} />
          <meshBasicMaterial color="#ba4d4d" wireframe transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

type HeroWireframeSceneProps = {
  className?: string;
};

export function HeroWireframeScene({ className = "" }: HeroWireframeSceneProps) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 2, 4]} intensity={0.8} color="#fff7ef" />
        <WireframeSculpture />
      </Canvas>
    </div>
  );
}
