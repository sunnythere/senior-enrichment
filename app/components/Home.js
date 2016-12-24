import React from 'react';
import Navbar from './Navbar';

//import {Router, Route} from react-router;


export default class Home extends React.Component {


   render() {
      return (
         <div className="home_div">
            <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
            <Navbar />
               {this.props.children}
         </div>
      )
   }

}
