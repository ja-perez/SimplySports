import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const About = () => {
  return (
    <Box sx={{flexGrow:1}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>About</h1>
          <p>
          According to Forbes, the Gambling industry brought in over 54.9 Billion USD in revenue during 2022. From that 54.9 billion dollars, 7.5 billion dollars was generated by sports betting alone - accounting for roughly 13.7% of the total revenue generated. In its entirety, Sports betting as a market has shown increased revenues of about 75% from 2021 to 2022 showing that more people are taking interest in sports betting. However, finding education on the topic proves to be extremely difficult. Only about 3-5% of sports bettors actually make profit off of their gambles, meaning that the general public tends to lose out. It is in the casinos and other Sports Betting franchises’ best interest to make sure that the public stays relatively uneducated about how gambling on sports actually works in order to maximize profits which inevitably hurts the consumer. We here at SimplySports aim to bridge the gap between users and statistical information in order to create a more educated gambling public. 
          </p>
          
          <h2>What we have to offer:</h2>
          <p>
          If you are someone who is very new to the concept of betting, we have a page dedicated to explaining the basic terminology surrounding sports gambling in addition to the myriad of different types of bets that are not just on whether a team wins or loses, but how many points they win by, or even if the game will end in a draw. We have a large selection of archived games that you can choose from, bet on, and hopefully get a better understanding of how the process works without losing anything of value. Simply head over to the betting lounge, pick from our database of past matches, place your bet, and see how you do. What we aim to provide is a safe and enjoyable introduction to betting, so that you do not have to risk losing your hard earned savings on something you don’t understand quite well yet. Additionally, we want to make sure that we reinforce healthy betting habits in order to protect users from the predatory practices of most other casinos and sports betting sites. 
          </p>
        </Grid>
      </Grid>
    </Box>
  )
}
