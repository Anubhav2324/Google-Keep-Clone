import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

//components
import Form from "./Form";
import Note from './Note';

import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));


const Notes = () => {

  const { notes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ?
          <Grid container style={{ marginTop: 20 }}>
            {
              notes.map(item => (
                <Grid item>
                  <Note note={item} />
                </Grid>
              ))
            }
          </Grid>
          : <EmptyNotes />
        }
      </Box>
    </Box>
  )
}

export default Notes;