import React, {Fragment} from "react";
import "./travels.css";


//import bannerEj from "../../images/bannerEj.webp";
//import salidaEj from "../../images/salidaEj.webp";

export function Travels(){

    return (
        <Fragment>
            <div className="justify-content-center row mt-5">
                <img src={process.env.REACT_APP_URL+"/images/banners/home.webp"} alt="banner" className="banner" />
            </div>
        </Fragment>
    )
}