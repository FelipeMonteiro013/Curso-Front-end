import React, {useState} from 'react';
import './style.css';
import api from '../../services/api';
import {useHistory} from 'react-router-dom'

export default function Cursos(){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {user,password}

        try {
            const response = await api.post('',data)
            localStorage.setItem('employee_id',response.data.id)
            localStorage.setItem('employee_name',response.data.name)
            history.push('/cursos')
            
        } catch (err) {
            
        }
    }
   
    return (
        <div className="login-container">
            <section>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p>Usuário:</p>
                    <input
                    value={user} 
                    onChange={e=>setUser(e.target.value)}
                    />
                    <p>Senha:</p>
                    <input type="password"
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </section>
        </div>
    )
}