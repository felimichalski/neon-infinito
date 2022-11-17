import { SimpleGrid, Container} from '@mantine/core';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdPayments } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import InfoCard from './InfoCard';
  
const mockdata = [
  {
    icon: TbTruckDelivery,
    title: 'Envíos',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
  },
  {
    icon: MdPayments,
    title: 'Métodos de pago',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
  },
  {
    icon: RiSecurePaymentLine,
    title: 'Compra protegida',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
  },
];

const Info = () => {
  const info = mockdata.map((info, key) => (
    <InfoCard key={key} info={info}/>
  ));
  return (
    <Container size="xl" mt={-40} fluid>
      <SimpleGrid cols={3} spacing={50} mx={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {info}
      </SimpleGrid>
    </Container>
  );
}

export default Info;