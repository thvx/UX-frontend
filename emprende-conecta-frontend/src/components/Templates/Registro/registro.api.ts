import axios, { AxiosInstance, AxiosResponse } from 'axios';

const registroApi: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/business/persona/',
});

interface Persona {
    nombre: string,
    apellido: string,
    dni: string,
    telefono: string,
    password: string,
    nuevaContrasena: string,
    email: string,
    email_recuperacion: string,
    direccion: string,
    tipo: number
}

export const crearPersona = (persona: Persona): Promise<AxiosResponse<Persona>> => {
    return registroApi.post<Persona>('/persona/', persona);
};