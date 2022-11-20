import { useEffect, useState } from 'react'
import { LoadingOverlay, Image } from '@mantine/core'
import { useDocumentTitle, useScrollLock } from '@mantine/hooks';
import { useSelector } from 'react-redux';

import NavBar from '../components/NavBar'
import TitleBox from '../components/TitleBox';
import Info from '../components/Info/Info'
import Featured from '../components/Featured/Featured';
import CommentsParallax from '../components/CommentsParallax';
import Gallery from '../components/Gallery';

import Loader from '../assets/loader.gif'

const HomePage = () => {

    useDocumentTitle('Neón Infinito - Inicio')
    const [scrollLocked, setScrollLocked] = useScrollLock(true);
    const [loading, setLoading] = useState(true)
    const user = 'Felipe Michalski';
    const state = useSelector((state) => state)

    useEffect(() => {
        document.body.style.backgroundColor = 'black'
    }, [])

    useEffect(() => {
        for (const [key, data] of Object.entries(state)) {
            if(data.status !== 'success') return;
        }
        setLoading(false)
        setScrollLocked(false)
    }, [state])

    return (
        <>
            <LoadingOverlay style={{position: 'fixed'}} visible={loading} loader={<Image src={Loader} />} overlayColor='black' overlayOpacity={1} transitionDuration={1000} zIndex={100000}/>
            <NavBar user={user} />
            <TitleBox />
            <Info />
            <Featured />
            <Gallery />
            <CommentsParallax />
            <Featured />
        </>
    )
}

export default HomePage;