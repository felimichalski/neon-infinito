import { SimpleGrid, Container} from '@mantine/core';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdPayments } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import InfoCard from './InfoCard';
  
const mockdata = [
  {
    icon: TbTruckDelivery,
    title: 'Envíos',
  },
  {
    icon: MdPayments,
    title: 'Métodos de pago',
  },
  {
    icon: RiSecurePaymentLine,
    title: 'Compra protegida',
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