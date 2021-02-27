import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  Button,
  Collapse,
  CardBody,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components

function Available() {

    const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");

  return (
    <>
      
      {/* Page content */}
      
      <div className="pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <Container className="mt--0" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Explicadores disponíveis</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>

                <Col className=" ml-auto" md="12">
              <div className=" accordion my-5" id="accordionExample">
                <Card>
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="link"
                      >
                        <tr>
                        <th scope="row">
                            <Media className="align-items-center">
                                <span className="mb-0 text-sm">
                                Pedro Lima
                                </span>
                            </Media>
                        </th>
                        
                        <td>
                            <Badge color="red" className="badge-dot">
                            <i className="bg-gray" />
                            offline
                            </Badge>
                        </td>
                        </tr>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseOne"}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    id="collapseOne"
                  >
                  <Col>
                  <Row>
                    <CardBody className=" opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                    </Row >
                    <Row style ={{marginBottom:'15px',marginRight:'25px', display:"flex", justifyContent:"flex-end"}}>
                    <Button className=" mb-0" color="primary" type="button" size="sm" >
                        Selecionar Explicador
                    </Button>
                    </Row>
                    </Col>
                  </Collapse>
                </Card>
                
                <Card>
                  <CardHeader
                    id="headingThree"
                    aria-expanded={openedCollapse === "collapseThree"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseThree"
                              ? ""
                              : "collapseThree"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="link"
                      >
                        <tr>
                        <th scope="row">
                            <Media className="align-items-center">
                                <span className="mb-0 text-sm">
                                Diogo Sobral
                                </span>
                            </Media>
                        </th>
                        <td>
                            <Badge color="" className="badge-dot">
                            <i className="bg-success" />
                            online
                            </Badge>
                        </td>
                        </tr>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseThree"}
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                    id="collapseThree"
                  >
                  <Col>
                  <Row>
                    <CardBody className=" opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                    </Row >
                    <Row style ={{marginBottom:'15px',marginRight:'25px', display:"flex", justifyContent:"flex-end"}}>
                    <Button className=" mb-0" color="primary" type="button" size="sm" >
                        Selecionar Explicador
                    </Button>
                    </Row>
                    </Col>
                  </Collapse>
                </Card>

                <Card>
                  <CardHeader
                    id="headingTwo"
                    aria-expanded={openedCollapse === "collapseTwo"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseTwo"
                              ? ""
                              : "collapseTwo"
                          )
                        }
                        className="w-100 text-primary text-left collapsed"
                        color="link"
                      >
                            <tr>
                            <th scope="row">
                                <Media className="align-items-center">
                                    <span className="mb-0 text-sm">
                                    Pedro Pinto
                                    </span>
                                </Media>
                            </th>
                            <td>
                                <Badge color="" className="badge-dot mr-4">
                                <i className="bg-success" />
                                online
                                </Badge>
                            </td>
                            
                            </tr>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseTwo"}
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                    id="collapseTwo"
                  >
                    <Col>
                    <Row>
                    <CardBody >
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                      
                    </CardBody>
                    </Row >
                    <Row style ={{marginBottom:'15px',marginRight:'25px', display:"flex", justifyContent:"flex-end"}}>
                    <Button className=" mb-0" color="primary" type="button" size="sm" >
                        Selecionar Explicador
                    </Button>
                    </Row>
                    </Col>
                    
                  </Collapse>
                </Card>
                
                
              </div>
            </Col>
                  

                  
                  

           
                </tbody>
              </Table>
             
            </Card>
          </div>
        </Row>
        
        
      </Container>
      </div>
    </>
  );
}

Available.layout = Admin;

export default Available;
