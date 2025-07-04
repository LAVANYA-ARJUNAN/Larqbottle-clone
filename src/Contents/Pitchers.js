import React from 'react';
import { Link } from 'react-router-dom';
import pitcher from '../Images/PAMB190A.png';
import pitcher1 from '../Images/PNAMB190B.webp';
import access1 from '../Images/access1.webp';
import access2 from '../Images/access11.webp';

const Pitchers = () => {
  const pitchers = [
    {
      id: 1,
      img: pitcher,
      title: "LARQ pitcher PureVis",
      inform: "Granite White 23 oz 34 oz",
      inform1: "Hydration tracking, Self cleaning, Filtration",
      price: "$114"
    },
    {
      id: 2,
      img: pitcher1,
      title: "LARQ Pitcher",
      inform: "Granite White 23 oz 34 oz",
      inform1: "Hydration tracking, Self cleaning, Filtration",
      price: "$114"
    }
  ];
  const Access=[
    {
        id: 1,
      img: access1,
      title: "LARQ Pitcher",
      inform: "Granite White 23 oz 34 oz",
      inform1: "Hydration tracking, Self cleaning, Filtration",
      price: "$114"
    },
    {
        id: 2,
      img: access2,
      title: "LARQ Pitcher",
      inform: "Granite White 23 oz 34 oz",
      inform1: "Hydration tracking, Self cleaning, Filtration",
      price: "$114"
    }
  ]

  return (
    <div>
      <section className='container text-dark'style={{padding:"10px",textAlign:"left"}}>
        <h1>Pitchers</h1>
        <h6>
          If you're not filtering your tap water before drinking, you might want to think twice!
          Remove lead, chlorine, and more for improved taste and health.
        </h6>
        <div className='row' style={{textAlign:"center"}}>
          {pitchers.map((pit) => (
            <div key={pit.id} className='col-lg-6 d-flex justify-content-center'>
              <div
                style={{
                  margin: '20px',
                  borderRadius: '40px',
                  backgroundColor: 'rgba(247, 230, 246, 0.42)',
                  height: '450px',
                  width: '100%',
                  maxWidth: '400px'
                }}
              >
                <Link style={{ textDecoration: 'none', color: 'black' }}>
                  <div
                    style={{
                      backgroundColor: 'aliceblue',
                      borderRadius: '40px 40px 0px 0px',
                      textAlign: 'center',
                      paddingTop: '10px'
                    }}
                  >
                    <img src={pit.img} width={300} alt={pit.title} />
                  </div>
                  <h4 className="px-3 mt-2">{pit.title}</h4>
                  <div className="px-3">{pit.inform}</div>
                  <div className="px-3">{pit.inform1}</div>
                  <div className="px-3">{pit.price}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h1>Accessories</h1>
        <h6>Customize your on-the-go hydration with accessories.</h6>
        <div className='row' style={{textAlign:"center"}}>
          {Access.map((acc) => (
            <div key={acc.id} className='col-lg-6 d-flex justify-content-center'>
              <div
                style={{
                  margin: '20px',
                  borderRadius: '40px',
                  backgroundColor: 'rgba(247, 230, 246, 0.42)',
                  height: '450px',
                  width: '100%',
                  maxWidth: '400px'
                }}
              >
                <Link style={{ textDecoration: 'none', color: 'black' }}>
                  <div
                    style={{
                      backgroundColor: 'aliceblue',
                      borderRadius: '40px 40px 0px 0px',
                      textAlign: 'center',
                      paddingTop: '10px'
                    }}
                  >
                    <img src={acc.img} width={300} alt={acc.title} />
                  </div>
                  <h4 className="px-3 mt-2">{acc.title}</h4>
                  <div className="px-3">{acc.inform}</div>
                  <div className="px-3">{acc.inform1}</div>
                  <div className="px-3">{acc.price}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pitchers;
