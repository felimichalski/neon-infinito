import { createStyles } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const useStyles = createStyles((theme, {name}) => ({
  root: {
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: (name.toLowerCase() === 'instagram') ? 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)' : ((name.toLowerCase() === 'whatsapp')) ? '#25d366' : theme.black,
    margin: '0 1rem',
    padding: '.5rem',
    boxShadow: '0 4px 12px 3px rgba(255, 255, 255, 0.25)',
    transition: '.2s ease-out',

    '&:hover': {
      transform: 'scale(1.1) translateY(-.1rem)'
    }
  },

  icon: {
    color: theme.white,
    fontSize: (name.toLowerCase() === 'instagram') ? '23px' : '20px'
  }
}))

const Icon = ({data}) => {

  const { url, name } = data;

  const { classes } = useStyles({name})

  return (
    <a className={classes.root} target='_blank' href={url}>
      {(name.toLowerCase() === 'instagram') ? 
      <FontAwesomeIcon icon={faInstagram} className={classes.icon}/>
      :
      (name.toLowerCase() === 'whatsapp') ?
      <FontAwesomeIcon icon={faWhatsapp} className={classes.icon}/> :
      <FontAwesomeIcon icon={faTiktok} className={classes.icon}/>
      }
    </a>
  )
}
// 
export default Icon;