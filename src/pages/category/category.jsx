import style from './category.module.css';
import './style.css'
import Line from "../../components/forMain/line/line.jsx";
import Images from "../../components/forMain/line__images/images.jsx";

function Category() {
    return (
        <div className={style.container}>
            <div className={style.filter}>
                <div className={style.text}>
                    <div className={style.filter__text}><p>Filters</p></div>
                </div>
                <div className={style.avility}>
                    <Line/>
                    <div className={style.option}>
                        <p>Availability</p>
                        <img src="/src/assets/closeV.svg" alt=""/>
                    </div>
                    <div className={style.filter__choose}></div>
                </div>
                <div className={style.category}>
                    <Line/>
                    <div className={style.option}>
                        <p>Category</p>
                        <img src="/src/assets/closeV.svg" alt=""/>
                    </div>
                    <div className={style.filter__choose}></div>
                </div>
                <div className={style.price__range}>
                    <Line/>
                    <div className={style.option}>
                        <p>Price Range</p>
                        <img src="/src/assets/closeV.svg" alt=""/>
                    </div>
                    <div className={style.filter__choose}></div>
                </div>
                <div className={style.collections}>
                    <Line/>
                    <div className={style.option}>
                        <p>Collections</p>
                        <img src="/src/assets/closeV.svg" alt=""/>
                    </div>
                    <div className={style.filter__choose}></div>
                </div>
                <Line/>
            </div>
            <div className={style.product}>
                <div className={style.text}>
                    <p className={style.title}>Home / Products</p>
                    <p className={style.name}>PRODUCTS</p>
                </div>
                <div className={style.search}>
                    <input type="text" className={style.search__bar} placeholder="Search"/>
                    <img src="/src/assets/search__logo.svg" alt="" className={style.search__logo}/>
                </div>
                <div className={style.images}>
                    <Images/>
                </div>
            </div>
        </div>
    )
}

export default Category;