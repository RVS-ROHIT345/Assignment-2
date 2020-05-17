import Primary from './primary'
import Secondary from './secondary'
import '../container/grid.css'
import React, { Component } from 'react';

class Grid extends Component {
    render() {
        return (
            <div className="grid-container">
               <div className="primary">
                <Primary />   
               </div>
               <div className="secondary">
                <Secondary />
               </div>  
            </div>
        );
    }
}

export default Grid;