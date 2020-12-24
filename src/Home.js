import React from 'react';
import "./Home.css";
import Product from './Product';
import pro1 from "./media/p1.jpg";
import pro2 from "./media/p2.jpg";
import pro3 from "./media/p3.jpg";
import pro4 from "./media/p4.jpg";
import pro5 from "./media/p5.jpg";
import pro6 from "./media/p6.jpg";

window.addEventListener("load", (event) => { alert("This is an Amazon Clone Made by akhlak-hossain-jim.github.io/ for education Purpose only.")});

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="" />
                
                <div className="home__row">
                    <Product title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)" price={149} image={pro1} rating={5} id="20201" />
                    <Product title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack" price={15} image={pro2} rating={4} id="20202" />
                </div>

                <div className="home__row">
                    <Product title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)" price={108} image={pro3} rating={5} id="20203" />
                    <Product title="Xbox Core Controller - Robot White" price={59} image={pro4} rating={4} id="20204"  />
                    <Product title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case Included), Black – US Version" price={109} image={pro5} rating={5} id="20205"  />
                </div>

                <div className="home__row">
                    <Product title="Nintendo Switch Pro Controller" price={108} image={pro6} rating={5} id="20206"  />
                </div>
            </div>
        </div>
    )
}

export default Home
