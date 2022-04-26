import { useNavigate } from "react-router-dom";

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
 }
 
 export const goToAdminHomePage = (navigate) => {
     navigate("/trips/application")
  }

  export const goToHomePage = (navigate) => {
    navigate(-1)
}