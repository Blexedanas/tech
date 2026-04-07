'use client'

import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function MouseLight() {
    const light = useRef<THREE.PointLight>(null)
    const { viewport } = useThree()
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame(() => {
        if (!light.current) return
        light.current.position.x = mouse.x * viewport.width / 2
        light.current.position.y = mouse.y * viewport.height / 2
    })

    return <pointLight ref={light} intensity={15} color="#A30927" distance={20} />
}

function Shard({ position, color, speed, rotationSpeed, scale, type }: any) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!meshRef.current) return
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.x = t * rotationSpeed * 0.2
        meshRef.current.rotation.y = t * rotationSpeed * 0.1
    })

    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                {type === 0 && <dodecahedronGeometry args={[1, 0]} />}
                {type === 1 && <tetrahedronGeometry args={[1, 0]} />}
                {type === 2 && <octahedronGeometry args={[1, 0]} />}
                {type === 3 && <icosahedronGeometry args={[1, 0]} />}
                <meshStandardMaterial
                    color={color}
                    metalness={0.9}
                    roughness={0.1}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    )
}

function ShardsWorld() {
    const shards = useMemo(() => {
        const temp = []
        for (let i = 0; i < 40; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 60,
                    (Math.random() - 0.5) * 60,
                    (Math.random() - 0.5) * 20 - 25
                ],
                color: Math.random() > 0.7 ? "#A30927" : "#0a0a0a",
                speed: Math.random() * 2 + 0.5,
                rotationSpeed: Math.random() * 0.4 + 0.1,
                scale: Math.random() * 0.8 + 0.4,
                type: Math.floor(Math.random() * 4)
            })
        }
        return temp
    }, [])

    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[20, 20, 20]} intensity={2} color="#ffffff" />
            <MouseLight />

            {shards.map((props, i) => (
                <Shard key={i} {...props} />
            ))}

            <Environment preset="night" />
        </>
    )
}

export default function Background3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
                <ShardsWorld />
            </Canvas>
        </div>
    )
}
