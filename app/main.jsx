'use strict';
import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';

import Home from './components/Home';
import Welcome from './components/Welcome';
import StudentList from './components/StudentList';
import OneStudent from './components/OneStudent';
import CampusContainer from './components/CampusContainer';
import OneCampus from './components/OneCampus';
import AddEditCampusContainer from './components/AddEditCampusContainer';
import AddEditCampus from './components/AddEditCampus';
import AddEditStudentContainer from './components/AddEditStudentContainer';
import AddEditStudent from './components/AddEditStudent';
import Lost from './components/Lost';
import Deleted from './components/Deleted';

import {getAllCampuses, selectACampus } from './actions/campus';
import {getAllStudents, selectAStudent } from './actions/student';



const onCampusEnter = () => {
   store.dispatch(getAllCampuses());
}

const onOneCampusEnter = (nextState) => {
   const campusId = nextState.params.id
   store.dispatch(selectACampus(campusId));
}

const onNewCampusEnter = () => {
   const campusList = store.getState().campus.list
   const campusIdArr = campusList.map(c => c.id);
   const campusId = Math.max(campusIdArr);
   store.dispatch(selectACampus(campusId));
}

const onStudentEnter = () => {
   store.dispatch(getAllStudents());
   console.log("onEnter")
}

const onOneStudentEnter = (nextState) => {
   const studentId = nextState.params.id
   const selectedStudent = store.getState().student.selected
      if (selectedStudent === {} || selectedStudent === undefined) {
         store.dispatch(selectAStudent(studentId));
      } else if (selectedStudent.id !== studentId) {
         store.dispatch(selectAStudent(studentId));
      }
}

const onNewStudentEnter = () => {
   const studentList = store.getState().student.list
   const studentIdArr = studentList.map(s => s.id);
   const studentId = Math.max(studentIdArr);
   store.dispatch(selectAStudent(studentId));
}

const onCampusEditEnter = (nextState) => {
   if (nextState.params.addedit === 'edit') {
      const campusId = nextState.params.id
      store.dispatch(selectACampus(campusId));
      store.dispatch(getAllStudents());
   }

}


render(
  <Provider store={store}>
      <Router history={browserHistory}>
         <Route path="/" component={Home}>
               <IndexRoute component={Welcome} />

               <Route path="/student" component={StudentList} onEnter={onStudentEnter} />
               <Route path="/student/:id" component={OneStudent} onEnter={onOneStudentEnter} />
               <Route path="/s/deleted/:id" component={Deleted}  />



               <Route path="/editstudent" component={AddEditStudentContainer}  />
               <Route component={AddEditStudentContainer} >
                  {//??? why does ajax call to backend route get mixed up w/ front end path when front end path has more than one segment and ajax call is '/api/campus'?  (/s/add --> /s/add/api/campus)
                  }
                  <Route path="/s/:addedit" component={AddEditStudent} onEnter={onCampusEnter}/>
                  <Route path="/s/:addedit:id" component={AddEditStudent} onEnter={onCampusEnter}/>
               </Route>
               <Route path="/newstudent" component={OneStudent} onEnter={onNewStudentEnter} />


               <Route path="/campus" component={CampusContainer} onEnter={onCampusEnter} />
               <Route path="/campus/:id" component={OneCampus} onEnter={onOneCampusEnter} />
               <Route path="/c/deleted/:id" component={Deleted}  />


               <Route path="/editcampus" component={AddEditCampusContainer} />
               <Route component={AddEditCampusContainer} onEnter={onCampusEditEnter} >

                  <Route path="/c/:addedit" component={AddEditCampus} />
                  <Route path="/c/:addedit/:id" component={AddEditCampus} />
                  {//??? does dropdown menu component need to be included in this hierarchy?
                  }
               </Route>
               <Route path="/newcampus" component={OneCampus} onEnter={onNewCampusEnter} />

         </Route>
         <Route path="*" component={Lost} />
      </Router>
  </Provider>,
  document.getElementById('main')
)
