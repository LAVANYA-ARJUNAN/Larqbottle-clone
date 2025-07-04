import React from 'react'
import { CgArrowRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Water = () => {
  return (
    <div>
      <section style={{color:"black",lineHeight:"60px",padding:"10px"}}>
        <h1>What's in your Water?</h1>
        <p>Discover the most common contaminants in your tap water and learn how they compare to critical health standards.</p>
        <input className='btn btn-light' placeholder='Enter zip code'></input> &nbsp;&nbsp;
        <button className='btn btn-primary'>Analyze<CgArrowRight /></button>
        <p><b>Enter your zip code to see the specific contaminants in your tap water,</b> how they can affect you, and how to best protect yourself and your family.</p>
        <h2>Most commonly found contaminants</h2>
        <br></br>
        <div style={{display:"flex",justifyContent:"space-around",textAlign:"left"}}>
        <div className='container col-3' style={{lineHeight:"20px",border:"2px solid darkblue",backgroundColor:"rgb(23, 44, 85)",borderRadius:"20px 20px",padding:"20px"}}>
          <Link style={{color:"white",textDecoration:"none"}}> 
          <h1>PFAS</h1>
          <p>Risk of Potential exposure</p>
          <h6>High Filter Effectivness</h6>
          <p>Very low exposure to some PFAS chemicals has been linked to cancer,thyroid disease,weakened childhood immunity and many other  health problems.</p>
          <Link>Learn more</Link>
          </Link>
          
        </div>
        <div className='container col-3' style={{lineHeight:"20px",border:"2px solid darkblue",borderRadius:"20px 20px",padding:"20px"}}>
          <Link style={{color:"rgb(23, 44, 85)",textDecoration:"none"}}> 
          <h1>Arsenic</h1>
          <p>Risk of Potential effect</p>
          <h6>Moderate Filter Effectivness</h6>
          <p>Very low exposure to some PFAS chemicals has been linked to cancer,thyroid disease,weakened childhood immunity and many other  health problems.</p>
          <Link>Learn more</Link>
          </Link>
          
        </div>
        </div>
        <br></br>
         <div style={{display:"flex",justifyContent:"space-around"}}>
        <div className='container col-3' style={{lineHeight:"20px",border:"2px solid darkblue",borderRadius:"20px 20px",textAlign:"left",padding:"20px"}}>
          <Link style={{color:"rgb(23, 44, 85)",textDecoration:"none"}}> 
          <h1>Barium</h1>
          <p>Risk of Potential exposure:Increase in blood pressure</p>
          <h6>High Filter Effectivness</h6>
          <p>Very low exposure to some PFAS chemicals has been linked to cancer,thyroid disease,weakened childhood immunity and many other  health problems.</p>
          <Link>Learn more</Link>
          </Link>
          
        </div>
        <div className='container col-3' style={{lineHeight:"20px",border:"2px solid darkblue",borderRadius:"20px 20px",textAlign:"left",padding:"20px"}}>
          <Link style={{color:"rgb(23, 44, 85)",textDecoration:"none"}}> 
          <h1>HaloAcidic</h1>
          <p>Risk of Potential effect:Increased risk of cancer</p>
          <h6>High Filter Effectivness</h6>
          <p>Very low exposure to some PFAS chemicals has been linked to cancer,thyroid disease,weakened childhood immunity and many other  health problems.</p>
          <Link>Learn more</Link>
          </Link>
          
        </div>
        </div>
        <br></br>
      </section>
    </div>
  )
}

export default Water
