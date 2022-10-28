import { useEffect, useState } from 'react'

import { useDocumentTitle } from '@mantine/hooks';

import NavBar from '../components/NavBar'
import CurvedCarousel from '../components/CurvedCarousel';
import TitleBox from '../components/TitleBox';
import Info from '../components/Info/Info'
import Featured from '../components/Featured/Featured';
import ScrollParallax from '../components/ScrollParallax';

import Loading from '../components/Loading';

const HomePage = () => {

    const [loading, setLoading] = useState(true)

    const user = 'Felipe michalski';

    useDocumentTitle('Neón Infinito - Inicio')

    useEffect(() => {
        document.body.style.backgroundColor = '#081025';
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);

    if(loading) return <Loading />
    
    return (
        <>
            <NavBar user={user}/>
            <TitleBox />
            <Info />
            <Featured />
            <ScrollParallax />
            <Featured />
        </>
    )
}

export default HomePage;