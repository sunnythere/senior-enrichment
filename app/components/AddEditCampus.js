import React from 'react';


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
            <div>

            <button type="submit" className="btn_submit">Submit</button>
            <button type="reset" className="btn_reset">Reset</button>

            </div>

         </form>

      </div>
   </fieldset>

   </div>)

}
