import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import RestoreFromTrashOutlined from '@mui/icons-material/RestoreFromTrashOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`;



const DeleteNote = ({note}) => {

    const { notes, setNotes,
            archiveNotes, setArchiveNotes,
            deletedNotes, setDeletedNotes } = useContext(DataContext);

    const restoreNote = (note) =>{
        const updatedNotes = deletedNotes.filter((item)=> item.id !== note.id);
        setDeletedNotes(updatedNotes);
        setNotes((prevArray)=>[...prevArray, note]);
    }
    
    const deleteNote = (note) =>{
        const updatedNotes = deletedNotes.filter((item)=> item.id !== note.id);
        setDeletedNotes(updatedNotes);
    }
    


  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.title}</Typography>
            <Typography>{note.content}</Typography>
        </CardContent>
        <CardActions>  
            <RestoreFromTrashOutlined 
                fontSize='small'
                style={{marginLeft:'auto'}}
                onClick={()=>{restoreNote(note)}}
            />
            <DeleteForeverOutlinedIcon 
                fontSize='small'
                onClick={()=>{deleteNote(note)}}
            />
        </CardActions>
    </StyledCard>
  )
}

export default DeleteNote;