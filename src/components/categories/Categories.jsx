import Card from '../card/Card';
import './categories.css'
import cat01 from './../../img/categories/cat-01.jpg'
import cat02 from './../../img/categories/cat-02.jpg'
import cat03 from './../../img/categories/cat-03.jpg'
import cat04 from './../../img/images/promo-01.jpg'

function Categories () {
    return (
        <div className="categories">
            <h2 className="section-title elipse--title">NEW ARRIVALS</h2>
            <div className="categories__wrapper">
                <div className="categories__cards">
                    <a href="#"><Card img={cat01} title='Hoodies & Sweetshirt' text='Explore Now!'/></a>
                    <a href="#"><Card img={cat02} title='Hoodies & Sweetshirt' text='Explore Now!'/></a>
                    <a href="#"><Card img={cat03} title='Hoodies & Sweetshirt' text='Explore Now!'/></a>
                </div>
            </div>
        </div>
    )
}

export default Categories;