import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
   return {
      //justDeleted: state.campus.justDeleted
      selectedCampus: state.campus.selected
   }
}

export default connect(mapStateToProps)((props) => {

   return (
           <div className="margin_div">
            <h3>{props.selectedCampus.name} has been deleted.</h3>
            {
               //??? is there a way to access name of deleted item w/o making a spot for it in the store?
            }
           </div>
           )
})

