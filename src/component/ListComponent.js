import React,{useEffect, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { getAllStudent } from "../service/studentService";
import {Link} from 'react-router-dom'
function ListComponent(){
    const [studentList, setStudentList] = useState([]);
    useEffect(()=>{
        setStudentList(()=>(
            [
                ...getAllStudent()
            ]
        ))
    }, []);

    return(
        <>
                
                <h2>Student List</h2>
                <button className={'btn btn-sm btn-success'}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={'/student/create'}>Add new Product</Link>
                </button>
                
                <table className={'table table-gray'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList&&studentList.map((e, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>
                                <button  className={'btn btn-sm btn-primary'}>Edit
                                </button>
                            </td>
                            <td>
                                <button  className={'btn btn-sm btn-danger'}>Delete
                                </button> 
                            </td>
                            <td>
                            <Link to={'/products/detail/'+e.id} className={'btn btn-secondary btn-sm'}>Detail</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                
            </>
    )
}
export default ListComponent;