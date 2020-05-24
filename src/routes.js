import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login';
import Cursos from './pages/Cursos';
import Turmas from './pages/Turmas'
import Adicionar_curso from './pages/Adicionar_curso'

const routes = () => (
    <BrowserRouter>
        
        <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/cursos" component={Cursos}></Route>
            <Route path="/curso/adicionar" component={Adicionar_curso}></Route>
            <Route path="/:curso_id/turmas" component={Turmas}></Route>
        </Switch>
    </BrowserRouter>
)

export default routes;