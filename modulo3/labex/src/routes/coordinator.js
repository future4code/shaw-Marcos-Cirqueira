import { useNavigate } from "react-router-dom";

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
 }
 
 export const goToLoginPage = (navigate) => {
     navigate("/login")
  }

  export const goToHomePage = (navigate) => {
    navigate(-1)
}

export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToBackHome = (navigate) => {
    navigate("/")
}
export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/:id")
}


