import { Card, createStyles, Text, Title, Box } from '@mantine/core';
import React from 'react'

const useStyles = createStyles((theme, {background}) => ({
  card: {
    fontFamily: 'Gotham',
    fontWeight: 500,
    display: 'flex',
    backgroundColor: background,
    textAlign: 'center',
    color: 'white',
    fontSize: '1.2rem',
  },

  title: {
    margin: '1rem 0',
    fontFamily: 'Gotham',
    fontSize: '20px'
  },

  description: {
    color: '#929292',
    margin: '1rem 0',
    fontSize: '15px'
  }

}));

const InfoCard = ({icon, title, description, background}) => {

  const {classes} = useStyles({background});

  return (
    <Card className={classes.card} radius='none' p='xl'>
      <div style={{margin: '1rem 0'}}>{icon}</div>
      <Box>
        <Title className={classes.title}>{title}</Title>
        <Text className={classes.description}>{description}</Text>
      </Box>
    </Card>
  )
}

export default InfoCard;