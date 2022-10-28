import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Indicator, createStyles, Title } from '@mantine/core';
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  
  card: {
    backgroundColor: 'transparent',
    margin: '1rem',
    fontFamily: 'Vow',
    padding: '3rem 0',
    transition: '.3s ease-in-out',

    '&:hover': {
      boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
      transform: 'scale(1.03)'
    }
  },

  imageSection: {
    padding: '10px',
    marginBottom: '1rem'
  },

  image: {
    borderRadius: '10px',
  },

  section: {
    backgroundColor: 'transparent',
    fontFamily: 'Gotham',
    fontWeight: 500,
    textAlign: 'center',
  },

  category: {
    fontFamily: 'Gotham',
    textTransform: 'uppercase',
  },

  titleSection: {
    margin: 0,
    textAlign: 'center',
  },

  title: {
    fontFamily: 'Gotham',
    color: theme.black,
    fontWeight: 600,
  },

  price: {
    color: theme.black[4],
    fontFamily: 'Gotham',
    fontWeight: 400,
    margin: '.5rem'
  }
}));

const FeaturedCard = ({data}) => {

  const navigate = useNavigate();

  const { classes } = useStyles();
  const { image, category, title, price } = data;

  const setColor = (category) => {
    switch(category){
      case 'Deportes':
        return 'blue';
      case 'Fantasía':
        return 'red';
      case 'Series':
        return 'violet';
      default: 
        return 'green';
    }
  }

  return (
    <Card className={classes.card} component={Link} to={'/product/' + title}>
      <Card.Section className={classes.imageSection}>
        <Indicator position='bottom-center' label={category} size={30} className={classes.category} color={setColor(category)} radius='3px'>
          <Image src={image} radius='md'/>
        </Indicator>
      </Card.Section>

      <Card.Section className={classes.titleSection}>
        <Title m={0} p={0} className={classes.title}>{title}</Title>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text className={classes.price}>
          ${price}
        </Text>
      </Card.Section>
    </Card>
  );
}

export default FeaturedCard;