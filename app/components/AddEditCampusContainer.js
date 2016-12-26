import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { addNewCampus, editACampus } from '../actions/campus';
import {alterStudentCampus} from '../actions/student';



const MapStateToProps = (state) => {
   return {
      //campus.selected should be set from onEnter method when entering 'edit' path
      selectedCampus: state.campus.selected,
      studentList: state.student.list
   }
}

const MapDispatchToProps = (dispatch) => {
   return {
      addNewCampus: (newCampus) => {
         dispatch(addNewCampus(newCampus))
         browserHistory.push('/newcampus');
      },
      editACampus: (editedCampus) => { dispatch(editACampus(editedCampus)) },
      alterStudentCampus: (studentId) => { dispatch(alterStudentCampus(studentId)) }
   }
}


class AddEditCampusContainer extends React.Component {

constructor(props) {
console.log("addeditcampuscontainer props: ", props)
   super(props)
   this.state = {
      dirty: false,
      addEdit: props.params.addedit,
      campusToEdit: {},
      studentsAtThisCampus: [],
      studentToAdd: ''
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChangeName = this.handleChangeName.bind(this);
   this.handleChangeLocation = this.handleChangeLocation.bind(this);
   this.handleChangeFields = this.handleChangeFields.bind(this);
   this.handleChangeMascot = this.handleChangeMascot.bind(this);
   this.handleChangeComment = this.handleChangeComment.bind(this);
   this.handleChangeAddStudent = this.handleChangeAddStudent.bind(this)
   this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
   this.handleAddStudent = this.handleAddStudent.bind(this)
}


componentDidMount() {
   if (this.state.addEdit === 'edit') {
      // if (this.props.selectedCampus !== nextProps.selectedCampus) {
         // const campusInfo = Object.assign({}, nextProps.selectedCampus)
         this.setState({
            campusToEdit: this.props.selectedCampus,
            studentsAtThisCampus: this.props.selectedCampus.student
         })
      // }
   }
}


/*  -- handleChange nightmare -- */

handleChangeName(evt) {
   const campusToEdit = this.state.campusToEdit;
   this.state.campusToEdit.name = evt.target.value;

   this.setState({
      campusToEdit : campusToEdit,
      dirty: true
   })
}

handleChangeLocation(evt) {
   if (this.state.addEdit === 'edit') {
      const campusToEdit = this.state.campusToEdit;
   this.state.campusToEdit.location = evt.target.value;

      this.setState({  campusToEdit : campusToEdit  })
   }
}

handleChangeFields(evt) {
   if (this.state.addEdit === 'edit') {
      const campusToEdit = this.state.campusToEdit;
      this.state.campusToEdit.fields = evt.target.value;

      this.setState({  campusToEdit : campusToEdit  })
   }
}

handleChangeMascot(evt) {
   if (this.state.addEdit === 'edit') {
      const campusToEdit = this.state.campusToEdit;
      this.state.campusToEdit.mascot = evt.target.value;

      this.setState({  campusToEdit : campusToEdit  })
   }
}

handleChangeComment(evt) {
   if (this.state.addEdit === 'edit') {
      const campusToEdit = this.state.campusToEdit;
      this.state.campusToEdit.comment = evt.target.value;

      this.setState({  campusToEdit : campusToEdit  })
   }
}

handleChangeAddStudent(evt) {
   if (this.state.addEdit === 'edit') {
      this.state.studentToAdd = evt.target.value;

      this.setState({  studentToAdd : evt.target.value  })
   }
}


handleSubmit(evt) {
   evt.preventDefault();

   const name = evt.target.name.value,
         location = evt.target.location.value,
         fields = evt.target.fields.value,
         mascot = evt.target.mascot.value,
         comment = evt.target.comment.value,
         id = this.props.selectedCampus.id;

   if (this.state.addEdit === 'add') {
      this.props.addNewCampus({name, location, fields, mascot, comment});

   } else if (this.state.addEdit === 'edit') {
      this.props.editACampus({name, location, fields, mascot, comment, id});
   }

   this.setState({
      dirty: false
   })
}

handleDeleteStudent (ev) {
   ev.preventDefault();
   const studentId = ev.target.value;
   const newStudentsList = this.state.studentsAtThisCampus.filter((student) => {
         return student.id !== studentId;
      })
   this.setState({
      studentsAtThisCampus: newStudentsList
   })
   //this.props.alterStudentCampus(studentId, null)
}

handleAddStudent (ev) {
   ev.preventDefault();
   const studentId = ev.target.value;
   const campusId = this.props.selectedCampus.id
   const newStudentsList = Object.Assign(...this.state.studentsAtThisCampus, newStudent)
   this.setState({
      studentsAtThisCampus: newStudentsList
   })
   //.props.alterStudentCampus(studentId, campusId)
}



render() {

   let warning = '';
   if (!this.state.campusToEdit.name && this.state.dirty) warning = 'Name is required.'

   const filteredStudents = this.props.studentList.filter(student => student.lastName.match(this.state.studentToAdd));

   return (
      <div id="addedit_div" className="margin_div">

         <div>

            {
               this.props.children &&
               React.cloneElement(this.props.children,
                  {
                  handleChangeName: this.handleChangeName,
                  handleChangeLocation: this.handleChangeLocation,
                  handleChangeFields: this.handleChangeFields,
                  handleChangeMascot: this.handleChangeMascot,
                  handleChangeComment: this.handleChangeComment,
                  studentsAtThisCampus: this.state.studentsAtThisCampus,
                  handleChangeAddStudent: this.handleChangeAddStudent,
                  studentToAdd: this.state.studentToAdd,
                  handleDeleteStudent: this.handleDeleteStudent,
                  handleAddStudent: this.handleAddStudent,
                  students: filteredStudents,
                  handleSubmit: this.handleSubmit,
                  warning: warning,
                  selectedCampus: this.props.selectedCampus,
                  campusToEdit: this.state.campusToEdit,
                  dirty: this.state.dirty,
                  addEdit: this.state.addEdit,
               })
            }

         </div>
      </div>)
}

}

export default connect(MapStateToProps, MapDispatchToProps)(AddEditCampusContainer)
