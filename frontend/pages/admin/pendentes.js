import React, { useContext } from "react";
import axios from 'axios';
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";
import Admin from "../../layouts/Admin";
import Image from 'next/image'
import AppContext from '../context/AppContext'; 

import { bgWrap, layout, header } from '../../layouts/styles.module.css'

// layout for this page
// core components

const Background = () => (
    <div>
      <div className={bgWrap}>
          <Image
            alt="bg"
            src="/fundo.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            
          />
        </div>
      </div>
    )



function Pendentes() {
      return (
        <>
          <div className="pt-md-8">
            <Container fluid>
              <div >
                {/* Card stats */}
                <Row>
                  <Col sm="4">
                    <Card className="card-stats mb-4 mb-xl-0">
                      
                        <Card className="card-profile shadow">
              
                        <CardBody className="pt-0 pt-md-4">
                      
                      <div className="col text-center">
                        <h3>
                          Floribela
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          91919191
                        </div>
                        <div className="h5 font-weight-300">
                          <i className="ni business_briefcase-24 mr-2" />
                          coisas
                        </div>
      
                    
                        
                        <hr className="my-4" />
                        <p>
                        Mais coisas
                        </p>
      
                        <div className="text-center">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Online
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Enviar Mensagem
                        </Button>
                      </div>
      
                      </div>
                    </CardBody>
              </Card>
                      
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card className="card-stats mb-4 mb-xl-0">
                      
                      <Card className="card-profile shadow">
              
                        <CardBody className="pt-0 pt-md-4">
                      
                      <div className="col text-center">
                        <h3>
                          Floribela
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          91919191
                        </div>
                        <div className="h5 font-weight-300">
                          <i className="ni business_briefcase-24 mr-2" />
                          coisas
                        </div>
      
                    
                        
                        <hr className="my-4" />
                        <p>
                        Mais coisas
                        </p>
      
                        <div className="text-center">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Online
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Enviar Mensagem
                        </Button>
                      </div>
      
                      </div>
                    </CardBody>
              </Card>

                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card className="card-stats mb-4 mb-xl-0">
                      
                      <Card className="card-profile shadow">
              
                        <CardBody className="pt-0 pt-md-4">
                      
                      <div className="col text-center">
                        <h3>
                          Floribela
                        </h3>
                        <div className="h5 font-weight-300">
                          <i className="ni location_pin mr-2" />
                          91919191
                        </div>
                        <div className="h5 font-weight-300">
                          <i className="ni business_briefcase-24 mr-2" />
                          coisas
                        </div>
      
                    
                        
                        <hr className="my-4" />
                        <p>
                        Mais coisas
                        </p>
      
                        <div className="text-center">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Online
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Enviar Mensagem
                        </Button>
                      </div>
      
                      </div>
                    </CardBody>
              </Card>

                    </Card>
                  </Col>
                  
                </Row>
              </div>
            </Container>
          </div>
        </>
      );
}

Pendentes.layout = Admin;

export default Pendentes;
