import React from 'react';
import  ReactDom from 'react-dom';
import "./Netflix.css";

function Netflix(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="" className="" />
                <div className="card_info">
                    <span className="card_info">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href="" target="_blank"><button>Watch Now</button></a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Netflix;
