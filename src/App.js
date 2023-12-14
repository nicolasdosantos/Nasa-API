import './App.css';
import {useState} from "react";
import Header from "./components/Header";

function App() {
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


  return (
    <div>
        <Header></Header>
      <input type={"text"} value={valor} onChange={(e) => setValor(e.target.value)} />
      <button type={"submit"} onClick={procura}>Buscar</button>
        {erro !== null && <p>{erro}</p>}
        {busca.map((item) => (
            <div>
                <h1>{item?.data[0]?.title}</h1>
                <img src={item?.links[0]?.href} />
                <p>{item?.data[0]?.description}</p>
            </div>
        ))}

    </div>
  );
}

export default App;
