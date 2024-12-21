import style from './info.module.css';
import Button from '/src/components/ui/button/buttonArrow.jsx'
function Order() {
    return (
        <div className={style.form__container}>
            <p>Contact Info</p>
            <div className={style.form__group}>
                <input type="email" id="email" name="email" placeholder="Email"/>
                <input type="tel" id="phone" name="phone" placeholder="Phone"/>
            </div>

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
            <div className={style.form__button}>
                <Button value="Shipping"/>
            </div>
        </div>
    )
}

export default Order;