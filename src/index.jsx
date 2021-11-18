import ReactDOM from "react-dom";
import React, { Fragment, useState, useEffect, useRef} from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo_banner.png";
import { Home } from "./pages/home/Home";
import { Travels } from "./pages/travels/Travels";
import axios from 'axios';


export function App() {
    let [homeOpacity, setHomeOpacity] = useState(1);
    let [homeDisplay, setHomeDisplay] = useState('block');
    let [travelsOpacity, setTravelsOpacity] = useState(0);
    let [travelsDisplay, setTravelsDisplay] = useState('none');
    let [travelOuts, setTravelOuts] = useState([]);
    
    const travelOutSelected = (id) => {
        setHomeOpacity((p) => {
            return 0
        })
        setTimeout(()=>{
            setHomeDisplay((p) => {
                return 'none'
            })
            setTravelsDisplay((p) => {
                return 'block'
            })
            setTimeout(()=>{
                setTravelsOpacity((p) => {
                    return 1
                })
            }, 100)
        }, 200)
    };
    
    useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+`/getTravelOuts`)
        .then(res => {
            setTravelOuts((prevTravelOuts) => {
                return [res.data.travelOuts]
            })
        })
    }, [])
    return(
        <Fragment>
            <header>
                <img src={logo} alt="Logo"></img>
            </header>
            <div style={{ opacity: homeOpacity, display: homeDisplay }}>
                <Home  travelOuts={travelOuts} travelOutSelected={travelOutSelected}  />
            </div>
            <div style={{ opacity: travelsOpacity, display: travelsDisplay }}>
                <Travels />
            </div>
        </Fragment>
    );
}