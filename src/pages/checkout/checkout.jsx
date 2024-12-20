import style from './checkout.module.css';
import Info from '/src/components/forCheckout/info/info.jsx';
import Order from "/src/components/forCheckout/order/order.jsx";

function Checkout() {
    return(
        <div className={style.checkout}>
            <div className={style.container}>
                <div className={style.checkout__wrapper}>
                    <div className={style.vector}>
                        <img src="/src/assets/checkout__vectorLeft.svg" alt="" className={style.vector__image}/>
                    </div>
                    <div className={style.navigation}>
                        <div className={style.text}>CHECKOUT</div>
                        <div className={style.check__nav}>
                            <div className={style.nav__items}>INFORMATION</div>
                            <div className={style.nav__items}>SHIPPING</div>
                            <div className={style.nav__items}>PAYMENT</div>
                        </div>
                    </div>
                    <div className={style.content}>
                            <Info />
                            <Order />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;