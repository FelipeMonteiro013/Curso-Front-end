import React from 'react';
import './styles.css';

const name = localStorage.getItem('employee_name'); 

export default function AdicionarCurso(){
    return (       
       <div className="content-addCurso">
           <header id='main-header'>Olá {name}</header>
           <h1>Adicionar Curso</h1>
           <form action="">
               <p>Nome do curso</p>
               <input type="text"/>
               <p>Descrição do curso</p>
               <textarea></textarea>
           </form>
       </div> 
    );
}