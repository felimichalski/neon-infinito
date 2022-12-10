import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { AppWidgetSummary } from '../layout';
import { IconListDetails, IconTimeline, IconCategory, IconReceipt2 } from '@tabler/icons'

const Products = () => {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} component={RouterLink} to='all' style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Todos los productos" icon={<IconListDetails />} />
          </Grid>
          <Grid item xs={12} sm={6} component={RouterLink} to='featured' style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Destacados" color="error" icon={<IconTimeline />} />
          </Grid>
          <Grid item xs={12} sm={6} component={RouterLink} to='categories' style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Categorías" color="warning" icon={<IconCategory />} />
          </Grid>
          <Grid item xs={12} sm={6} component={RouterLink} to='price' style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Aumentar precios" color="success" icon={<IconReceipt2 />} />
          </Grid>
        </Grid>
      </Container>
    )
}

export default Products