import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { FormSubmit } from './components/Form/Form';
import { FirstNumbersCard } from './components/FirstNumbers/FirstNumbers';
import { SecondNumbersCard } from './components/SecondNumbers/SecondNumbers';
import { ThirdNumbersCard } from './components/ThirdNumbers/ThirdNumbers';
import { FourthNumbersCard } from './components/FourthNumbers/FourthNumbers';
import { CardHolderName } from './components/CardHolder/CardHolder';
import { MonthCardNum } from './components/MonthCard/MonthCard';
import { CvcCardNumber } from './components/CvcCard/CvcCard';





const CardContent = () => {
  const [value, setValue] = useState({
    name: "",
    card: "",
    dateNum: "",
    yearNum: "",
    cvcNum: "",
  });
  
  const [delimiter, setDelimiter] = useState('');
  

  const firstNumbers = value.card.split('').slice(0, 4).map((item) => Number(item));
  const secondNumbers = value.card.split('').slice(4, 8).map((item) => Number(item));
  const thirdNumbers = value.card.split('').slice(8, 12).map((item) => Number(item));
  const fourthNumbers = value.card.split('').slice(12, 16).map((item) => Number(item));

return (
   <Box display='flex' justifyContent='center'>
    <Box sx={{ 
      boxShadow: 1,
      width: '1000px',
      height: '600px',
      mt: '60px'
    }}>
      <Box sx={{
        border: '1px solid none',
        width: '35%',
        height: '100%',
        background: 'linear-gradient(45deg, #191970 0%, #800080 80%);',
        position: 'relative'
        
      }}>
        <Card variant='outlined' sx={{
          width: '325px',
          height: '185px',
          background: 'linear-gradient(45deg, #4158d0 0%, #c850c0 80%);',
          position: 'absolute',
          top: '15%',
          left: '90px',
          borderRadius: 2
      }}>
        <Box display='flex' gap='10px'>
         <Box sx={{
            border: '1px solid none',
            width: '35px',
            height: '35px',
            mt: '15px',
            ml: '12px',
            borderRadius: '50%',
            bgcolor: 'white'
         }}>
         </Box>
         <Box sx={{
            border: '1px solid white',
            width: '17px',
            height: '17px',
            borderRadius: '50%',
            mt: '23px'
          }}>
         </Box>
        </Box>
      <Box display='flex' gap='10px' justifyContent='center' mt='50px' color='white'>
         <FirstNumbersCard numbers={firstNumbers}/>
       <Box display='flex' gap='3px'>
         <SecondNumbersCard numbers={secondNumbers} />
       </Box>
       <Box display='flex' gap='3px'>
         <ThirdNumbersCard numbers={thirdNumbers}/>
       </Box>
       <Box display='flex' gap='3px'>
         <FourthNumbersCard numbers={fourthNumbers}/>
       </Box>
      </Box>
      <Box display='flex' gap='145px' pt='15px' color='white'>
         <CardHolderName name={value.name}/>
         <MonthCardNum dateNum={value.dateNum} yearNum={value.yearNum} delimiter={delimiter}/>
      </Box>
      </Card>
      <Card variant='outlined' sx={{
          width: '325px',
          height: '185px',
          background: '#C0C0C0',
          position: 'absolute',
          top: '51%',
          left: '140px',
          borderRadius: 2
      }}>
        <Box border='1px solid' height='35px' bgcolor='black' mt='12px' sx={{
          opacity: 0.8
        }}>
        </Box>
        <Box border='1px solid none' height='30px' bgcolor='#808080' mt='17px' ml='30px' mr='30px' sx={{
          borderRadius: 1
        }}>
        <Box display='flex' gap='1px' justifyContent='right' pt='3px' pr='10px' color='white'>
          <CvcCardNumber cvcNum={value.cvcNum}/>
        </Box>
        </Box>
       </Card>
       <FormSubmit setValue={setValue} setDelimiter={setDelimiter}/>
      </Box>
    </Box>
  </Box>
  );
}

export default CardContent;
