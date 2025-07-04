import React from 'react'
import { Link } from 'react-router-dom'
// import {HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import pic1 from '../Images/black.png'
import pic2 from '../Images/BDMB050A.png'
import pic3 from '../Images/PAMB190A.png'
import pic4 from '../Images/BNWLL068A.png'
import pic5 from '../Images/pic5.png'
import pic6 from '../Images/pic6.png'
import pic7 from '../Images/pic7.png'
import pic8 from '../Images/pic8.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../Redux/CartSlice';

const Bottles1 = () => {

    const cartProduct = useSelector((state)=>state.mycart.cartItem)

    const dispatch=useDispatch()

    const addCart=(product)=>{
        dispatch(addToCart(product))
    }

    const deleteCart=(product)=>{
        dispatch(deleteFromCart(product))
    }
    
   const botle=[
              {
                  id:1,
                  img:pic1,
                  title:"LARQ Bottle PureVis™ 2",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$114"
              },
              {
                  id:2,
                  img:pic2,
                  title:"LARQ Bottle PureVis™",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$114"
              },
              {
                  id:3,
                  img:pic3,
                  title:"LARQ Bottle Movement PureVis™ 2",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$129"
              },
              {
                  id:4,
                  img:pic4,
                  title:"LARQ Pitcher PureVis™ 2",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$114"
              },
              {
                  id:5,
                  img:pic5,
                  title:"LARQ Bottle Flitered PureVis™ 2",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$129"
              },
          ]
          const bot=[
               {
                  id:1,
                  img:pic6,
                  title:"LARQ Bottle Swig PureVis™ 2",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$114"
              },
              {
                  id:2,
                  img:pic7,
                  title:"Pitcher",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$114"
              },
              {
                  id:3,
                  img:pic8,
                  title:"LARQ Bottle Movement",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$129"
              },
              {
                  id:4,
                  img:pic2,
                  title:"LARQ Bottle Filtered PureVis™ 2",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$114"
              },
              {
                  id:5,
                  img:pic1,
                  title:"LARQ Bottle Flip Top",
                  inform:"Granite White 23 oz 34 oz",
                  inform1:"Hydration tracking, Self cleaning, Filtration",
                  price:"$129"
              },
          ]
  return (
    <div >
      <section className='container' style={{color:"black"}}>
        <h1 style={{textAlign:"left",padding:"20px"}}>Bottles</h1>
        <h5 style={{textAlign:"left",margin:"20px"}}>Haven't found your emotional support water bottle yet? Browse water bottles that fit your needs here.</h5>
        <div className="row " style={{textAlign:"center"}}>
                        <div className='col-6'>
                        {
                            botle.map((product)=>(
                                <div key={product.id} className='col-lg-12'style={{margin:"30px 30px",borderRadius:"40px 40px",backgroundColor:"rgba(247, 230, 246, 0.42)",height:"450px",width:"400px"}}>
                                 <Link style={{textDecoration:'none',color:"black"}}>   <div style={{backgroundColor:"aliceblue",borderRadius:"40px 40px 0px 0px"}}><img src={product.img} width={300} alt='bottle'></img></div>
                                    <h4>{product.title}</h4>
                                    <h6 >{product.inform}</h6>
                                    <h6 >{product.inform1}</h6>
                                    <h6>{product.price}</h6>
                                
                                    </Link>
                                   {
                                    cartProduct.find((items)=>items.id === product.id)?
                                    <button onClick={()=>deleteCart(product)}>Added TO cart</button>:
                                    <button onClick={()=>addCart(product)}>Add to cart</button>
                                   }
                                </div>
                            ))
                        }
                        </div>
                        <div className='col-6'>
                        {
                            bot.map((products)=>(
                                <div key={products.id} className='col-lg-12'style={{margin:"30px 30px",borderRadius:"40px 40px",backgroundColor:"rgba(247, 230, 246, 0.42)",height:"450px",width:"400px"}} >
                                  <Link style={{textDecoration:'none',color:"black"}}>  <div style={{backgroundColor:"aliceblue" ,borderRadius:"40px 40px 0px 0px"}}><img src={products.img} width={300} alt='bot'></img></div>
                                    <h4 >{products.title}</h4>
                                    <h6 >{products.inform}</h6>
                                    <h6 >{products.inform1}</h6>
                                    <h6>{products.price}</h6>
                                    </Link>
                                </div>
                            ))
                        }
                        </div>
                        </div>
      </section>
    </div>
  )
}

export default Bottles1
