import { createStyles, Card, Text, Title} from "@mantine/core";

const useStyles = createStyles((theme) => ({  
    card: {
        backgroundColor: 'rgba(255, 255, 255, .8)',
        backdropFilter: 'saturate(200%) blur(30px)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.3)',
        zIndex: 100
    },
  
    cardTitle: {
        fontFamily: 'Proxima Nova',
        fontSize: '1.5rem',
        color: 'rgba(0, 0, 0, .7)',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
        },
    },

    cardDescription: {
        fontFamily: 'Proxima Nova',
        color: 'rgba(0, 0, 0, .3)',
        fontWeight: 600
    }
  }));

const InfoCard = ({info}) => {

    const data = info;
    const { classes, theme } = useStyles();
    
    return (
        <Card shadow="md" radius="md" className={classes.card} p="xl">
            <data.icon size='5rem' color={theme.fn.primaryColor()} />
            <Title className={classes.cardTitle} mt="md">
                {data.title}
            </Title>
            <Text className={classes.cardDescription} mt="sm">
                {data.description}
            </Text>
        </Card>
    )
}

export default InfoCard;