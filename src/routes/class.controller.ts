import {RequestHandler} from 'express'
import Clase from './Class'

export const createClass: RequestHandler= async(req,res)=>{
    const claseEncontrada = await Clase.findOne({url: req.body.url});
    if (claseEncontrada) {
        return res.status(301).json({message: 'La url ya existe, verifica tus clases'});
    }
    const clase = new Clase(req.body);
    const savedClase = await clase.save();
    res.json(savedClase);
}

export const getClass: RequestHandler= async(req,res)=>{
    try {
        const clases = await Clase.find();
        return res.json(clases);
    } catch (error) {
        res.json(error);
    }
}

export const findClass: RequestHandler= async(req,res)=>{
    const claseEncontrada = await Clase.findById(req.params.id);
    if (!claseEncontrada) {
        return res.status(204).json();
    }
    return res.json(claseEncontrada);
}

export const deleteClass: RequestHandler= async(req,res)=>{
    const claseEliminada = await Clase.findByIdAndDelete(req.params.id);
    if (!claseEliminada) {
        return res.status(204).json();
    }
    return res.json(claseEliminada);
}

export const updateClass: RequestHandler= async(req,res)=>{
    const claseActualizada = await Clase.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if (!claseActualizada) {
        return res.status(204).json();
    }
    res.json(claseActualizada);
}