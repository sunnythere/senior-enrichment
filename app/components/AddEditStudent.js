import React from 'react';


export default (props) => {
console.log("Props on AddEditStudent Component: ", props)

return (
<div className="margin_div addedit_div">

   <fieldset>
      <legend>
         <h4>Add A Student</h4>
      </legend>

      <div className="form_div">
      <form onSubmit={props.handleSubmit}>

            <div>

               <label htmlFor="name"> Name </label><br/>

               <div id="first_name_div">
                  <input type="text" value={props.firstName}  name="firstName" className="input_text name1" />
                  <span className="name_span1">First</span>
               </div>
               <div id="last_name_div">
                  <input type="text" value={props.lastName}  name="lastName" className="input_text name" />
                  <span className="name_span">Last</span>
               </div>

            </div>
            <div>

               <label htmlFor="email"> E-mail </label>
               <input type="text" name="email" className="input_text" />

            </div>{
         // <div>

         //    image uploading tool?

         // </div>
            }<div>

               <label htmlFor="phone"> Phone Number </label>
               <input type="text" name="phone" className="input_text" />

            </div>
            <div>

               <label htmlFor="dob"> Date of Birth </label>
               <input type="text" name="dob" className="input_text" />

            </div>
            <div>

               <div id="first_name_div">
               <label htmlFor="status"> Status </label>
               <select name="status" className="input_select left">
                  <option default>--Select Status--</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="alumni">Alumni</option>
               </select>
               </div>

               <div id="last_name_div">
               <label htmlFor="campus">  &nbsp; Campus </label>
               <select name="campus" className="input_select right">
               <option default>--Select Campus--</option>
              {

                props.campusList
                  .map((campus) => {
                     return <option value={campus.id} key={campus.id}>{campus.name}</option>
                  })
              }

               </select>
               </div>

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
