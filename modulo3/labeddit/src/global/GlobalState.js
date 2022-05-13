import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";
import { baseURL } from '../../constants/baseURL';


export default function GlobalState(props) {



  return (
    <GlobalContext.Provider value={{ states, setter, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
}