import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

// const name = localStorage.getItem('employee_name'); 

export default function AdicionarCurso(){

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

    return (       
       <div className="content-addCurso">
           <h1>Adicionar Curso</h1>
           <form onSubmit={handleCreate}>
               <p>Nome do curso</p>
               <input required value={name} onChange={e=>{setName(e.target.value)}} />
               <p>Descrição do curso</p>
               <textarea required value={description} onChange={e=>{setDescription(e.target.value)}}></textarea>
               <button type="submit">Criar</button>
           </form>
       </div> 
    );
}