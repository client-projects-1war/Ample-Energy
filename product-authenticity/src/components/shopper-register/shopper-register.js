import {  useFormik , Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function ShopperRegister()
{
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState('');

    useEffect(()=>{
            axios({
                method:'get',
                url: 'http://127.0.0.1:5000/users'
            })
            .then(response=> {
                setUsers(response.data);
            })
    },[]);

    function VerifyUserId(e){
        for(var user of users){
            if(user.Password==e.target.value){
                setUserError('Product Code Already taken - Try Another');
                break;
            } else {
                setUserError('User Name Available');
            }
        }
    }
    return(
        <div className="container-fluid">
            <h3>Regiser Product Code</h3>
            <Formik 
             initialValues={{
                UserId:"",
                Password:"",
                
             }}

             validationSchema={
                yup.object({
                    UserId: yup.string().required("User Id Required"),
                    Password: yup.string().required("Password Required"),
                })
             }

             onSubmit= {
                (values)=> {
                    axios({
                        method: "post",
                        url: "http://127.0.0.1:5000/registeruser",
                        data: values
                    })
                    .then(()=>{
                        alert("Register Successfully..");
                        navigate("/Authenticity");
                    })
                }
             }
            >
              {
                <Form>
                    <dl>
                        <dt>Product name</dt>
                        <dd> <Field type="text" onKeyUp={VerifyUserId} name="UserId" /> </dd>
                        
                        
                        
                        <dt>Password</dt>
                        <dd> <Field type="password" name="Password" /> </dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Password" />
                        </dd>
                        
                    </dl>
                    <button className="btn btn-primary">Register</button>
                    <div>
                        <Link to="/Authenticity">Existing User?</Link>
                    </div>
                </Form>
              }
            </Formik>
        </div>
    )
}