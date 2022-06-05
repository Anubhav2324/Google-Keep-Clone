import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { Link, useLocation } from 'react-router-dom';

const NavList = ({ open }) => {

    const navlist = [
        { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon />, route: '/' },
        { id: 2, name: 'Archive', icon: <ArchiveOutlinedIcon />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <DeleteOutlineOutlinedIcon />, route: '/delete' }
    ]
    const location = useLocation();
    return (
        <List>
            {
                navlist.map(list => (
                    <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}>
                        <ListItem button key={list.id} selected={list.route === location.pathname}>
                            <ListItemIcon style={{ alignItems: 'center' }}>
                                {list.icon}
                            </ListItemIcon>
                            <ListItemText primary={list.name} />
                        </ListItem>
                    </Link>
                ))
            }
        </List>
    )
}

export default NavList