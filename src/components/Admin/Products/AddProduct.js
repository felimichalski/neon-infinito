import { Container, Group, SimpleGrid, Textarea, TextInput, Title, createStyles } from "@mantine/core";
import { useForm } from '@mantine/form'
import Button from "../../../theme/overrides/Button";

const useStyles = createStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%'
    }
}))

function AddProduct() {

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            name: '',
            price: 0,
            image: '',
            category: undefined,
            description: '',
            isFeatured: false

        },
        validate: {
            name: (value) => value.length < 1 ? 'Name cannot be empty' : null,
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            message: (value) => value.length < 1 ? 'Message cannot be empty' : null
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Container fluid className={classes.root}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Title
                        order={2}
                        size="h1"
                        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
                        weight={900}
                        align="center"
                    >
                        Contact us
                    </Title>

                    <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                        <TextInput
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        styles={{
                            input: {backgroundColor: '#333333'},
                            label: {color: 'black'}
                        }}
                        {...form.getInputProps('name')}
                        />
                        <TextInput
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        styles={{
                            input: {backgroundColor: '#333333'},
                            label: {color: 'black'}
                        }}
                        {...form.getInputProps('email')}
                        />
                    </SimpleGrid>

                    <Textarea
                        mt="md"
                        label="Message"
                        placeholder="Your message"
                        maxRows={10}
                        minRows={5}
                        autosize
                        name="message"
                        styles={{
                            input: {backgroundColor: '#333333'},
                            label: {color: 'black'}
                        }}
                        {...form.getInputProps('message')}
                    />

                    <Group position="center" mt="xl">
                        <Button type="submit" size="md" styles={{ root: { backgroundColor: '#58508d' } }}>
                            Send message
                        </Button>
                    </Group>
                </form>
        </Container>
)
}

export default AddProduct;