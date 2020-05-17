import React, { Component } from 'react';
import LecturersList from './../../components/LecturersList/LecturersList'
import LecturersItem from './../../components/LecturersItem/lecturersItem'
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller'

class LecturersListPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lecturers : []
        }
    }

    componentDidMount(){
        callApi('lecturers', 'GET', null)
        .then(res=>{
            this.setState({
                lecturers : res.data
            })
        })
    }
    
    render(){
        var {lecturers} = this.state;
        return (
            <div className="col-xs-1-12">
                <LecturersList>
                    {this.showLecturers(lecturers)}
                </LecturersList>
            </div> 
          );
    }

    showLecturers = (lecturers)=>{
        var {match} = this.props;
        var result =null;
        if(lecturers.length>0){
            result = lecturers.map( (lecturer,index) =>{
                return (
                    <LecturersItem
                        url = {match.url}
                        key = {index}
                        lecturer = {lecturer}
                        index = {index}
                    >

                    </LecturersItem>
                )
            });
        }
        return result;
    }
}
//
const mapStateToProps = state =>{
    return {
        lecturers : state.lecturers
    }
}

export default connect(mapStateToProps,null)(LecturersListPage);
