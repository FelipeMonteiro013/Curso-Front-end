import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import {useParams, Link, useHistory} from 'react-router-dom';

const name = localStorage.getItem('employee_name');

export default function Turmas(){
    const [turmas, setTurmas] =  useState([]);
    const params = useParams(URLSearchParams);
    const curso_id = params.curso_id;
    const history = useHistory();
    
    useEffect(()=>{
        
        api.get(`/${curso_id}/turmas`,{}).then(response=>{
            setTurmas(response.data)
        })
    },[curso_id])
    // [] estava vazio

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="container">
            <header id='main-header'>
                <Link to="/cursos">
                    <div className="logo">L O G O</div>
                </Link>
                <p>Olá {name}</p> 
                <button onClick={handleLogout}>sair</button>
            </header>
            <h1>Turmas</h1>
            <div className="voltar">
                <Link to="#" className="adicinar">
                    Adicionar turma
                </Link>
                <Link to="/cursos" className="back-button">
                    Voltar
                </Link>
            </div>
            <div className="container-turma">
                <div className="list-class">
                    {turmas.map(turma => (
                        <div key={turma.id} className="item">
                        <div className="item-conteudo">
                            <strong>{turma.name}</strong>
                            <p>{turma.teacher_id}</p>
                            <p>{turma.day}</p>
                            <p> {turma.start_at} às {turma.end_at} </p>
                            
                        </div>
                        <div className="item-options-class">
                            <button className="view">Ver</button>
                            <button className="edit">Editar</button> 
                            <button className="delete">Excluir</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}