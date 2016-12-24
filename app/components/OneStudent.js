import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const mapStateToProps = (state) => {
   return {
      selectedStudent: state.student.selected
   }
}

const OneStudent = (props) => {

   const selectedStudent = props.selectedStudent;

     return (
        <div className="margin_div">
            <h3>{selectedStudent.firstName} {selectedStudent.lastName}</h3>

      <Link to={`/student/edit/${props.params.id}`}><button type="submit" className="add_edit_btn">edit</button></Link>


            <div >
               {
                  selectedStudent.email ?
                  <div className="description_row">
                     <h5>e-mail:</h5> {selectedStudent.email}
                  </div>
                  : null
               }
               {
                  selectedStudent.phone ?
                  <div className="description_row">
                     <h5>phone number:</h5> {selectedStudent.phone}
                  </div>
                  : null
               }
               {
                  selectedStudent.dob ?
                  <div className="description_row">
                     <h5>Date of Birth:</h5> {selectedStudent.getFormattedDob}
                  </div>
                  : null
               }
               {
                  selectedStudent.status ?
                  <div className="description_row">
                     <h5>status:</h5> {selectedStudent.status}
                  </div>
                  : null
               }
               {
                  selectedStudent.campus ?
                  <div className="description_row">
                     <h5>campus:</h5> {selectedStudent.campus}
                  </div>
                  : null
               }
               {
                  // selectedStudent.studentBody ?
                  // <div className="description_row">
                  //    <h5>students:</h5> {props.students?}
                  // </div>
                  // : null
               }

            </div>

        </div>
     )
}


export default connect(mapStateToProps)(OneStudent);
