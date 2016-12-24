import React from 'react';
import { connect } from 'react-redux';
import { addNewCampus } from '../actions/campus';
import { addNewStudent } from '../actions/student';


const MapStateToProps = (state) => {
   return {
      campusList: state.campus.list,
   }
}

const MapDispatchToProps = (dispatch) => {
   return {
      addNewCampus: (newCampus) => { dispatch(addNewCampus(newCampus)) },
      addNewStudent: (newStudent) => { dispatch(addNewStudent(newStudent)) }
   }
}



class AddEdit extends React.Component {

constructor(props) {
   super(props)
   this.state = {
      dirty: false,
      nameVal:  ''
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
}


handleSubmit(evt) {
   evt.preventDefault();
   // if (add) {
   //    add(info);
   // } else if (edit)
   //    edit(info);
   const name = evt.target.name.value,
         location = evt.target.location.value,
         fields = evt.target.fields.value,
         mascot = evt.target.mascot.value,
         comment = evt.target.comment.value
   this.props.addNewCampus({name, location, fields, mascot, comment});
   this.setState({
      dirty: false
   })
}

handleChange(evt) {
   const value = evt.target.value;
   this.setState({
      nameVal: value,
      dirty: true
   })
}

render() {
   let warning = '';
   if (!this.state.nameVal && this.state.dirty) warning = 'Name is required.'

   return (
      <div id="addedit_div" className="margin_div">

         <div>

            {
               this.props.children &&
               React.cloneElement(this.props.children,
                  {handleChange: this.handleChange,
                  handleSubmit: this.handleSubmit,
                  warning: warning,
                  campusList: this.props.campusList,
                  nameVal: this.state.nameVal,
                  dirty: this.state.dirty,
                  props: this.props})
            }

         </div>
      </div>)
}

}

export default connect(MapStateToProps, MapDispatchToProps)(AddEdit)
