import { Grid, Image, Button, createStyles, Divider, Box, Title, UnstyledButton, Text, ActionIcon, NumberInput } from "@mantine/core";
import { useDispatch } from "react-redux"
import { addToCart, decreaseCart, removeFromCart } from '../../features/slices/cartSlice'
import { IoMdClose } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const useStyles = createStyles((theme) => ({
  column: {
    display: 'flex',
    alignItems: 'center'
  },

  category: {
    fontWeight: 600,
    opacity: .7,
    fontFamily: 'Proxima Nova'
  },

  quantityInput: {
    outline: 'none',
    cursor: 'default'
  },

  deleteButton: {
    cursor: 'default',
  },

  deleteIcon: {
    color: theme.colors.gray[7],
    cursor: 'pointer',

    '&:hover': {
      color: theme.colors.gray[5],
    }
  }
}))

function CartProduct({data}) {

  const { classes } = useStyles();

  const {id, image, name, price, cartQuantity, category} = data
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(data))
  }

  return (
    <Box mx={20}>
      <Divider color='white' my={20}/>
      <Grid>
        <Grid.Col span={1} className={classes.column}>
          <Image src={image} style={{border: '1px solid white'}}/>
        </Grid.Col>
        <Grid.Col span={3} className={classes.column} style={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <Title>{name}</Title>
          <Text color={category.color} className={classes.category}>{category.name}</Text>
        </Grid.Col>
        <Grid.Col span={3} className={classes.column} style={{justifyContent: 'center'}}>
          <ActionIcon size={42} variant="subtle" onClick={() => dispatch(decreaseCart(data))} className={classes.actionIcon}>
            <AiOutlineMinus />
          </ActionIcon>

          <Text mx={10}>
            {cartQuantity}
          </Text>

          <ActionIcon size={42} variant="subtle" onClick={() => dispatch(addToCart(data))} className={classes.actionIcon}>
            <AiOutlinePlus />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={2} className={classes.column} style={{justifyContent: 'center'}}>
          ${price}
        </Grid.Col>
        <Grid.Col span={2} className={classes.column} style={{justifyContent: 'flex-end'}}>
          <UnstyledButton className={classes.deleteButton}><IoMdClose size={25} className={classes.deleteIcon} onClick={handleClick} /></UnstyledButton>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default CartProduct