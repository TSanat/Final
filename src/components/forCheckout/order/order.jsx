import style from './order.module.css';
import Line from "../../forMain/line/line.jsx";
import Total from "../../ui/subtotal/total.jsx";
import Items from "/src/components/forCheckout/imageItem/items.jsx"

function Order() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <p>YOUR ORDER</p>
                <p className={style.see}>See all<p className={style.quantity}>(2)</p></p>
            </div>
            <div className={style.items}>
                <Items />
            </div>
            <Line/>
            <div className={style.total}>
                <Total/>
            </div>
        </div>
    )
}

export default Order;