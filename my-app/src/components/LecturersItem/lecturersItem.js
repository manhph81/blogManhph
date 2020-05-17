import React, { Component } from 'react';
import { NavLink, Route} from  'react-router-dom';

const LecturerLink = ({ lecturer, index, url}) =>{
    return (
        <Route
            path ='/review/:slug'
            children = { () =>{
                return (
                    // <NavLink to={`review/${lecturer.slug}`} key={index}>
                        <tr>
                            <td scope="row">Id</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    // </NavLink>
                );
                }
            }  
        >
        </Route>
    )
}
class LecturersItem extends Component{
    render(){
        var {lecturer,index,url} = this.props;
        return(
            <LecturerLink
                lecturer = {lecturer}
                index = {index}
                url = {url}
                >
            </LecturerLink>
        )
    }
}


export default LecturersItem;
