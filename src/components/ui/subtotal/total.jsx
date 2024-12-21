import style from './total.module.css';
import Line from '../../forMain/line/line.jsx';

function Total(){
    return (
        <div className={style.container}>
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
        </div>
    )
}

export default Total;