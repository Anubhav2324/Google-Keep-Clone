import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, styled, Typography } from '@mui/material';

const Light = styled(DeleteOutlineOutlinedIcon)`
    font-size: 120px;
    color: #f5f5f5;

`;

const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px;
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
`;

const EmptyDelete = () => {
  return (
    <Container>
        <Light />
        <Text>No notes in Trash</Text>
    </Container>
  )
}

export default EmptyDelete