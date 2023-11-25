import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import product from '../../images/product.jpg';
import '../button.css'

export function ShopperHome()
{
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies["userid"]==undefined){
            navigate("/Authenticity");
        }
    },[]);
    function SignoutClick(){
        removeCookie("userid");
        navigate("/Authenticity");
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            
            <div>
                <div>
                    <h1 style={{color:'green',  fontSize:'60px', fontWeight:'bold'}} className="container-fluid d-flex justify-content-center align-items-center">This is Genuine Product</h1>
                    
                </div>
                <br/>
               <section className="container-fluid d-flex justify-content-center align-items-center" >
  <div id="fh5co-contact" >
    <div className="container">
      <div className="row">
        <div className="col-md-6 animate-box">
          <div className="row">
            <img src={product} width={200} style={{borderRadius:'35px'}}/>
          </div>
        </div>
        <div className="col-md-6 animate-box">
          <h2 className="section-title" style={{color: '#d7b56e', fontSize: 30, fontWeight: 700, }}>Ample Energy</h2>
          <p>Ample Energy (AE) is one of the leading companies specialized in producing the&nbsp;<strong>high-end performance-enhancin</strong>g products with top-notch formulations that enable the users to build aesthetically better physiques and to witness improved performance.</p>
<p>We produce the&nbsp;<strong>premium qualit</strong>y preworkout blend with superior potency &amp; purity so that we can cater to the needs of athletes worldwide.</p>
<p>We only use a special standard of active pharmaceutical ingredients (API&rsquo;s) of superior quality (USP/BP), thus ensuring our products are of the&nbsp;<strong>highest quality standards.</strong></p>
        </div>
      </div>
    </div>
  </div>
  <br/>
 
</section>
<br/>
<div >
                        <Link to="/Authenticity" className="btn btn-primary">Check One more?</Link>
                    </div>
            </div>
            
        </div>
    )
}