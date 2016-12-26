import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

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


      {
         this.props.route.path === '/newstudent' &&
         (<div>
            <h5><em>New Student Profile Created:</em></h5>
         </div>)
      }


            <h3>{selectedStudent.firstName} {selectedStudent.lastName}</h3>

      <Link to={`/student/edit/${selectedStudent.id}`}><button type="submit" className="add_edit_btn">edit</button></Link>


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
