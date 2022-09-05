import React from 'react'
import { Outlet } from "react-router-dom";
import { NavBar } from './NavBar';

import styles from '../styles/HomePage.module.css'

const HomePage = () => {

    const tabs = ['Inicio', 'Catálogo', 'Proyectos', 'Nosotros']
    
    return (
        <>
            <NavBar user='Felipe Michalski' tabs={tabs}/>
            <div style={{
                backgroundColor: 'black',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div className={styles.neon}>
                    <h1>Neon</h1>
                    <span className={styles.neonIcon}>&infin;</span>
                </div>
            </div>
        </>
    )
}

export default HomePage;