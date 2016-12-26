import React from 'react';
import {Link} from 'react-router';


export default (props) => {
console.log("Props on AddEditCampus Component: ", props)

const addEditVar = `${props.addEdit.slice(0,1).toUpperCase()}${props.addEdit.slice(1)}`;

const campusToEdit = props.campusToEdit;


return (
   <div className="margin_div addedit_div">

   <fieldset>
      <legend>
         <h4>{addEditVar} A Campus</h4>
      </legend>

      <div className="form_div">

         <form onSubmit={props.handleSubmit} >
            <div>

            <label htmlFor="name"> Name </label>
            <input type="text" name="name" onChange={props.handleChangeName} value={campusToEdit.name} className="input_text" />

               {props.warning && <div className="alert">{props.warning}</div> }

            </div>
            <div>

            <label htmlFor="location"> Location </label>
            <input type="text" value={campusToEdit.location} onChange={props.handleChangeLocation} name="location" className="input_text" />

            </div>{
         // <div>

         //    image uploading tool?

         // </div>
            }<div>

            <label htmlFor="fields"> Fields </label>
            <input type="text" value={campusToEdit.fields} onChange={props.handleChangeFields} name="fields" className="input_text" />

            </div>
            <div>

            <label htmlFor="mascot"> Mascot </label>
            <input type="text" value={campusToEdit.mascot} onChange={props.handleChangeMascot} name="mascot" className="input_text" />

            </div>
            <div>

            <label htmlFor="comment"> Comments </label>
            <textarea value={campusToEdit.comment} onChange={props.handleChangeComment} name="comment" className="input_text" />

            </div>

            {
               props.addEdit === 'edit'?
            <div>

            <label htmlFor="comment"> Students </label>

               <div className="">

                  <div id="campus_students_div_small">
                     <ul id="student_list_small">
                     {

                     props.studentsAtThisCampus ?

                     props.studentsAtThisCampus.map((studentObj) => {
                        return <li key={studentObj.id}>{studentObj.lastName}, {studentObj.firstName} &nbsp;

                        <button id="delete_student" name="deleteStudent" value={studentObj.id} onClick={props.handleDeleteStudent}>X</button></li>
                     })

                     : <li> No students listed </li>

                     }
                     </ul>
                  </div>

                  <div id="add_student_div">
                     <span className="name_span1">Add a Student</span><br></br>
                     <input type="text" value={props.studentToAdd} onChange={props.handleChangeAddStudent} name="studentToAdd" className="input_text" id="add_name_field" placeholder="Search by last name"/>
                     <button id="add_student" name="addStudent" value='' onClick={props.handleAddStudent}>Add</button>
                  </div>
               </div>
            </div>
            : null
            }
            <div>

            <button type="submit" className="btn_submit">Submit</button>

            <button type="reset" className="btn_reset">Reset</button>

            </div>

         </form>

      </div>
   </fieldset>

   </div>)

}
