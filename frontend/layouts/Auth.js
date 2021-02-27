import Image from 'next/image'
import { bgWrap, layout, header } from './styles.module.css'
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import { useState, useEffect } from 'react';
import AuthNavBar from "../ components/Navbars/AuthNavbar.js";


const Background = () => (
  <div>
    <div className={bgWrap}>
        <Image
          alt="bg"
          src="/bg3.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  )



function Auth(props) {

  return (
    <div className="main-content" style={{display:"flex", position: "absolute", backgroundColor:"transparent"}}>
    <AuthNavBar />
    <Background/>
    
      <div style={{display:"flex", width:'100vw', height: '100vh', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
       
          
        <div className="header" style={{height: '15vh'}}>
          <Container >
              <h1 >Explica</h1>
          </Container>
        </div>

        <Container className="mt--4 pb-5" >
          <Row className="justify-content-center">{props.children}</Row>
        </Container>
      </div>
    </div>
  );
}

export default Auth;


