//esta creando las funciones para crear y mostrar las funciones
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/chat/";

export async function getMessages() {
    try {
      const response = await axios.get(API_URL + "messages/");
      return response.data;
    } catch (error) {
      console.log("Error obteniendo mensajes", error);
    }
  }


  export async function createMessage(username, content) {
    try {
      const message = {
        username,
        content
      };
      const response = await axios.post(API_URL + "messages/create/", message);
      return response.data;
    } catch (error) {
      console.log("Error creando mensaje", error);
    }
  }