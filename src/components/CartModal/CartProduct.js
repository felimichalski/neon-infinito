import { Grid, Image, Button, createStyles, Divider, Box, Title, UnstyledButton } from "@mantine/core";
import { useDispatch } from "react-redux"
import { removeFromCart } from '../../features/slices/cartSlice'
import { IoMdClose } from 'react-icons/io'

const useStyles = createStyles((theme) => ({
  column: {
    display: 'flex',
    alignItems: 'center'
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

  const {id, image, title, price, cartQuantity, category} = data
  
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
        <Grid.Col span={3} className={classes.column} style={{flexDirection: 'column'}}>
          {category.name}
          <Title>{title}</Title>
        </Grid.Col>
        <Grid.Col span={3} className={classes.column} style={{justifyContent: 'center'}}>
          {cartQuantity}
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