import React, { useContext } from "react";
import Link from "next/link";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
 Button
} from "reactstrap";
import AppContext from "../../pages/context/AppContext";
import { Router } from "next/router";


function AdminNavbar({ brandText }) {

  const handleSubmit = event => {
    event.preventDefault();

    console.log('boas')
    localStorage.clear();
    
  }




  return (
    < >
      <Navbar className="navbar-top navbar-dark " expand="md" id="navbar-main">
        <Container fluid>
          <Link href="/admin/dashboard">
            <a className="h4 mb-0 text-dark text-uppercase d-none d-lg-inline-block">
              {brandText}
            </a>
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
           
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav  >
              <DropdownToggle className=" nav-link-icon" nav style={{ display:'flex', alignContent:'flex-start'}}>
                  <span>
                  <i className=" ni ni-bell-55 text-dark"  />
                </span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
              
        
                <Link href="/admin/profile">
                  <DropdownItem>
                   
                    <span>ActivitySupSupportSupportSu
                       pportportSupportSupportSupportSupportSupportSupportSupport</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-support-16" />
                    <span>SupportSupportvSupportSupportSupportSupportSupportSupportSupport</span>
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button onClick={handleSubmit}>
                <i className="ni ni-user-run" />
                <small>Logout</small>
              </Button>
          </Nav>
        </Container>
      </Navbar>


      <Navbar className="navbar-top navbar-dark bg-ligth " expand="md" id="navbar-main">
        <Container fluid>
          
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            
          </Form>
          
          
          
          
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
