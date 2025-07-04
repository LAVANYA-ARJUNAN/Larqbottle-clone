import React from 'react'
import {Link} from "react-router-dom"
import Pic from '../Images/pic5.png'
const Footer = () => {
  return (
    <div>
        <section className=' foot' style={{ textAlign: "left", padding: "10px"}}>
          <div className='container'>
 <svg  width="100px" height="20" viewBox="0 0 85 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M74.7998 16.9523C71.0144 16.9523 67.8164 13.6743 67.8164 9.79426C67.8164 5.91404 71.0144 2.63602 74.7998 2.63602C78.5852 2.63602 81.7831 5.91404 81.7831 9.79426C81.7831 11.2661 81.3218 12.6507 80.5439 13.8033L78.4165 11.642L76.6477 13.4391L78.7948 15.6206C77.654 16.4549 76.272 16.9523 74.7998 16.9523ZM84.7023 18.0283L82.5766 15.8685C83.9015 14.2143 84.6865 12.1116 84.6865 9.79426C84.6865 4.33536 80.3436 0.0597534 74.7998 0.0597534C69.2556 0.0597534 64.9127 4.33536 64.9127 9.79426C64.9127 15.2529 69.2556 19.5288 74.7998 19.5288C77.0548 19.5288 79.1111 18.8211 80.7572 17.6143L82.9335 19.8255L84.7023 18.0283Z" fill="#153A5B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.669189 19.1244V0.462435H3.3895V16.5479H14.4834V19.1244H0.669189Z" fill="#153A5B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46.914 10.3998H52.6442C55.633 10.3998 56.6933 8.41762 56.6933 6.7196C56.6933 5.0218 55.633 3.0396 52.6442 3.0396H46.914V10.3998ZM55.8915 19.1244L51.8878 12.977H46.914V19.1244H44.1937V0.462457H52.9192C56.8037 0.462457 59.4137 2.97674 59.4137 6.7196C59.4137 9.23828 57.7643 11.3851 55.2114 12.188L54.6711 12.3583L59.339 19.1244H55.8915Z" fill="#153A5B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5083 19.1244L29.222 4.86485L34.8847 19.1244H37.9185L30.7063 1.82419C30.3621 0.998699 29.5655 0.462435 28.6831 0.462435H22.8782V0.945072C22.8782 1.99892 23.719 2.8532 24.7565 2.8532H27.4969L20.4986 19.1244H23.5083Z" fill="#153A5B"></path></svg>
  <p style={{color:"black"}}>Receive exclusive offers, hydration news, and more when you subscribe.</p>
  <form>
  <input type='email' style={{width:"1100px",borderRadius:"40px 40px",height:"40px" ,padding:"25px"}} placeholder='Enter your email'></input>
 <Link style={{float:'right',textAlign:"right" ,position:"absolute",left:"1070px",padding:"1px",textDecoration:"none",color:"black"}}>Subscribe</Link>
  </form>
  <div className='row'>
    <div className='col-2'>
      <ul style={{listStyle:"none"}}>
        <li><Link style={{textDecoration:"none",color:"black"}}>Our Story</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Contact</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>FAQ</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Find a retailer</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Wholesale</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Affiliate program</Link></li>
      </ul>
    </div>
    <div className='col-3'>
      <ul style={{listStyle:"none"}}>
        <li><Link style={{textDecoration:"none",color:"black"}}>Reviews</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Press</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>basq magazine</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Exclusive Perks</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Ambassador program</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}}>Corporate gifting</Link></li>
      </ul>
    </div>
    <div className='col-7' style={{position:"relative",left:"200px",width:"250px",top:"20px",height:"280px",backgroundImage:`url(${Pic})`,backgroundSize: "cover",
    backgroundPosition:"left",
    backgroundRepeat: "no-repeat",
    backgroundColor:"rgb(188, 200, 237)",borderRadius:"20px 20px"}}>
       <Link style={{position:"relative",top:"230px",left:"75px",color:"white",width:"100px",height:"50px"}}>Get a quote</Link>
      
    </div>
  </div>
  </div>
</section>

    </div>
  )
}

export default Footer
