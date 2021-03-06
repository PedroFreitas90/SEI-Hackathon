import React from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../ components/Navbars/AdminNavbar";
import Sidebar from "../ components/Navbars/Sidebar";

import routes from "routes.js";

function Admin2(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <>
    <div >
      <Sidebar 
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
          imgAlt: "...",
        }}
      />
    
      <div className="main-content shadow border-10" ref={mainContentRef}>
        
        
        {props.children}
        </div>
        <Container fluid>
        
        </Container>
      </div>

      
    
    </>
   
  );
}

export default Admin2;
