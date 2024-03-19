import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  NavigateBeforeIcon,
  NavigateNextIcon,
  Typography,
} from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

const Page4 = (
  <React.Fragment>
    <CardContent className={'form-field'}>
      <Grid
        container
        wrap="nowrap"
        spacing={6}
        padding={4}
        paddingTop={'28vh'}
        paddingBottom={'24vh'}
      >
        <Grid item xs>
          <Typography
            className={`${alegreya400.className} text-light-textPrimary`}
            variant="h3"
          >
            Sobre ela.........
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
)
export default function Page4Card(): JSX.Element {
  return (
    <Box>
      <Card>{Page4}</Card>
      <Grid
        container
        position={'relative'}
        top={'50px'}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <>
          <IconButton
            className={`
          btn`}
            disabled={false}
            size="large"
            href="/chapter1/page3"
          >
            <NavigateBeforeIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            className={`
          btn`}
            disabled={true}
          >
            04
          </IconButton>
          <IconButton
            className={`
          btn`}
            disabled={true}
            size="large"
            href="/"
          >
            <NavigateNextIcon fontSize="inherit" />
          </IconButton>
        </>
      </Grid>
    </Box>
  )
}
