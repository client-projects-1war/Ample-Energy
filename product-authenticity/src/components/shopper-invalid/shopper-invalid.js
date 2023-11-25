import { Link } from "react-router-dom";

export function ShopperInvalid(){
    return(
        <div className="text-danger container-fluid  justify-content-center align-items-center" style={{marginLeft:'20%', marginRight:'10%'}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ProhibitionSign2.svg/1200px-ProhibitionSign2.svg.png"  width='100' className="   justify-content-center align-items-center"  style={{marginLeft:'30%', marginRight:'10%'}}  />
   <br/>
   <br/>
            <h1 >FAKE PRODUCT KINDLY RECHECK THE CODE AND TRY AGAIN</h1>
            <br></br>
            
            <div >
                <Link to="/Authenticity" className="btn btn-primary">Try again</Link>
            </div>
        </div>
        
    )
}