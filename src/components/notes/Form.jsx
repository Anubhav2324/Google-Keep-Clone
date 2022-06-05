import React, { useContext, useRef, useState } from 'react';
import { ClickAwayListener, styled, TextField } from '@mui/material'
import { Box } from '@mui/system';
import { v4 as uuid } from 'uuid';

import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    padding: 10px 15px;
    border-radius: 8px;
    border-color: #e0e0e0; 
    margin: auto;
    min-height: 30px;
`;

const note = {
    id: '',
    title: '',
    content: ''
}

const Form = () => {

    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({...note, id:uuid()});

    const { notes, setNotes } = useContext(DataContext);

    const containerRef = useRef();

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '90px';
    }

    const onTextAreaClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';
        setAddNote({ ...note, id:uuid() });
        if(addNote.title || addNote.content){
            setNotes((prevArray)=>[addNote, ...prevArray]);
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setAddNote((prevValue)=>{
            return{
                ...prevValue,
                [name]: value
            }
        })
    }


    return (
        <ClickAwayListener onClickAway={onTextAreaClickAway}>
            <Container ref={containerRef}>
                {showTextField &&
                    <TextField
                        name="title"
                        placeholder='Title'
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={handleChange}
                        value={addNote.title}
                    />
                }
                <TextField
                    name="content"
                    placeholder='Take a note...'
                    multiline
                    variant='standard'
                    InputProps={{ disableUnderline: true }}
                    onClick={onTextAreaClick}
                    onChange={handleChange}
                    value={addNote.content}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form