import { Card, createStyles, Text, Title } from '@mantine/core';
import React from 'react'

const useStyles = createStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    backgroundColor: 'transparent',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'white',
    fontSize: '1.2rem'
  },

  title: {
    margin: '1rem 0',
    fontWeight: 'bolder'
  },

  description: {
    color: '#929292'
  }

});

const InfoCard = ({icon, title, description}) => {

  const {classes} = useStyles();

  return (
    <Card className={classes.card}>
      <div>{icon}</div>
      <Text className={classes.title}>{title}</Text>
      <Text className={classes.description}>{description}</Text>
    </Card>
  )
}

export default InfoCard;