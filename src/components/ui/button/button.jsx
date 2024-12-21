import style from './button.module.css'


function Button(props) {
    return (
        <div>
            <button className={style.add}>{props.value}</button>
        </div>

    )
}

export default Button;