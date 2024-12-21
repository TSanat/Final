import style from './info.module.css';
import Button from '/src/components/ui/button/buttonArrow.jsx'
import Line from "../../forMain/line/line.jsx";
function Order() {
    return (
        <div className={style.form__container}>
            <p>Contact Info</p>
            <div className={style.form__group}>
                <input type="email" id="email" name="email" placeholder="Email"/>
                <input type="tel" id="phone" name="phone" placeholder="Phone"/>
            </div>
            <Line/>
            <p>Shipping Address</p>
            <div className={style.form__row}>
                <div className={style.form__group__column}>
                    <input type="text" id="first-name" name="first-name" placeholder="First Name"/>
                    <input type="text" id="last-name" name="last-name" placeholder="Last Name"/>
                </div>

                <input type="text" id="country" name="country" placeholder="Country"/>

                <input type="text" id="state" name="state" placeholder="State / Region"/>

                <input type="text" id="address" name="address" placeholder="Address"/>

                <div className={style.form__group__column}>
                    <input type="text" id="city" name="city" placeholder="City"/>
                    <input type="text" id="postal-code" name="postal-code" placeholder="Postal Code"/>
                </div>
            </div>
            <Line/>
            <p>Payment Information</p>
            <div className={style.form__row}>
                    <input type="text" id="card-name" name="card-name" placeholder="Enter your name" required/>
                    <input type="text" id="card-number" name="card-number"
                           placeholder="Card Number(1234 5678 9012 3456)"
                           maxLength="19" required/>
                    <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" maxLength="5"
                           required/>
                    <input type="password" id="cvv" name="cvv" placeholder="CVV" maxLength="3" required/>
            </div>
            <div className={style.form__button}>
                <Button value="Pay Now"/>
            </div>
        </div>
    )
}

export default Order;