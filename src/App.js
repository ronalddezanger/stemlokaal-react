import React from 'react';
import { Anchor, Box, Footer, Grommet, Heading, Paragraph, Text } from 'grommet';
import { AppHeader } from './components/AppHeader';
import { SLCard } from './components/SLCard';
import { ElectionPoster } from './components/ElectionPoster';

const theme = {
  global: {
    colors: {
      brand: '#429EA6',
      brandred: '#ee3537',
      brandblue: '#234fa1',
      brandyellow: '#F4D35E',
      brandlemon: '#FAF0CA'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet background='#FAF0CA' theme={theme} full>
      <AppHeader />
      <Box direction='responsive-row' gap='large'>
        <Box height='small' width='large' align='left' pad='medium'>
          <Heading level='3' color="brandred" margin='none'>Actueel</Heading>
          <Paragraph>Hier komt de beschrijving van het nieuwsbericht</Paragraph>
          <Anchor label="Alle nieuwsberichten" href="#" />
        </Box>
      </Box>
      <Box align="center" pad="large" background="white">
        <Text size="xxlarge">Verkiezingen 2022</Text>
        <Box>
          <SLCard />
          <ElectionPoster /> 7572
        </Box>
        <Box>Wordt lid!</Box>
      </Box>
      <Box>
        <Footer>Footer</Footer>
      </Box>
    </Grommet>
  );
}

export default App;
