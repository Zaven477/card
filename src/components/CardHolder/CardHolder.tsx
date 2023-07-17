import { Typography } from '@mui/material';
import { INameProps } from './types';

export const CardHolderName = ({name}: INameProps) => {
    return (
        <Typography pl='20px' fontSize='16px'>{name}</Typography>
    )
}