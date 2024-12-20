import style from './button.module.css'
import button from "bootstrap/js/src/button.js";

function Button(props) {
    return (
        <button className={style.btn}>{props.value}</button>
    )
}

export default Button;