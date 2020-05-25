import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import {useParams} from 'react-router-dom';

export default function Turmas(){
    const [turmas, setTurmas] =  useState([]);
    const params = useParams(URLSearchParams);
    const curso_id = params.curso_id;
    
    useEffect(()=>{
        
        api.get(`/${curso_id}/turmas`,{}).then(response=>{
            setTurmas(response.data)
        })
    },[curso_id])
    // [] estava vazio

    return (
        <div className="container-turma">
            <h1>Turmas</h1>
            <div className="lista">
                {turmas.map(turma => (
                    <div key={turma.id} className="item">
                    <div className="item-conteudo">
                        <strong>{turma.name}</strong>
                        <p>{turma.day}</p>
                        <p> {turma.start_at} às {turma.end_at} </p>
                        
                    </div>
                    <div className="item-options">
                        <button>Ver</button>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}