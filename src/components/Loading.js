import { Container, Image, LoadingOverlay } from '@mantine/core';

import Loader from '../assets/loader.gif'

const Loading = () => {
    return (
        <LoadingOverlay visible='true' loader={<Image src={Loader} />} overlayColor='black'/>
    )
}

export default Loading