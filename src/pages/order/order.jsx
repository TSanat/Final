import style from './order.module.css';
import Line from '/src/components/forMain/line/line.jsx'
import Images from "../../components/forMain/line__images/images.jsx";
import Button from '/src/components/ui/button/button.jsx'

function Order(){
    return (
        <div className={style.container}>
            <div className={style.title}>
                <p className={style.shopping}>SHOPPING BAG</p>
                <p className={style.favourite}>FAVOURITES</p>
            </div>

            <div className={style.order}>
                <div className={style.orderLeft}>
                    <Line/>
                    <div className={style.orderProduct}>
                        <div className={style.orderItem}>
                            <Images/>
                            <div className={style.manage}>
                                <img src="/src/assets/x.svg" alt="" className={style.exit}/>
                                <p className={style.size}>L</p>
                                <div className={style.buttons}>
                                    <button className={style.btn}>+</button>
                                    <button className={style.btn}>1</button>
                                    <button className={style.btn}>-</button>
                                </div>
                                <img src="/src/assets/change.svg" alt="" className={style.change}/>
                            </div>
                        </div>
                        <div className={style.orderItem}>
                            <Images/>
                            <div className={style.manage}>
                                <img src="/src/assets/x.svg" alt="" className={style.exit}/>
                                <p className={style.size}>L</p>
                                <div className={style.buttons}>
                                    <button className={style.btn}>+</button>
                                    <button className={style.btn}>1</button>
                                    <button className={style.btn}>-</button>
                                </div>
                                <img src="/src/assets/change.svg" alt="" className={style.change}/>
                            </div>
                        </div>

                    </div>
                    <Line/>
                </div>
                <div className={style.orderRight}>
                    <div className={style.rightWrapper}>
                        <div className={style.rightTitle}>
                            <p className={style.title}>ORDER SUMMARY</p>
                        </div>
                        <div className={style.orderPrice}>
                            <div>
                                <p>Subtotal</p>
                                <p>$180</p>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <p>$10</p>
                            </div>
                        </div>
                        <Line/>
                        <div className={style.orderTotal}>
                            <p>TOTAL (Tax incl.)</p>
                            <p>$190</p>
                        </div>
                        <div className={style.orderAgree}>
                            <input type="checkbox"/>
                            <p>I agree to the Terms and Conditions</p>
                        </div>
                        <Button value="CONTINUE"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Order;
