import React from 'react';

export default (props) => {

console.log("props ddm: ", props)
      return (
            <select value={props.orderValue} onChange={props.handleChange} >
               <option value="alphabetical">Alphabetical</option>
               <option value="age">Order of Creation</option>
            </select>
      )

}
