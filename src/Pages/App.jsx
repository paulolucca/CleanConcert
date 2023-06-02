import React from "react";
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css'


import Footer from "../componets/templantes/Footer";
import Logo from "../componets/templantes/Logo";
import Nav from "../componets/templantes/Nav";
import Routes from "./Routes";


    export default props =>

        

            <BrowserRouter>

            <div className="app">

                <Logo/>

                <Nav />

                 <Routes/>

                <Footer />

            
             </div>

        </BrowserRouter>


