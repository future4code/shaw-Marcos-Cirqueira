import { useNavigate } from "react-router-dom";

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
 }
 
 export const goToAdmin = (navigate) => {
     navigate("/admin/trips/list")
  }

  export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToBack = (navigate) => {
    navigate("/")
}

export const goToBackHome = (navigate) => {
    navigate("/")
}
export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToApplication = (navigate) => {
    navigate("/trips/application")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToBackList = (navigate) => {
    navigate("/trips/list")
}

export const goToAdminPa = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToDetailsTrips = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}
export const goToAdmin2= (navigate) => {
    navigate("/admin/trips/list")
}
