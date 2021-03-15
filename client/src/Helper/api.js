import axios from "axios";
export const DOMAIN_NAME = 'http://localhost:3001'


export const generalRouter = axios.create({
   baseURL: DOMAIN_NAME,
   responseType: "json",
   headers: { "Content-Type": "application/json" },
 });

 export const  CREATE_CARD = `/api/adjustCardHero`
 export const UPLOAD_IMAGE = `/api/uploadImage`
 export const DELETE_IMAGE  =`/api/deleteImage`