import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import AppContext from '../pages/context/AppContext'; 
import axios from 'axios';


import "assets/plugins/nucleo/css/nucleo.css";
import "assets/scss/nextjs-argon-dashboard.scss";


Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {

  state = {
    email: '',
    token: '',
    about: '',
    type: '',
    phone: '',
    nome: ''
  }
  
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const res = await axios.get(`http://192.168.1.230:3000/`,{ headers: {"Authorization" : `Bearer ${token}`} })

      this.setState({
        email: res.data.email,
        token: token,
        about: res.data.about,
        type: res.data.tipo,
        phone: res.data.phone,
        nome: res.data.name
      });
    } else {
      Router.push('/auth/login');
    }
  };

  fazerPedido = () => {
    const token = localStorage.getItem('token');
    console.log("tok " + token)
    if (token) {
      Router.push('/admin/available')
    } else {
      Router.push('/auth/login');
    }
  }


  signIn = (token,email,nome,phone,type,about) => {
    localStorage.setItem('token', token);

    this.setState(
      {
        email: email,
        token: token,
        type: type,
        phone: phone,
        nome: nome,
        about: about
      },
      () => {
        Router.push('/admin/profile');
      }
    );

    console.log("Guardei infos: " + JSON.stringify(this.state))
  };

  signOut = () => {
      localStorage.removeItem('token');
      this.setState({
        email: '',
        token: '',
        about: '',
        type: '',
        phone: '',
        nome: ''
      });
      Router.push('/auth/login');
    };


  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Explica</title>
        </Head>
        <Layout>
        <AppContext.Provider value={{state: this.state, signIn: this.signIn, signOut: this.signOut, fazerPedido: this.fazerPedido}}>
          <Component {...pageProps} />
          </AppContext.Provider>
        </Layout>
      </React.Fragment>
    );
  }
}
