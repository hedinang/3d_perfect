import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Chair } from '../model/threeDModel'
import { Col, Row } from 'react-bootstrap'
import { SketchPicker } from 'react-color';
import { ARCanvas } from '@react-three/xr'
import ThreeDHeader from '../introduce/ThreeDHeader'
export default function ThreeD() {
    let [color, setColor] = useState('./texture/wood.jpg')
    // let changeColor = (e) => {
    //     setColor(e)

    // }
    let [item, setItem] = useState('back')
    let changeItem = (e) => {
        setItem(e)
    }
    let textureList = ['./texture/wood.jpg', './texture/wood1.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg']

    let changeTexture = (e) => {
        setColor(e)
    }

    return (
        <div>
            <ThreeDHeader />
            <div>
                <h2 style={{ textAlign: 'center' }}>Demo</h2>
                <Row>
                    <Col></Col>
                    <Col>
                        <Row style={{ textAlign: 'center' }}>
                            <Col>Textures</Col>
                        </Row>
                        <Row >
                            {textureList.map(e =>
                                <Col onClick={() => { changeTexture(e) }} style={{ backgroundImage: `url(${e})`, height: '80px' }} />
                            )}
                        </Row>
                    </Col>
                    <Col>
                        <div>
                            <Canvas style={{ height: '20rem', width: '20rem' }} camera={{ position: [0, 20, 0] }}>
                                <ambientLight />
                                <Chair color={color} changeItem={changeItem} />
                                <OrbitControls />
                                {/* <DefaultXRControllers /> */}
                            </Canvas>
                            <h3 style={{ width: '22rem', textAlign: 'center' }}>{item}</h3>
                        </div>

                    </Col>
                    <Col>
                    </Col>
                </Row>

            </div>
        </div>

    )
}
