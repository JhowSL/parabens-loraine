import { Box, Container } from '@/ui'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="xs">
      <>
        <Box
          sx={{
            bgcolor: 'backgroundColor',
            position: 'relative',
            top: '30vh',
          }}
        >
          <main>{children}</main>
        </Box>
      </>
    </Container>
  )
}

export default Layout
