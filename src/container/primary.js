import React, { Component } from 'react';
import Advertice from '../images/advertice.jpg';
import '../container/primary.css';
import {applyFlex} from '../container/hoc'
class primary extends Component {
    render() {
        return (
                <div className="imdbox">
                    <img className="img-fluid" id="main-logo" src={Advertice} width="130%" height="100%" alt="main-logo"/>
                </div>
                
        );
    }
}

export default applyFlex(primary);