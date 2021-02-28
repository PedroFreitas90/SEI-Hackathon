import React, { useContext } from "react";

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
import AppContext from "../context/AppContext";
// core components

function Available() {
  const { state, escolherExplicador } = useContext(AppContext);
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  
  var exp = []
  exp = state.explicadores

  

  const Coisa = ({exp}) => {
    return (
      <div className=" accordion my-5" id="accordionExample"  >
      {exp.map( (explicador) => {
        return (
            <Card style={{width:'72vw' ,justifyContent:'center'}} >
                      <CardHeader style={{height:'10vh' }}
                        id="headingOne"
                        aria-expanded={openedCollapse === "collapseOne"}
                      >
                        <h5 className=" mb-0" >
                          <Button style={{ marginTop:'-13px'}}
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
                            <tr  >
                            <th scope="row"   >
                                <Media className="align-items-center">
                                    <span className="mb-0 text-sm">
                                  {explicador.name}
                                    </span>
                                </Media>
                            </th>
                            
                            <td > 
                                <Badge color="red" className="badge-dot">
                                <i className="bg-gray" />
                                offline
                                </Badge>
                            </td >
                            </tr>
                          </Button >
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
                          {explicador.about}
                        </CardBody>
                        </Row >
                        <Row style ={{marginBottom:'15px',marginRight:'25px', display:"flex", justifyContent:"flex-end"}}>
                        <Button className=" mb-0" color="primary" type="button" size="sm" onClick={() => escolherExplicador(explicador)} >
                            Selecionar Explicador
                        </Button>
                        </Row>
                        </Col>
                      </Collapse>
                    </Card>)
                          })}
                    </div>
    );
};
    

  return (
    
    <>
      
      {/* Page content */}
      
      <div className="pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
      <Container className="mt--0" fluid>
        {/* Table */}
        <Row>
          <div className="col" >
            <Card className="shadow" >
              <CardHeader className="border-0" >
                <h3 className="mb-0">Explicadores disponíveis</h3>
              </CardHeader>
              <Table className="align-items-center table-flush"  responsive>
                  <thead className="thead-light" >
                    <tr>
                      <th scope="col" ></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody >

                  <Col className=" ml-auto" md="12"   >
                    <Coisa  exp={state.explicadores}/>
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
