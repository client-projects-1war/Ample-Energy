import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { CrudCreate } from "../../crud-operations/crud-create"
import { CrudDetails } from "../../crud-operations/crud-details"
import { CrudEdit } from "../../crud-operations/crud-edit"
import { CrudIndex } from "../../crud-operations/crud-index"
import { ShopperCategory } from "../shopper-category/shopper-category"
import { ShopperDetails } from "../shopper-details/shopper-details"
import { ShopperHome } from "../shopper-home/shopper-home"
import { ShopperInvalid } from "../shopper-invalid/shopper-invalid"
import { ShopperJewelery } from "../shopper-jewelery/shopper-jewelery"
import { ShopperLogin } from "../shopper-login/shopper-login"
import { ShopperRegister } from "../shopper-register/shopper-register"

export function ShopperIndex()
{
  
    return(
        <div className="container-fluid">
            <BrowserRouter>
            
    
              <div className="mt-3">
                <Routes>
                    <Route path="/" element={<ShopperLogin />} />
                    <Route path="home" element={<ShopperHome />} />
                    <Route path="register" element={<ShopperRegister />} />
                    <Route path="Authenticity" element={<ShopperLogin />} />
                    {/*
                     
                    <Route path="jewelery" element={<ShopperJewelery />} />
                    <Route path="category/:catname" element={<ShopperCategory />} />
                    <Route path="details/:id" element={<ShopperDetails />} />
                     <Route path="products" element={<CrudIndex />} />
                    <Route path="NewProduct" element={<CrudCreate />} />
                    <Route path="cruddetails/:id" element={<CrudDetails />}/>
                    <Route path="crudedit/:id" element={<CrudEdit />} />
                    */}
                    <Route path="invalid" element={<ShopperInvalid />} />
                   
                </Routes>
              </div>
            </BrowserRouter>
        </div>
    )
}