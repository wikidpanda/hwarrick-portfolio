"use client";

import { Float, MeshDistortMaterial, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function LogoMesh() {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture("/images/logo-hmw.png");

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <circleGeometry args={[1, 96]} />
        <MeshDistortMaterial
          map={texture}
          color="#d6d1cb"
          metalness={0.92}
          roughness={0.18}
          distort={0.28}
          speed={1.8}
          emissive="#9b8de6"
          emissiveIntensity={0.08}
        />
      </mesh>
    </Float>
  );
}

type LiquidLogoMarkProps = {
  className?: string;
};

export function LiquidLogoMark({ className = "" }: LiquidLogoMarkProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(155,141,230,0.35),transparent_68%)] blur-md" />
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        className="relative rounded-full"
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[2, 2, 3]} intensity={1.4} color="#fff7ef" />
        <directionalLight position={[-2, -1, 1]} intensity={0.6} color="#9b8de6" />
        <LogoMesh />
      </Canvas>
    </div>
  );
}
