import { useContext } from "react";
import style from "./SearchBar.module.css";
import { useState, useEffect, useRef } from "react";
import { GlobalContext, ACTION_TYPES } from "../../context/GlobalContext";
const SearchBar = () => {
  const { state, dispatch, resultados } = useContext(GlobalContext);
  const [busqueda, setBusqueda] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // console.log(resultados);
    dispatch({
      type: ACTION_TYPES.GET_ALL_PRODUCTS,
      payload: resultados.filter(
        (guitarra) =>
          guitarra.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          guitarra.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      ),
    });
    
  }, [busqueda]);

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };
  return (
    <div className={style.searchBar}>
      <div className={style.ContainInput}>
        <input
          onChange={handleChange}
          placeholder="Guitarra acústica, eléctrica, criolla...	"
          className={style.inputNav}
          type="search"
          value={busqueda}
          ref={inputRef}
        />
        <button className={style.btnsearch} onClick={() => {}}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;