import { Box, Card, CardContent, Grid, Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

const Introduction = (
  <React.Fragment>
    <CardContent className={'form-field'}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
          <Typography
            className={`${alegreya.className} text-light-textSecondary`}
          >
            É 21 da Loraine eu tentei fazer algo diferente sem ajuda do GPT
            queria fazer algo criativo e autêntico né e que só uma pequena
            introdução de uma pequena história do que eu quero contar e eu
            espero que você goste é confesso que eu estou um pouco nervoso sim
            fazendo isso, mas tentei trazer um pouco do que eu amo de uma forma
            que fique divertida então vamos lá...
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
)
export default function IntroductionCard(): JSX.Element {
  return (
    <Box>
      <Card>{Introduction}</Card>
    </Box>
  )
}
