import style from "./Header.module.css"

function Header(){
    return(
        <div className={style.header}>
            <img src="/NASA_logo.svg.png" />
        </div>

    )
}

export default Header