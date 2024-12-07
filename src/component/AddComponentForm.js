import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import {useNavigate} from 'react-router-dom';
import {Field, Formik, Form, ErrorMessage} from "formik"
import { addNewStudent } from "../service/studentService";
import * as Yup from 'yup';
import '../css/AddComponent.css' 
function AddComponentForm(){
    const [student, setStudent] = useState({id:"", name:"", phone:"", email:''})
    const navigate = useNavigate();
    const handleSubmit=(value)=>{
        addNewStudent(value);
        navigate('/student');
    }
    const handleValidate = Yup.object({
        id:Yup.number().required("ID không được để trống")
        .min(1, 'Phải là số nguyên dương'),
        name: Yup.string().required('Yêu cầu k để trống')
        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,'Tên chưa đúng định dạng'),
        phone: Yup.number().required('Yêu cầu k để trống'),
        email: Yup.string().required('Yêu cầu k để trống')
        .matches(/^\S+@\S+\.\S+$/,'Email chưa đúng định dạng'),
    })
    //validate: Kiểm tra tính hợp lệ của dữ liệu trước khi thêm mới

    return(
        <>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>ID:</label>
                        <Field type="text" name='id'/>
                        <ErrorMessage style={{color:'red'}} name="id" component='div'/>
                    </div>
                    <div>
                        <label>Name:</label>
                        <Field type="text" name='name'/>
                        <ErrorMessage style={{color:'red'}} name="name" component='div'/>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <Field type="text" name='phone'/>
                        <ErrorMessage style={{color:'red'}} name="phone" component='div'/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="text" name='email'/>
                        <ErrorMessage style={{color:'red'}} name="email" component='div'/>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-success" type="submit">Save</button>
                    </div>
                    
                </Form>
            </Formik>
        </>
    )
}
export default AddComponentForm;