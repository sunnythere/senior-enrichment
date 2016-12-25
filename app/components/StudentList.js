import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


const mapStateToProps = (state) => {
  return {
    studentList: state.student.list
  };
};


class StudentList extends React.Component {

   render() {

     return (
        <div className="margin_div">
            <h3>Student List</h3>

                  <Link to="/s/add"><button type="submit" className="add_edit_btn">add</button></Link>

            <ul>
            {
               this.props.studentList.map((student) => {
                  return <li key={student.id}><Link to={`/student/${student.id}`}>{student.lastName}, {student.firstName}</Link></li>
               })
            }
            </ul>
        </div>
     )
   }

}


export default connect(
  mapStateToProps
)(StudentList);

