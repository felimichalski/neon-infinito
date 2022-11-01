import { useEffect, useState } from 'react'
import { LoadingOverlay, Image, Divider } from '@mantine/core'
import { useDocumentTitle, useScrollLock } from '@mantine/hooks';

import NavBar from '../components/NavBar'
import CurvedCarousel from '../components/CurvedCarousel';
import TitleBox from '../components/TitleBox';
import Info from '../components/Info/Info'
import Featured from '../components/Featured/Featured';
import ScrollParallax from '../components/ScrollParallax';

import Loader from '../assets/loader.gif'

const HomePage = () => {

    useDocumentTitle('Neón Infinito - Inicio')
    const [scrollLocked, setScrollLocked] = useScrollLock(true);
    const [loading, setLoading] = useState()
    const user = 'Felipe Michalski';

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
            <NavBar user={user} load={loading} setLoading={setLoading}/>
            <TitleBox load={loading} setLoading={setLoading}/>
            <Info load={loading} setLoading={setLoading}/>
            <Featured load={loading} setLoading={setLoading}/>
            <Divider my='md' mx='20%' size='xs' color='rgba(0,0,0,.4)'/>
            <ScrollParallax />
            <Featured />
        </>
    )
}

export default HomePage;