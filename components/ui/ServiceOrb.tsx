'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

interface ServiceOrbProps {
    type: 'web' | 'ai' | 'cloud' | 'cyber' | 'app' | 'marketing'
    active: boolean
}

function OrbGeometry({ type, active }: ServiceOrbProps) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!meshRef.current) return
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.y = t * 0.5
        meshRef.current.rotation.x = t * 0.2

        // Pulse effect when active (hovered)
        if (active) {
            const s = 1 + Math.sin(t * 5) * 0.1
            meshRef.current.scale.set(s, s, s)
        } else {
            meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
        }
    })

    return (
        <mesh ref={meshRef}>
            {type === 'web' && <torusKnotGeometry args={[1, 0.3, 128, 16]} />}
            {type === 'ai' && <icosahedronGeometry args={[1, 0]} />}
            {type === 'cloud' && <torusGeometry args={[1, 0.4, 16, 100]} />}
            {type === 'cyber' && <octahedronGeometry args={[1, 0]} />}
            {type === 'app' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
            {type === 'marketing' && <tetrahedronGeometry args={[1, 0]} />}

            <MeshDistortMaterial
                color={active ? "#A30927" : "#333333"}
                speed={active ? 4 : 1}
                distort={active ? 0.4 : 0.2}
                metalness={0.8}
                roughness={0.2}
            />
        </mesh>
    )
}

export default function ServiceOrb({ type, active }: ServiceOrbProps) {
    return (
        <div className="w-16 h-16 transition-all duration-500">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
                <pointLight position={[-5, -5, -5]} intensity={2} color="#A30927" />

                <OrbGeometry type={type} active={active} />
            </Canvas>
        </div>
    )
}
