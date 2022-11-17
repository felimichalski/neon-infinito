import { Card, Image, Text, Indicator, createStyles, Title, Button } from '@mantine/core';
import { Link } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const useStyles = createStyles((theme, _, getRef) => ({
  
  card: {
    backgroundColor: 'transparent',
    margin: '1rem',
  },

  category: {
    fontFamily: 'Gotham',
    textTransform: 'uppercase',
    borderBottomLeftRadius: '5px'
  },

  titleSection: {
    padding: '1rem 0 0 0',
    textAlign: 'center',
    backgroundColor: 'white'
  },

  title: {
    fontFamily: 'Proxima Nova',
    color: theme.black,
    fontWeight: 600,
  },

  priceSection: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '.5rem 0'
  },

  price: {
    color: theme.black,
    fontFamily: 'Proxima nova',
    fontWeight: 400,
    fontSize: '1.2rem'
  },

  buySection: {
    padding: '.5rem 0 2rem 0',
    backgroundColor: 'white',
    textAlign: 'center'
  },

  cartButton: {
    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.3)',

    '&:hover': {
      backgroundColor: theme.colors.gray[7]
    }
  }
}));

const FeaturedCard = ({data}) => {

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
    <Card className={classes.card} component={Link} to={'/product/' + title} radius='5px'>
      <Card.Section className={classes.imageSection}>
          <Indicator position='bottom-start' label={category} size={30} className={classes.category} color={setColor(category)} radius='none' styles={{common: {margin: 0, webkitTransform: 'none', transform: 'none', borderTopRightRadius: '5px'}}}>
            <Image src={image} styles={{root: {borderTopLeftRadius: '5px', borderTopRightRadius: '5px',}}}/>
          </Indicator>
      </Card.Section>

      <Card.Section className={classes.titleSection}>
        <Title m={0} p={0} className={classes.title}>{title}</Title>
      </Card.Section>

      <Card.Section className={classes.priceSection}>
        <Text className={classes.price}>
          ${price}
        </Text>
      </Card.Section>

      <Card.Section className={classes.buySection}>
        <Button color='dark' className={classes.cartButton} onClick={(e) => e.preventDefault()} leftIcon={<MdOutlineAddShoppingCart size='1.3rem'/>}>Añadir</Button>
      </Card.Section>
    </Card>
  );
}

export default FeaturedCard;