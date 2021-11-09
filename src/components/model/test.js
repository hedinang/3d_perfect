import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React from 'react';
export default function Model(props) {
    const gltf = useLoader(GLTFLoader, "./test.gltf")
    return (
        <primitive object={gltf.scene} scale={0.2} />
    )
}
