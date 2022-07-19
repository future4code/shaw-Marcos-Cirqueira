import React, { useEffect, useState } from 'react'
import { goToDiadesorte, goToLotofacil, goToLotomania, goToMega, goToQuina, goToTimemania } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';


export const DiaDeSortePage = () => {
  const [currentPage, setCurrentPage] = useState("")
  const navigate = useNavigate()

  const onChangePage = (event) => {
    setCurrentPage(event.target.value);
  };

  useEffect(() => {
    switch (currentPage) {
      case "mega-sena":
        goToMega(navigate);
        break;
      case "quina":
        goToQuina(navigate);
        break;
      case "lotofácil":
        goToLotofacil(navigate);
        break;
      case "lotomania":
        goToLotomania(navigate);
        break;
      case "timemania":
        goToTimemania(navigate);
        break;
      default:
    }
    // eslint-disable-next-line
  }, [currentPage])

  return (
    <div>
      <select name="nome" onChange={onChangePage}>
        <option value={"diadesorte"}>DIA DE SORTE</option>
        <option value={"timemania"}>TIMEMANIA</option>
        <option value={"lotomania"}>LOTOMANIA</option>
        <option value={"lotofácil"}>LOTOFACIL</option>
        <option value={"quina"}>QUINA</option>
        <option value={"mega-sena"}>MEGA-SENA</option>
      </select>
      <p>Dia de Sorte</p>

    </div>
  )
}
