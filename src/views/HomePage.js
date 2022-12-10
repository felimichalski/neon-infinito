import { useEffect, useState } from 'react'
import { LoadingOverlay, Image, Container } from '@mantine/core'
import { useDocumentTitle, useScrollLock } from '@mantine/hooks';
import { useSelector } from 'react-redux';

import NavBar from '../components/NavBar/NavBar'
import TitleBox from '../components/TitleBox';
import Info from '../components/Info/Info'
import Featured from '../components/Featured/Featured';
import CommentsParallax from '../components/CommentsParallax';
import Gallery from '../components/Gallery';

import Loader from '../assets/loader.gif'
import Footer from '../components/Footer/Footer';

const HomePage = () => {

    const user = undefined;

    useDocumentTitle('Neón Infinito - Inicio')
    const [scrollLocked, setScrollLocked] = useScrollLock(true);
    const [loading, setLoading] = useState(true)
    const state = useSelector((state) => state)

    useEffect(() => {
        for (const [key, data] of Object.entries(state)) {
            if(data.status !== 'success') return;
        }
        setLoading(false)
        setScrollLocked(false)
    }, [state])

    return (
        <Container fluid style={{backgroundColor: 'black'}}>
            <LoadingOverlay style={{position: 'fixed'}} visible={loading} loader={<Image src={Loader} />} overlayColor='black' overlayOpacity={1} transitionDuration={1000} zIndex={100000}/>
            <NavBar user={user} />
            <TitleBox />
            <Info />
            <Featured />
            <Gallery />
            <CommentsParallax />
            {/* <Featured /> */}
            <Footer />
        </Container>
    )
}

export default HomePage;