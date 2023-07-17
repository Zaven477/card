import { Typography } from '@mui/material';
import { IMonthYearProps } from './types';


export const MonthCardNum = ({dateNum, yearNum, delimiter}: IMonthYearProps) => {
    
   return (
        <Typography fontSize='16px' pt='1px'>{dateNum}{delimiter}{yearNum}</Typography>
    )
}