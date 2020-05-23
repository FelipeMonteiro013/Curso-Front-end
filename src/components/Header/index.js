import React from 'react';
import './styles.css';

const name = localStorage.getItem('employee_name');

const Header = () => (
<header id='main-header'>Olá {name}</header>
)

export default Header;