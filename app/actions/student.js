import axios from 'axios';



export const SELECT_STUDENT = 'SELECT_STUDENT';
export const GET_STUDENTS = 'GET_STUDENTS';


const getStudents = (students) => {
   return {
      type: GET_STUDENTS,
      students
   }
}

const selectStudent = (student) => {
   return {
      type: SELECT_STUDENT,
      student
   }
}


export const getAllStudents = () => {
   return (dispatch) => {
      axios.get('http://localhost:1337/api/student/')
      .then((res) => res.data)
      .then((students) => {
         console.log("in getAllStudents: ", students)
         dispatch(getStudents(students));
      })
      .catch((err) => {
         if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
         } else {
            console.log('error', err.message);
         }
         console.log(err.config);
      })
   }
}

export const selectAStudent = (studentId) => {
   return (dispatch) => {
      axios.get(`/api/student/${studentId}`)
      .then((res) => {
         dispatch(selectStudent(res.data));
      });
   }
}

export const addNewStudent = (student) => {
   return (dispatch, getState) => {
      axios.post(`/api/student/`, {student})
      .then((res) => res.data)
      .then((newstudent) => {
         console.log("newstudent from actions page: ", newstudent)
         const newStudentList = getState().student.list.concat(newstudent);
         dispatch(getStudents(newStudentList));

      });
   }
}
