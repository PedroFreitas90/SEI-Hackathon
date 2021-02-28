import React, { useContext } from "react";
import axios from 'axios';


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Label,
    Col,
} from "reactstrap";
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



function Pedidos() {

  const [area,setArea] = React.useState('');
  const [ano,setAno] = React.useState('');
  const [mensagem,setMensagem] = React.useState('');
  const { state, fazerPedido } = useContext(AppContext);

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
      area: area,
      ano: ano,
      mensagem: mensagem
    };
    console.log("fazer pedido " + state.token)
    
    axios.post(`http://192.168.1.230:3000/pedidos`,data,{ 
      headers: {
          "Authorization" : `Bearer ${state.token}`
      } 
    }).then( (res) => 
    fazerPedido(res.data))
    
  }


  return (
    
    <div style={{display:"flex", width:'80vw', height: '100vh', flexDirection:'column', justifyContent:'center', alignItems: 'center' }}>
   
    <Col lg="6" md="8" >
       
        <Card className="bg-secondary shadow border-0" >
        
          <CardBody className="px-lg-5 py-lg-5"  >
            <div className="text-center text-muted mb-4">
              <small>Efetue o seu pedido.</small>
            </div>
            <form onSubmit={handleSubmit}>

              <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type="select" name="select" onChange={e => setArea(e.target.value)} id="exampleSelect">
                  <option>Portugues</option>
                  <option>Matematica</option>
                  <option>Estudo do Meio</option>


                </Input>
                </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type="select" name="select" onChange={e => setAno(e.target.value)} id="exampleSelect">
                  <option>1o ano</option>
                  <option>2o ano</option>
                  <option>3o ano </option>
                  <option>4o ano </option>
                </Input>
                </InputGroup>
            </FormGroup>
           
                    <FormGroup>
                        
                    <InputGroup className="input-group-alternative">
                    
                    
                      <Input style={{width:'30vw', height: '20vh'}}
                     
                        className="form-control-alternative "
                        placeholder=" Observações (Tema, necessidades educativas especiais) "
                        rows="3"
                        type="textarea"
                        onChange={e => setMensagem(e.target.value)} 
                    
                      />
                      
                        </InputGroup>
                    </FormGroup>
                 
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Criar pedidos
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );

 
      

}

Pedidos.layout = Admin;

export default Pedidos;
