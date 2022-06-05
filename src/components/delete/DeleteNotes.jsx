import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

//components
import DeleteNote from './DeleteNote';

import { DataContext } from '../../context/DataProvider';
import EmptyDelete from './EmptyDelete';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));


const DeleteNotes = () => {

  const { deletedNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {deletedNotes.length > 0 ?
          <Grid container style={{ marginTop: 20 }}>
            {
              deletedNotes.map(item => (
                <Grid item>
                  <DeleteNote note={item} />
                </Grid>
              ))
            }
          </Grid>
          : <EmptyDelete />
        }
      </Box>
    </Box>
  )
}

export default DeleteNotes;