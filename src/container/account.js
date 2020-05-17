import React, { Component } from 'react';
import Image1 from '../images/link.jpg';
import Google from '../images/google.jpg';
import Face from '../images/face.jpg';
import Git from '../images/githh.jpg';
import '../container/account.css';
class account extends Component {
    render() {
        return (
            <div className="flex-container">
               <div className="box1">
                   <img className="img-fluid" id="logo" src={Image1} width="25px" height="25px" alt="link"/>
               </div>
               <div className="box2">
                   <img className="img-fluid" id="logo" src={Google} width="25px" height="25px" alt="google"/>
               </div>
               <div className="box3">
                   <img className="img-fluid" id="logo" src={Face} width="25px" height="25px" alt="facebook"/>
                </div> 
               <div className="box4">
                   <img className="img-fluid" id="logo" src={Git} width="25px" height="25px" alt="github"/>
                </div> 
            </div>
        );
    }
}

export default account;