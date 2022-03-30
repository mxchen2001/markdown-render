import React, { useContext } from 'react'

import {
    Container,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core/';

import GetAppIcon from '@material-ui/icons/GetApp';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import SlideModal from './component/SlideModal'
import HelpModal from './component/HelpModal'

import { StateContext } from './StateContext';

export default function Navbar() {
    const { value, setValue, indices, setIndices, defaultVal } = useContext(StateContext)

    const onDownload = () => {
        const element = document.createElement("a")
        const f = new Blob([value],
            { type: 'text/plain;charset=utf-8' });
        element.href = URL.createObjectURL(f);
        element.download = `rarxd.md`;
        document.body.appendChild(element);
        element.click();
    }

    return (
        <>
            {/* <AppBar > */}
                <Toolbar style={{ background: '#232932', color: '#ddd' }}>
                    <Container style={{ display: 'flex', marginLeft: '0', padding: '0px' }}>
                        <Typography variant="h6" noWrap>
                            Markdown Slides
                        </Typography>
                    </Container>

                    <SlideModal
                        value={value}
                        indices={indices}
                    />

                    <IconButton style={{ color: "#5bc0de" }} onClick={onDownload}>
                        <GetAppIcon />
                    </IconButton>

                    <IconButton style={{ color: "#aaa" }} onClick={() => {
                        setValue(defaultVal)
                    }}>
                        <RotateLeftIcon />
                    </IconButton>
                    <HelpModal />
                </Toolbar>
            {/* </AppBar> */}
        </>
    )
}