import axios from 'axios';


export const SELECT_CAMPUS = 'SELECT_CAMPUS';
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const DELETED_CAMPUS = 'DELETED_CAMPUS'


const getCampuses = (campuses) => {
   return {
      type: GET_CAMPUSES,
      campuses
   }
}

const selectCampus = (campus) => {
   return {
      type: SELECT_CAMPUS,
      campus
   }
}

const deletedCampus = (campus) => {
   return {
      type: DELETED_CAMPUS,
      campus
   }
}


export const getAllCampuses = () => {
   return (dispatch) => {
      axios.get('http://localhost:1337/api/campus/')
      //??? relative vs absolute url? 'api/campus/' gets appended to front end paths...
      .then((res) => res.data)
      .then((campuses) => {
         dispatch(getCampuses(campuses));
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

export const selectACampus = (campusId) => {
   return (dispatch) => {
      axios.get(`/api/campus/${campusId}`)
      .then((res) => {
         dispatch(selectCampus(res.data));
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

export const addNewCampus = (campus) => {
   return (dispatch, getState) => {
      axios.post('/api/campus/', {campus})
      .then((res) => res.data)
      .then((newCampus) => {
         console.log("newCampus from actions page: ", newCampus)
         const newCampusList = getState().campus.list.concat(newCampus);
         dispatch(getCampuses(newCampusList));
         dispatch(selectCampus(newCampus));
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
      });
   }
}

export const editACampus = (campus) => {
   return (dispatch) => {
      axios.put(`/api/campus/${campus.id}`, {campus})
      .then((res) => res.data)
      .then((updatedCampus) => {
         dispatch(selectCampus(updatedCampus));
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
      });
   }
}

//??? does delete need to be an action creator?
export const deleteACampus = (campusId) => {
   return (dispatch) => {
      axios.delete(`/api/campus/${campusId}`)
      // .then((res) => {
      //    dispatch(deletedCampus(res.data))
      // })
      .then(() => {
      //   dispatch(selectCampus({}));
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
      });
   }
}
