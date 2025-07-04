import React from 'react'
import access1 from '../Images/filters-tech-image.png'
import tech2 from '../Images/tech2.png'
import {Link} from 'react-router-dom'
import pic2 from '../Images/BDMB050A.png'
import pic3 from '../Images/PAMB190A.png'
import pic4 from '../Images/BNWLL068A.png'
import pic5 from '../Images/pic5.png'
import pic6 from '../Images/pic6.png'
import pic7 from '../Images/pic7.png'
import pic8 from '../Images/pic8.png'
const Technology = () => {
  return (
    <div>
      <div style={{color:"black",padding:"20px",textAlign:"left",backgroundColor:'rgba(248, 243, 235, 0.2)',marginTop:"10px",marginBottom:"10px"}}>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-3'>
                <h1 style={{lineHeight:"50px"}}><b>Nano Zero filter technology</b></h1>
                <h5 style={{lineHeight:"30px"}}>A new age of filtration is here. Enjoy crisp drinking water at home and on the go.</h5>
            </div>
            <div className='col-5' style={{marginLeft:"-20px",marginTop:"50px"}}><img src={access1} width={300} alt='tech'></img></div>
            <br></br><br></br>
            <div className='col-3' style={{position:"relative",top:"-350px",marginLeft:"800px"}}>
                <h5><b>Pure-tasting water</b></h5>
                <h6 style={{lineHeight:"30px"}}>Pure-tasting water provides better-tasting coffee, tea, smoothies—everything—for a healthier, more sustainable lifestyle. Don’t settle for anything less.</h6>
            </div>
        </div>
        <div className='row' style={{marginTop:"-250px"}}>
             <div className='col-1'></div>
            <div className='col-3'>
                <h5 style={{lineHeight:"50px"}}><b>Filtration for all</b></h5>
                <h6 style={{lineHeight:"30px"}}>A new age of filtration is here. Enjoy crisp drinking water at home and on the go.</h6>
            </div>
        </div>
      </div>
      <div className='container' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
          <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic2} width={200} style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Bottle PureVis™2</p>
          </Link>
          <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic6} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Bottle Filter Straw</p>
          </Link>
          <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic3} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Pitcher</p>
          </Link>
           <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic4} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Bottle Filtered Swig</p>
          </Link>
           <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic5} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Bottle Filtered Flip</p>
          </Link>
           
        </div>
       <div style={{color:"black",padding:"20px",textAlign:"left",backgroundColor:'rgba(255, 250, 241, 0.4)',marginTop:"10px",marginBottom:"10px"}}>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-3'>
                <h1 style={{lineHeight:"50px"}}><b>PureVis™ technology</b></h1>
                <h5 style={{lineHeight:"30px"}}>Proprietary PureVis™ technology improves the quality of your water at home and on the go.</h5>
            </div>
            <div className='col-5' style={{position:"relative",top:"150px",left:"50px"}}><img src={tech2} width={300} alt='tech'></img></div>
            <br></br><br></br>
            <div className='col-3' style={{position:"relative",top:"-350px",marginLeft:"800px"}}>
                <h5><b>Brilliantly clean</b></h5>
                <h6 style={{lineHeight:"30px"}}>PureVis™ activates at the touch or self-cleans in the background to help keep your water cleaner.</h6>
            </div>
        </div>
        
        <div className='row' style={{position:"relative"}}>
             <div className='col-1'></div>
            <div className='col-3'>
                <h5 style={{lineHeight:"50px"}}><b>Chemical free</b></h5>
                <h6 style={{lineHeight:"30px"}}>Non-toxic way to clean your water and bottle.</h6>
            </div>
        </div>
      </div>
            <div className='container' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>

      <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic6} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Bottle Filter Straw</p>
          </Link>
           <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic7} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Bottle Filtered Cap</p>
          </Link>
           <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic8} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ pitcher filters</p>
          </Link>
          <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic2} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ pitcher filters</p>
          </Link>
          <Link style={{ position:"relative",textDecoration:"none",color:"black"}}>
          <img src={pic4} width={200}style={{border:"1px solid black"}} alt='tech'></img>
          <p style={{padding:"10px"}}>LARQ Bottle Filtered Swig</p>
          </Link>
          </div>
    </div>
  )
}

export default Technology
