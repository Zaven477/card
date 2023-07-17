import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { IFourthNumbers } from './types';



export const FourthNumbersCard = ({numbers}: IFourthNumbers) => {
    
    return (
        <Box display='flex' gap='3px'>
          {numbers.map((item, index) => (
            <Typography key={index} fontSize='23px'>{item}</Typography>
          ))}
       </Box>
    )
}
