import style from "./Header.module.css"
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className={style.header}>
            <img src="/Nasa-gif.gif" />
            <nav className={style.nav}>
                <Link to={''}>
                    <button>
                        <i className="fa-solid fa-house"></i>          Home
                    </button>
                </Link>
                <Link to={"/desc"}>
                    <button>
                        <i className="fa-solid fa-book"></i>       Instruções
                    </button>
                </Link>
                <Link to={"/explorar"}>
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>           Explorar
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default Header