import { IFirstNumbers } from "./types";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const FirstNumbersCard = ({numbers}: IFirstNumbers) => {
    
    return (
        <Box display='flex' gap='3px'>
          {numbers.map((item, index) => (
            <Typography key={index} fontSize='23px'>{item}</Typography>
          ))}
       </Box>
    )
}