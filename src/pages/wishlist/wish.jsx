import style from './wish.module.css'
import Images from "../../components/forMain/line__images/images.jsx";

function WishList() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <p className={style.title}>Favourites</p>
                </div>
                <div className={style.images}>
                    <Images/>
                </div>
            </div>
        </div>
    )
}

export default WishList;