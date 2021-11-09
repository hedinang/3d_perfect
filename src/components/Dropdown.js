import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import './Navbar.css';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        style={{
          borderRadius: '5px',
          fontSize: '1rem',
          width: '44rem',
          height: '10rem',
          position: 'absolute',
          listStyle: 'none', textAlign: 'start',
          top: '80px',
          background: '#bbeffd',
        }}
      >
        <Row style={{ paddingLeft: '2rem', paddingTop: '2rem' }}>
          <Col xs={4}>
            <div>
              <Link to='/product'>3D/VR/AR</Link>
            </div>
            <div>
              <Link to='/product/od'>Object Detection</Link>
            </div>
            <div>
              <Link to='/product/ocr'>Optical Character Recognition</Link>
            </div>
            <div>
              <Link to='/product/is'>Image Synthesis</Link>
            </div>
          </Col>
          <Col xs={3}>
            <div>
              <Link to='/product/tts'>Text To Speech</Link>
            </div>
            <div>
              <Link to='/product/stt'>Speech To Text</Link>
            </div>
            <div>
              <Link to='/product/ss'>Speech Synthesis</Link>
            </div>
          </Col>
          <Col xs={5}>
            <Link to='/product/3d'>Natural Language Processing</Link>
          </Col>
        </Row>
      </ul>
    </>
  )
}

export default Dropdown;
