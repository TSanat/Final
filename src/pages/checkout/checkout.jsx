import './checkout.modules.css';

function Checkout() {
    return(
        <div className="checkout">
            <div className="container">
                <div className="checkout__wrapper">
                    <div className="vector">
                        <img src="/src/assets/checkout__vectorLeft.svg" alt="" className="vector__image"/>
                    </div>
                    <div className="navigation">
                        <div className="text">CHECKOUT</div>
                        <div className="check__nav">
                            <div className="nav__items">INFORMATION</div>
                            <div className="nav__items">SHIPPING</div>
                            <div className="nav__items">PAYMENT</div>
                        </div>
                        <div className="otherContent">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;