import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import { TextureLoader, RepeatWrapping, NearestFilter, LinearMipMapLinearFilter } from 'three';
function Chair(props) {
    const { nodes, materials } = useGLTF('./chair.glb')
    let textureList = ['./texture/wood1.jpg', './texture/wood.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg']
    const texture = new TextureLoader().load(textureList[0])
    // texture.magFilter = NearestFilter;
    // texture.minFilter = LinearMipMapLinearFilter;
    // texture.wrapS = RepeatWrapping;
    // texture.wrapT = RepeatWrapping;
    // texture.repeat.set(200, 200);
    const ref = useRef()
    // let map = new Map()
    // map['back'] = {
    //     color: new TextureLoader().load(textureList[0]),
    //     isSelect: true
    // }
    // map['cushions'] = {
    //     color: new TextureLoader().load(textureList[1]),
    //     isSelect: false
    // }
    // map['base'] = {
    //     color: new TextureLoader().load(textureList[2]),
    //     isSelect: false
    // }
    // map['legs'] = {
    //     color: new TextureLoader().load(textureList[3]),
    //     isSelect: false
    // }
    // map['supports'] = {
    //     color: new TextureLoader().load(textureList[4]),
    //     isSelect: false
    // }
    // let [items, setItems] = useState(map)

    let [items, setItems] = useState([
        { name: 'back', color: new TextureLoader().load(textureList[0]), isSelect: false },
        { name: 'cushions', color: new TextureLoader().load(textureList[1]), isSelect: false },
        { name: 'base', color: new TextureLoader().load(textureList[2]), isSelect: false },
        { name: 'legs', color: new TextureLoader().load(textureList[3]), isSelect: false },
        { name: 'supports', color: new TextureLoader().load(textureList[4]), isSelect: false },
    ])
    useEffect(() => {

        let tmp = items.map(e => {
            if (e.isSelect === true) e.color = new TextureLoader().load(props.color)
            return e
        })
        setItems(tmp)
    }, [props.color])
    let choose = (e) => {
        let tmp = items.map(f => {
            if (f.name === e) f.isSelect = true
            else f.isSelect = false
            return f
        })
        props.changeItem(e)
        setItems(tmp)
    }
    return (
        <group
            scale={1.2}
            dispose={null}
            position={(0, 0, 0)}
        >
            <mesh onClick={() => { choose('back') }} geometry={nodes.back.geometry} material={materials.laces}
            // material-color={items[0].color} 
            >
                <meshStandardMaterial map={items[0].color} attach="material" />
            </mesh>
            <mesh onClick={() => { choose('cushions') }} geometry={nodes.cushions.geometry} material={materials.laces}
            // material-color={items[1].color} 
            >
                <meshStandardMaterial map={items[1].color} attach="material" />
            </mesh>
            <mesh onClick={() => { choose('base') }} geometry={nodes.base.geometry} material={materials.laces}
            // material-color={items[2].color}
            >
                <meshStandardMaterial map={items[2].color} attach="material" />

            </mesh>
            <mesh onClick={() => { choose('legs') }} geometry={nodes.legs.geometry} material={materials.laces}
            // material-color={items[3].color} 
            >
                <meshStandardMaterial map={items[3].color} attach="material" />
            </mesh>
            <mesh onClick={() => { choose('supports') }} geometry={nodes.supports.geometry} material={materials.laces}
            // material-color={items[4].color} 
            >
                <meshStandardMaterial map={items[4].color} attach="material" />
            </mesh>
        </group>
    )
}
export {
    Chair,
}