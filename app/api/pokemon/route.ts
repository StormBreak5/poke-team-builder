import axios from "axios";
import { useState } from "react";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});


