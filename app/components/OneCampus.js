import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteACampus } from '../actions/campus';
import Popup from './Popup';

const mapStateToProps = (state) => {
   return {
      selectedCampus: state.campus.selected
      /* state.campus.selected should look like:
         selected: {
            comment:
            createdAt:
            fields:
            id:
            location:
            mascot:
            name:
            student: {studentObj}
            updatedAt:
         }
      */
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deleteACampus: (campusId) => {
         return dispatch(deleteACampus(campusId))
      }
   }
}

class OneCampus extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         clicked: false
      }
      this.handleClick = this.handleClick.bind(this);
      this.clearPopUp = this.clearPopUp.bind(this);
      this.deleteForReal = this.deleteForReal.bind(this);
   }

   handleClick() {
      this.setState({  clicked: true  })
   }

   clearPopUp() {
      this.setState({  clicked: false  })
   }

   deleteForReal() {
      const campusId = this.props.selectedCampus.id;
      this.props.deleteACampus(campusId)
   }


   render() {

   const selectedCampus = this.props.selectedCampus;
   const message = `Hey!  You are about to delete ${selectedCampus.name} from your database.  Are you sure you want to do this??`
 console.log('selectedCampus.students', selectedCampus.students)

     return (
      <div className="margin_div">
         <h3>{selectedCampus.name}</h3>

         <button type="submit" className="add_edit_btn"><Link to={`/c/edit/${selectedCampus.id}`}>edit</Link></button>


         <button type="submit" className="add_edit_btn" onClick={this.handleClick}>delete</button>


         {this.state.clicked && <Popup clearPopUp={this.clearPopUp} deleteForReal={this.deleteForReal} path={`/c/deleted/${this.props.selectedCampus.id}`} message={message}/>}


            <div >
               {
                  selectedCampus.location ?
                  <div className="description_row">
                     <h5>location:</h5> {selectedCampus.location}
                  </div>
                  : null
               }
               {
                  selectedCampus.fields ?
                  <div className="description_row">
                     <h5>specialty fields:</h5> {selectedCampus.fields}
                  </div>
                  : null
               }
               {
                  selectedCampus.mascot ?
                  <div className="description_row">
                     <h5>mascot:</h5> {selectedCampus.mascot}
                  </div>
                  : null
               }
               {
                  selectedCampus.comment ?
                  <div className="description_row">
                     <h5>comments:</h5> {selectedCampus.comment}
                  </div>
                  : null
               }
               {

                  selectedCampus.student ?
                  /*
                        student: [{studentObj}]
                  */
                   <div className="description_row">
                     <h5>students:</h5> ({selectedCampus.student.length})
                     <div id="campus_students_div">
                     <ul id="student_list">
                     {
                     selectedCampus.student.map((studentObj) => {
                        return <li key={studentObj.id}><Link to={`/student/${studentObj.id}`}>{studentObj.lastName}, {studentObj.firstName}</Link></li>
                     })
                     }
                     </ul>
                     </div>
                   </div>
                   : null
               }

            </div>

        </div>
     )
   }

}


export default connect(mapStateToProps, mapDispatchToProps)(OneCampus);
