import React, { Component } from 'react';
export function applyFlex(InputComponent){
    class hoc extends Component {
        render() {
            return (
                <div style={{display:'flex'}}>
                    <InputComponent/>
                </div>
            );
        }
    }
    
    return hoc;
}