import style from "./style.module.css";
import Images from '../line__images/images.jsx'
import Line from '../line/line.jsx'

function Xiv(){
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.collections}>
                    <p>XIV <br/> COLLECTIONS <br/> 23-24</p>
                </div>
                <div className={style.options}>
                    <div className={style.choose}>
                        <ul>
                            <li>(All)</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                        </ul>
                    </div>
                    <div className={style.sort}>
                        <p>Sorts(+)</p>
                    </div>
                </div>
                <Line />
                <Images />
                <div className={style.more}>
                    <p>More</p>
                    <img src="/src/assets/arraw.svg" alt="attaw" />
                </div>
            </div>
        </div>
    )
}

export default Xiv;