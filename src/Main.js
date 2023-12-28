import React from 'react';
import { Link } from 'react-router-dom';
import mediterraneanTacos from './assets/images/mediterranean-tacos.jpg';
import greekSalad from './assets/images/greek-salad.jpg';
import bruchetta from './assets/images/bruchetta.jpg';
import lemonDessert from './assets/images/lemon-dessert.jpg';
import delivery from './assets/images/delivery.jpg';

function Main() {
    return (
        <main>
            <div className='wrapper grey'>
                <div className='content'>
                    <div className='text-content'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on tradition recipies served with a modern twist.</p>
                        <Link to='/reservations'>
                            <button className='button'>Reserve a Table</button>
                        </Link>
                    </div>
                    <div className='image-content'>
                        <img src={mediterraneanTacos} alt='An image of a hand holding four mediterranean tacos.'/>
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='specials-heading'>
                    <h3>This weeks specials!</h3>
                    <button className='button'>Online Menu</button>
                </div>
                <div className='specials-content'>
                    <div>
                        <img src={greekSalad} alt='A greek salad'/>
                        <div>
                            <h4>Greek salad</h4>
                            <p className='price'>$12.99</p>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary
                        croutons.</p>
                        <div className='delivery'>
                            <p>Order a delivery <img src={delivery} alt='An image of a bike representing food delivery'/></p>
                        </div>
                    </div>
                    <div>
                        <img src={bruchetta} alt='A bruchetta'/>
                        <div>
                            <h4>Bruchetta</h4>
                            <p className='price'>$5.99</p>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <div className='delivery'>
                            <p>Order a delivery <img src={delivery} alt='An image of a bike representing food delivery'/></p>
                        </div>
                    </div>
                    <div>
                        <img src={lemonDessert} alt='A lemon dessert'/>
                        <div>
                            <h4>Lemon Dessert</h4>
                            <p className='price'>$5.00</p>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <div className='delivery'>
                            <p>Order a delivery <img src={delivery} alt='An image of a bike representing food delivery'/></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;