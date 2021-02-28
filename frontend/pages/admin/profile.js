import React, { useContext } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import Admin from "../../layouts/Admin";

import AppContext from '../context/AppContext'

// layout for this page
// core components

function Profile() {

  const { state } = useContext(AppContext);

  console.log(state)

  return (
    <>
    <div
    className="pb-8 pt-5 pt-lg-8 d-flex align-items-center">
    <Container className="mt--0"  fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              
              <CardBody className="pt-0 pt-md-4">
                
                <div className="col text-center">
                  <h3>
                    {state.nome}
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {state.phone}
                  </div>
                  <div className="h5 font-weight-300">
                    <i className="ni business_briefcase-24 mr-2" />
                    {state.email}
                  </div>

              
                  
                  <hr className="my-4" />
                  <p>
                  {state.about}
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
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informação do Utilizador
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nome
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={state.nome}
                            id="input-username"
                            placeholder={state.nome}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-phone"
                          >
                            Contacto Telefónico
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-phone"
                            placeholder={state.phone}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  {/* Address */}
                 
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                            placeholder={state.email}
                            type="email"
                          >
                            Endereço Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder={state.email}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Sobre</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue={state.about}
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
 
      
  )   
}

Profile.layout = Admin;

export default Profile;
