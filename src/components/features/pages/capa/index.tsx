import { ImagemCapa } from '@/imagens'
import { Box, Card, CardContent, Grid, Typography, CardMedia } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya = Alegreya({
  weight: '700',
  subsets: ['latin'],
})

const Capa = (
  <React.Fragment>
    <CardContent className={'form-field'}>
      <Grid container justifyContent="center" alignItems="center">
        <ImagemCapa />
      </Grid>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
          <Typography
            className={`${alegreya.className} text-light-textPrimary`}
          >
            <Grid container justifyContent="center" alignItems="center">
              {' '}
              Wingrid Loraine Alvez Muniz
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
)
export default function CapaCard(): JSX.Element {
  return (
    <Box>
      <Card>{Capa}</Card>
    </Box>
  )
}
