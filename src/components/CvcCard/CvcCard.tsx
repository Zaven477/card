import { Typography } from '@mui/material';
import { ICvcProps } from './types';



export const CvcCardNumber = ({cvcNum}: ICvcProps) => {

    return (
        <Typography>{cvcNum}</Typography>
    )
}