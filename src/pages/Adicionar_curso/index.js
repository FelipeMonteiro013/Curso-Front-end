import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
import {useHistory, useParams, Link} from 'react-router-dom';

const employee_name = localStorage.getItem('employee_name'); 


export default function AdicionarCurso(){

    const params = useParams(URLSearchParams);
    const course_id = params.course_id;

    if(course_id == null){
        alert('null');
    }else{
        async function teste(){
            const response = await api.get(`/cursos/${course_id}`)
        console.log(response);
        }
    }
    

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    async function handleCreate(e){
        e.preventDefault();
        const employee_id = localStorage.getItem('employee_id')
        
        const data = {name, description, employee_id}

        try {
            await api.post('/cursos',  data);
            alert('Curso criado com sucesso !');
            history.push('/cursos');
            
        } catch (error) {
            
        }
    }

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
                <p>Olá {employee_name}</p> 
                <button onClick={handleLogout}>sair</button>
            </header>
            <h1>Adicionar Curso</h1>
            <div className="voltar">
                <Link to="/cursos" className="back-button">
                    Voltar
                </Link>
            </div>
            <div className="content-addCurso">
                <form onSubmit={handleCreate}>
                    <p>Nome do curso</p>
                    <input required value={name} onChange={e=>{setName(e.target.value)}} />
                    <p>Descrição do curso</p>
                    <textarea required value={description} onChange={e=>{setDescription(e.target.value)}}></textarea>
                    <button className="adicinar" type="submit">Salvar</button>
                </form>
            </div> 
        </div>
    );
}