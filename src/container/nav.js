import React, { Component } from 'react';
import Image from '../images/code.jpg'
import '../container/nav.css';
class nav extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="img1">
                    <img className="image-fluid" src={Image} alt="code logo" width="200px" height="50px" />
                </div>
                <ul className="list">
                    <li className="list1"><a href="https://www.codecademy.com/catalog/subject/all">Catalog</a></li>
                    <li className="list3"><a href="https://www.codecademy.com/learn-from-home">Learn From</a></li>
                    <li className="list4"><a href="https://www.codecademy.com/pricing">Pricing</a></li>
                    <li className="list5"><a href="https://www.codecademy.com/business">For Business</a></li>
                </ul>
                <ul className="list2">
                    <li><button className="btn1" value="Log in"><strong>Log in</strong></button></li>
                    <li><button className="btn2" value="Sign up"><strong>Sign up</strong></button></li>
                </ul>
            </div>
        );
    }
}

export default nav;