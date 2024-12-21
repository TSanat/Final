import style from './items.module.css';

function Items(){
    return (
        <div className={style.arrayOfItem}>
            <div className={style.items}>
                <div className={style.image}>

                </div>
                <div className={style.text}>
                    <div className={style.desc}>
                        <p>Basic Heavy T-shirt</p>
                        <u>Change</u>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.quantity}>(1)</p>
                        <p className={style.price}>$99</p>
                    </div>
                </div>
            </div>
            <div className={style.items}>
                <div className={style.image}>

                </div>
                <div className={style.text}>
                    <div className={style.desc}>
                        <p>Basic Heavy T-shirt</p>
                        <u>Change</u>
                    </div>
                    <div className={style.bottom}>
                        <p className={style.quantity}>(1)</p>
                        <p className={style.price}>$99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items;