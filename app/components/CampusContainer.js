import React from 'react';
import {connect} from 'react-redux';
import CampusList from './CampusList';


const mapStateToProps = (state) => {
  return {
    campusList: state.campus.list
  };
};



class CampusContainer extends React.Component {


  //  constructor(props) {
  //     super(props);
  //     this.state = {
  //        orderValue: 'age',
  //        orderedList: props.campusList
  //   }
  //  console.log('state : ', this.state)
  //   this.handleChange = this.handleChange.bind(this);
  // }


  //  handleChange(evt) {

  //     let orderedList;
  //     const list = this.props.campusList;
  //     const value = evt.target.value;
  //        console.log('handleChange: ', value)

  //     switch (value) {

  //        case 'alphabetical':
  //        orderedList = list.sort((a, b) => { return a.name.charCodeAt(0) - b.name.charCodeAt(0)});
  //        break;

  //        case 'age':
  //        orderedList = list.sort((a, b) => { return Number(a.id) - Number(b.id) });
  //        break;

  //        case 'size':
  //        orderedList = list;
  //        //fix this
  //        break;

  //        default:
  //        orderedList = list.sort((a, b) => { return a.name.charCodeAt(0) - b.name.charCodeAt(0)});
  //     }

  //     this.setState({
  //        orderedList: orderedList,
  //        orderValue: value
  //     })
  //  }


   render() {
      return (
        <div>
            <CampusList
            // handleChange={this.handleChange} orderValue={this.state.orderValue} orderedList={this.state.orderedList}
            campusList = {this.props.campusList}
            />
        </div>
      )
   }


} /* -- end of class --*/


export default connect(mapStateToProps)(CampusContainer)
