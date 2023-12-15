import {useState} from "react";
import style from "./Main.module.css"
import Swal from 'sweetalert2'


function Main(){

    const [busca, setBusca] = useState([])
    const [erro , setErro] = useState(null)
    const [valor, setValor] = useState("")
    // + valor
    async function procura(){
        let url = "https://images-api.nasa.gov/search?q=" + valor
        try{
            let resposta1 = await fetch(url)

            resposta1 = await resposta1.json()

            console.log(resposta1.collection.items)

            if(resposta1.collection.items.length > 0) {
                setBusca(resposta1.collection.items)
            }
            else {
                setErro("Não encontrado")
            }


        }
        catch(error){
            console.log(error)
            setErro(error)
        }


    }

    function exibeAleta(titulo = "titulo", descricao = "descricao") {
        Swal.fire({
            title: titulo,
            text: descricao
        })
    }


    return(
        <div className={style.banner}>
            <div className={style.titulo}>
                <h2>Discover Universe </h2>
            </div>
            <div >
                <input type={"text"} value={valor} onChange={(e) => setValor(e.target.value)} />
                <button type={"submit"} onClick={procura}>Buscar</button>
                <div className={style.erro}>
                    {erro !== null && <p>{erro}</p>}
                </div>
                <div className={style.lista}>
                    {busca.map((item) => (
                        <div className={style.procura} onClick={() => exibeAleta(item?.data[0]?.title, item?.data[0]?.description)}>
                            <div className={style.listaImg} style={{backgroundImage: "url(" + item?.links[0]?.href + ")"}}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main