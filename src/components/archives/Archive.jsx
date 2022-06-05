import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useContext } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DataContext } from '../../context/DataProvider';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';


const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`;



const Archive = ({note}) => {

    const { notes, setNotes,
            archiveNotes, setArchiveNotes,
            deletedNotes, setDeletedNotes } = useContext(DataContext);

    const unArchiveNote = (note) =>{
        const updatedNotes = archiveNotes.filter((item)=> item.id !== note.id);
        setArchiveNotes(updatedNotes);
        setNotes((prevArray)=>[...prevArray, note]);
    }
    
    const deleteNote = (note) =>{
        const updatedNotes = archiveNotes.filter((item)=> item.id !== note.id);
        setArchiveNotes(updatedNotes);
        setDeletedNotes((prevArray)=>[...prevArray, note])
    }
    


  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.title}</Typography>
            <Typography>{note.content}</Typography>
        </CardContent>
        <CardActions>  
            <UnarchiveOutlinedIcon 
                fontSize='small'
                style={{marginLeft:'auto'}}
                onClick={()=>{unArchiveNote(note)}}
            />
            <DeleteOutlineOutlinedIcon 
                fontSize='small'
                onClick={()=>{deleteNote(note)}}
            />
        </CardActions>
    </StyledCard>
  )
}

export default Archive;