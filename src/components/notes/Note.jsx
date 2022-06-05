import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useContext } from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DataContext } from '../../context/DataProvider';


const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`;
const TitleTypography = styled(Typography)`
    font-weight: bold;

`;



const Note = ({note}) => {

    const { notes, setNotes,
            archiveNotes, setArchiveNotes,
            deletedNotes, setDeletedNotes } = useContext(DataContext);

    const archiveNote = (note) =>{
        const updatedNotes = notes.filter((item)=> item.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes((prevArray)=>[...prevArray, note]);
    }
    
    const deleteNote = (note) =>{
        const updatedNotes = notes.filter((item)=> item.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes((prevArray)=>[...prevArray, note])
    }
    


  return (
    <StyledCard>
        <CardContent>
            <TitleTypography>{note.title}</TitleTypography>
            <Typography>{note.content}</Typography>
        </CardContent>
        <CardActions>  
            <ArchiveOutlinedIcon 
                fontSize='small'
                style={{marginLeft:'auto'}}
                onClick={()=>{archiveNote(note)}}
            />
            <DeleteOutlineOutlinedIcon 
                fontSize='small'
                onClick={()=>{deleteNote(note)}}
            />
        </CardActions>
    </StyledCard>
  )
}

export default Note;