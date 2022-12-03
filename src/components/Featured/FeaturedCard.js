import { Card, Image, Text, Indicator, createStyles, Title, Button, Divider, Box } from '@mantine/core';
import { Link } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slices/cartSlice';

const useStyles = createStyles((theme, _, getRef) => ({
  
  card: {
    backgroundColor: 'transparent',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column'
  },

  category: {
    fontFamily: 'Gotham',
    textTransform: 'uppercase',
  },

  titleSection: {
    padding: '1rem 0 0 0',
    textAlign: 'center',
    backgroundColor: 'white'
  },

  title: {
    fontFamily: 'Lexend',
    color: theme.black,
    fontWeight: 600,
  },

  priceSection: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '0',
  },

  price: {
    color: theme.black,
    fontFamily: 'Proxima nova',
    fontSize: '1.2rem',
    color: theme.colors.gray[6]
  },

  buySection: {
    padding: '.5rem 0 1rem 0',
    backgroundColor: 'white',
    textAlign: 'center'
  },

  cartButton: {
    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.3)',
    width: '80%',

    '&:hover': {
      backgroundColor: theme.colors.gray[7]
    }
  }
}));

const FeaturedCard = ({data}) => {

  const { classes } = useStyles();
  const { id, image, category, name, price } = data;

  const dispatch = useDispatch();

  const handeClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(data))
  }

  return (
    <Card className={classes.card} component={Link} to={'/product/' + name} radius='5px'>
      <Card.Section>
          <Indicator position='bottom-start' label={category.name} size={30} className={classes.category} color={category.color} radius='none' styles={{common: {margin: 0, webkitTransform: 'none', transform: 'none', borderTopRightRadius: '5px'}}}>
            <Image src={image} styles={{root: {borderTopLeftRadius: '5px', borderTopRightRadius: '5px',}}} fit='cover'/>
          </Indicator>
      </Card.Section>

      <Card.Section className={classes.titleSection}>
        <Title m={0} p={0} className={classes.title}>{name}</Title>
      </Card.Section>

      <Card.Section className={classes.priceSection}>
        <Text className={classes.price}>
          ${price}
        </Text>
      </Card.Section>

      {/* <Card.Section px={10} py={10} style={{backgroundColor: 'white'}}>
        <Divider />
      </Card.Section> */}

      <Card.Section className={classes.buySection}>
        <Button color='dark' className={classes.cartButton} onClick={(e) => handeClick(e)} leftIcon={<MdOutlineAddShoppingCart size='1.3rem'/>}>Añadir</Button>
      </Card.Section>
    </Card>
  );
}

export default FeaturedCard;