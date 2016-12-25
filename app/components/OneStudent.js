import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {selectACampus} from '../actions/campus';

const mapStateToProps = (state) => {
   return {
      selectedStudent: state.student.selected,
      selectedCampus: state.campus.selected
   }
}

class OneStudent extends React.Component {


   render() {
   console.log('props on onestudent: ', this.props)
   const selectedStudent = this.props.selectedStudent;

     return (
        <div className="margin_div">
            <h3>{selectedStudent.firstName} {selectedStudent.lastName}</h3>

      <Link to={`/student/edit/${this.props.params.id}`}><button type="submit" className="add_edit_btn">edit</button></Link>


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

                   this.props.selectedCampus ?
                  <div className="description_row">
                     <h5>campus:</h5>

                         <Link to={`/campus/${selectedStudent.campusId}`}key={selectedStudent.campusId}>
                         {this.props.selectedCampus.name}
                         </Link>

                  </div>
                  : null
               }

            </div>

        </div>
     )
}
}


export default connect(mapStateToProps)(OneStudent);
