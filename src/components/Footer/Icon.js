import { SocialIcon } from "react-social-icons";

const Icon = ({data}) => {

    const { url, name } = data;

    return (
      <SocialIcon url={url} network={name.toLowerCase()} target='blank'/>
    )
}

export default Icon;