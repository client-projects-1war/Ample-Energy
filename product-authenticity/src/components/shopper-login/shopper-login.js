import {  useFormik , Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import '../button.css'


export function ShopperLogin(){
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    return(
        <div  >
           
            <div className="container-fluid d-flex justify-content-center align-items-center">
            
            <Formik 
              initialValues={{
                 "UserId":"",
                 "Password":""
              }}
              onSubmit={
                (values)=>{
                    axios({
                        method: "get",
                        url: "https://it.1war.company/authenticity.json"
                    })
                    .then(response=>{
                        for(var user of response.data){
                            if(  user.Password==values.Password) {
                                setCookie("userid", values.UserId);
                                navigate("/home");
                                break;
                            } else {
                                navigate("/invalid");
                            }
                        }
                    })
                }
              }
            >
            {
                
                <Form className="">
                    <h1 style={{color:'#d7b56d', fontSize:'55px'}}>Product  Authenticity</h1>
                    <br></br><br></br>
                    <dl>
                       
                        <dt></dt>
                        <dd><Field type="text" name="Password" placeholder="Product Code" size="50" required />&nbsp; <span style={{fontSize:'25px', fontWeight:'bold'}}>Product Code</span></dd>
                    </dl>
                    <button className="btn btn-primary">Check Authenticity</button>
                    
                </Form>
            }
            </Formik>
            </div>
        </div>
    )
}