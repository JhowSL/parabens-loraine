import { Copyright, ProTip } from './components/feature'
import { Box, Container, Link, Typography } from './components/ui/MUI'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in JavaScript
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
