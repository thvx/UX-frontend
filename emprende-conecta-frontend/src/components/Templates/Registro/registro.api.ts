import axios, { AxiosInstance, AxiosResponse } from 'axios';

const registroApi: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/business/persona/',
});

interface Persona {
    nombres: string,
    apellidos: string,
    dni: string,
    telefono: string,
    contrasena: string,
    nuevaContrasena: string,
    correo: string,
    correoRecuperacion: string,
    direccion: string,
    tipo: number
}

export const crearPersona = (persona: Persona): Promise<AxiosResponse<Persona>> => {
    return registroApi.post<Persona>('/persona/', persona);
};