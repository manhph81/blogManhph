import React, { Component } from 'react';
import LecturersItem from '../LecturersItem/lecturersItem';

class LecturersList extends Component{
    render(){
        return (
            <div>
                <h1>Danh sách giảng viên</h1>
                <table className="table table-dark">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <LecturersItem>
                        </LecturersItem>
                      </tbody>
                    </table>
            </div>
          );
    }
}


export default LecturersList;
