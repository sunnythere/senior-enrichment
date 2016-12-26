import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addNewStudent } from '../actions/student';


const MapStateToProps = (state) => {
   return {
      campusList: state.campus.list
   }
}

const MapDispatchToProps = (dispatch) => {
   return {
      addNewStudent: (newStudent) => {
         dispatch(addNewStudent(newStudent));
         browserHistory.push('/newstudent')
      }
   }
}



class AddEditStudentContainer extends React.Component {

constructor(props) {
   super(props)

   this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit(evt) {
   evt.preventDefault();
   // if (add) {
   //    add(info);
   // } else if (edit)
   //    edit(info);
   const firstName = evt.target.firstName.value,
         lastName = evt.target.lastName.value,
         email = evt.target.email.value,
         phoneVal = evt.target.phone.value,
         phone = `(${phoneVal.slice(0,3)}) ${phoneVal.slice(3,6)}-${phoneVal.slice(6)}`,
         dob = evt.target.dob.value,
         status = evt.target.status.value,
         campus = evt.target.campus.value
   this.props.addNewStudent({firstName, lastName, email, phone, dob, status, campus});

}



render() {
   // let warning = '';
   // if (!this.state.nameVal && this.state.dirty) warning = 'Name is required.'

   return (
      <div id="addedit_div" className="margin_div">

         <div>

            {
               this.props.children &&
               React.cloneElement(this.props.children,
                  {handleSubmit: this.handleSubmit,
                  campusList: this.props.campusList})
            }

         </div>
      </div>)
}

}

export default connect(MapStateToProps, MapDispatchToProps)(AddEditStudentContainer)
