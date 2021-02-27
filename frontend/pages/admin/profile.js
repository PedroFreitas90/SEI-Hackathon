import React from "react";

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


// layout for this page
// core components

function Profile() {
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
                    Mónica Jardim
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    919401864
                  </div>
                  <div className="h5 font-weight-300">
                    <i className="ni business_briefcase-24 mr-2" />
                    exemplo@mail.com
                  </div>

              
                  
                  <hr className="my-4" />
                  <p>
                  Frequento o ensino superior, na área de Engenharia Informática. Estou disponível para acompanhar alunos com necessidades em quaisquer disciplinas do ensino primário. Tenho experiência em acompanhar alunos com dislexia.
                  </p>

                  <div className="col text-center">
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
                            defaultValue="Mónica Jardim"
                            id="input-username"
                            placeholder="Nome"
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
                            placeholder="919401864"
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
                            placeholder="exemplo@mail.com"
                            type="email"
                          >
                            Endereço Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="exemplo@mail.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Sobre Mim</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="Frequento o ensino superior, na área de Engenharia Informática. Estou disponível para acompanhar alunos com necessidades em quaisquer disciplinas do ensino primário. Tenho experiência em acompanhar alunos com dislexia."
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
