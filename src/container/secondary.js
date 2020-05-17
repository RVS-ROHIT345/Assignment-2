import React, { Component } from 'react';
import '../container/secondary.css';
import Account from '../container/account'
class secondary extends Component {
    render() {
        return (
            <div className="container">
                <form className="form1">
                    <div className="header">
                        <strong>Get Started For Free</strong>
                    </div>
                    <label><strong>Email</strong></label>
                    <input type="email" id="input1"></input>
                    <label><strong>Password</strong></label>
                    <input type="password" id="input2"></input>
                    <button className="btn3" value="Start Coding Now"><strong>Start Coding Now</strong></button>
                    <p className="discription">
                        By signing up for Codecademy, you agree to
                    </p>
                    <p className="dis2">
                    Codecademy's <a href="https://www.codecademy.com/terms">Term of Service</a> & <a href="https://www.codecademy.com/policy">Privacy policy</a>.
                    </p>
                    <div className="dis3"><strong>Or, use another account:</strong></div>
                    <Account/>
                    

                </form>
                
            </div>
        );
    }
}

export default secondary;