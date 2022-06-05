import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

//components
import Archive from './Archive';

import { DataContext } from '../../context/DataProvider';
import EmptyArchive from './EmptyArchive';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));


const Archives = () => {

  const { archiveNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ?
          <Grid container style={{ marginTop: 20 }}>
            {
              archiveNotes.map(item => (
                <Grid item>
                  <Archive note={item} />
                </Grid>
              ))
            }
          </Grid>
          : <EmptyArchive />
        }
      </Box>
    </Box>
  )
}

export default Archives;