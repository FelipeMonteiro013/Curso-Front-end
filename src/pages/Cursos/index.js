import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import './styles.css';
import {useHistory} from 'react-router-dom';

const name = localStorage.getItem('employee_name');


export default function Cursos(){
    const employee_id = localStorage.getItem('employee_id');
    const [cursos, setCursos] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        api.get('cursos',{
            headers:{
                Authorization: employee_id,
            }
        }).then(response => {
            setCursos(response.data)
        })
    },[employee_id])

    async function handleDeleteCurso(id){
        
        try {
            await api.delete(`cursos/${id}`,{
                headers: {
                    Authorization: employee_id
                }
            });

            setCursos(cursos.filter(curso => curso.id !== id))
        } catch (error) {
            alert('Erro ao apagar')
        }
    }

    async function sendTurmas (curso_id){
        history.push(`/${curso_id}/turmas`);
    }

    async function sendAdicinarCurso(){
        history.push('/curso/adicionar');
    }

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="container">
            <header id='main-header'>
                <div className="logo">L O G O</div>
                <p>Oi {name}</p> 
                <button onClick={handleLogout}>sair</button>
            </header>
            <div className="container-course"> 
                <div className="list">
                <h1>Cursos</h1> 
                    <div className="list-header">
                        <button className="adicinar" onClick={()=> sendAdicinarCurso()}>Adicinar Curso</button>
                    </div>
                    {cursos.map(curso=>(
                        <ul key={curso.id}>
                            <div className="item-title">
                                <li >
                                    <strong>{curso.name}</strong>
                                    <p>{curso.description}</p>
                                </li>
                            </div>
                            <div className="item-options">
                                <button className="view" onClick={()=> sendTurmas(curso.id)}>Ver</button>
                                {/* <button className="edit" disabled>Editar</button> */}
                                <button className="delete" onClick={()=> handleDeleteCurso(curso.id)}>Excluir</button>
                            </div>                        
                    </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}