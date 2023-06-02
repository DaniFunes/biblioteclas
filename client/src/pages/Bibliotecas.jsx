import bibliotecasServices from "../services/bibliotecasServices";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "../components/commons/Cards"
import Grid from "../components/commons/Grid"

function Bibliotecas() {
  const [bibliotecas, setBibliotecas] = useState([]);
  const navigate = useNavigate();
  console.log(bibliotecas);

  useEffect(() => {
    bibliotecasServices
      .getAllBibliotecas()
      .then(({ data }) => setBibliotecas(data))
      .catch(() => navigate(-1));
  }, []);

  return (
    <Grid/>
    
    // <>
    //   {bibliotecas.map((biblioteca) => (
    //     <div key={biblioteca._id}><p>{biblioteca.nombre}</p></div>
    //   ))}
    // </>
  //    <>
  //    {bibliotecas.map((biblioteca) => (
  //      <Cards key={biblioteca._id}></Cards>
  //    ))}
  //  </>
  );
}
export default Bibliotecas;
