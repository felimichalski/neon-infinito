import { useEffect, useState } from 'react'
import { LoadingOverlay, Image, Divider } from '@mantine/core'
import { useDocumentTitle, useScrollLock } from '@mantine/hooks';

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
    const [loading, setLoading] = useState()
    const user = 'Felipe Michalski';

    useEffect(() => {
        document.body.style.backgroundColor = 'black'
    }, [])

    useEffect(() => {
        for(let prop in loading) {
            if(loading[prop]) {
                return;
            }
        }
        setLoading(false)
        setScrollLocked(false)
    }, [loading]);    

    return (
        <>
            <LoadingOverlay style={{position: 'fixed'}} visible={loading} loader={<Image src={Loader} />} overlayColor='black' overlayOpacity={1} transitionDuration={500} zIndex={100000}/>
            <NavBar user={user} />
            <TitleBox />
            <Info />
            <Featured />
            <Divider my='5rem' mx='25%' size='xs' color='rgba(0,0,0,.2)'/>
            <Gallery />
            <CommentsParallax />
            <Featured />
        </>
    )
}

export default HomePage;