import React, {Fragment} from "react";
import "./home.css";


//import bannerEj from "../../images/bannerEj.webp";
//import salidaEj from "../../images/salidaEj.webp";

export function Home(props){
    let travelOutsRendered = [];
    props.travelOuts.forEach(travelOut => {
        travelOutsRendered.push(
            <div className="col-3 p-5 outs" key={'travelOut'+travelOut.travelOutId} onClick={() => props.travelOutSelected(1)} >
                <img className="" src={process.env.REACT_APP_URL+'/images/travel_outs/'+travelOut.image} alt="" />
            </div>
        )
    });


    return (
        <Fragment>
            <div className="justify-content-center row mt-5">
                <img src={process.env.REACT_APP_URL+"/images/banners/home.webp"} alt="banner" className="banner" />
            </div>
            <div className="row justify-content-around mt-5 px-5">
                { travelOutsRendered }
            </div>
        </Fragment>
    )
}