import {RequestHandler} from 'express'

export const createClass: RequestHandler= (req,res)=>{
    console.log(req.body);
    res.json('Video Guardado');
}

export const getClass: RequestHandler= (req,res)=>{
    res.json('Obteniendo la clase');
}

export const findClass: RequestHandler= (req,res)=>{
    res.json('Encontrando tu clase');
}

export const deleteClass: RequestHandler= (req,res)=>{
    res.json('Borrando la clase');
}

export const updateClass: RequestHandler= (req,res)=>{
    res.json('Actualizando la clase');
}