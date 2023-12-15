import {Link} from "react-router-dom";
import style from "./Desc.module.css"

function Desc(){
    return(
        <div className={style.pai}>
            <div className={style.main}>
                <h1>Como funciona?</h1>
                <p>
                    O Discover Universe são como olhos que nos permitem ver o que não podemos ver a olho nu.
                    <br />
                    -Para usar o site, basta digitar uma palavra ou frase na barra de pesquisa. Por exemplo, se você digitar "planet", o site mostrará imagens de planetas tiradas pela NASA, e ao clicar temos uma descrição contando mais sobre!
                    <br />
                    -Se lembre que as informações precisam ser buscadas em inglês.
                    <br />
                    -Uma dica de ouro! Para melhorar seu resultado busque utilizando palavras-chave.
                    <br />
                    -O site de imagens da NASA é uma ferramenta educacional valiosa que pode ajudar você a aprender sobre o universo.
                </p>
                <h2>
                    Boa sorte na exploração!
                </h2>
            </div>
            <div className={style.direita}>
                <div>
                    <img src={"/AtroComFugueti.svg"} />
                </div>
                <div className={style.btn}>
                    <Link to={"/explorar"}>
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                            <span>Ir explorar</span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Desc