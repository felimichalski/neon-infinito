import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    margin: '1rem'
  },

  imageSection: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  priceSection: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const FeaturedCard = ({data}) => {
  const { classes } = useStyles();

  const { image, title, price } = data;

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt="Tesla Model S" />
      </Card.Section>

      <Card.Section className={classes.title}>
        <Title>{title}</Title>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30} className={classes.priceSection}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              ${price}
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Comprar
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default FeaturedCard;