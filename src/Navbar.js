import React, { useState, useContext } from 'react'
import clsx from 'clsx';

import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import {
    Container,
    Checkbox,
    FormControlLabel,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Hidden,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import VisibilityIcon from '@material-ui/icons/Visibility';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import IOSSwitch from './component/Switch'
import SlideModal from './component/SlideModal'
import HelpModal from './component/HelpModal'
import FileModal from './component/FileModal'

import { SettingContext } from './SettingContext';
import { FileContext } from './FileContext';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: '#ffffff',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function GfmCheckbox({ gfm, onControlsChange }) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={gfm}
                    style={{
                        color: "#f0ad4e",
                    }}
                    name="gfm"
                    onChange={onControlsChange}
                />
            }
            label="GFM"
        />
    )
}

function HtmlCheckbox({ raw, onControlsChange }) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={raw}
                    style={{
                        color: "#5bc0de",
                    }}
                    name="raw"
                    onChange={onControlsChange}
                />
            }
            label="HTML"
        />
    )
}

function LatexCheckbox({ math, onControlsChange }) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={math}
                    style={{
                        color: "#f59e0b",
                    }}
                    name="math"
                    onChange={onControlsChange}
                />
            }
            label="LaTeX"
        />
    )
}

export default function Navbar(props) {
    const classes = props.classes
    const value = props.value
    const setValue = props.setValue
    const indices = props.indices

    const { gfm, setGfm, raw, setRaw, math, setMath, dark, setDark, rehypePlugins, setRehypePlugins, remarkPlugins, setRemarkPlugins, open, setOpen } = useContext(SettingContext)
    const { file, initialValue } = useContext(FileContext)
    const [anchor, setAnchor] = useState(null)

    const toggleTheme = () => {
        setDark(!dark)
    }

    const onDownload = (evt) => {
        const element = document.createElement("a")
        const file = new Blob([value],
            { type: 'text/plain;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        element.download = "markdown-slides.md";
        document.body.appendChild(element);
        element.click();
    }

    const pluginHelper = (temp_gfm, temp_raw, temp_math) => {
        let newRemarkPlugins = [remarkSlug, remarkToc]
        let newRehypePlugins = [rehypeHighlight]

        if (temp_gfm) {
            newRemarkPlugins = newRemarkPlugins.concat(remarkGfm)
        }
        if (temp_raw) {
            newRehypePlugins = newRehypePlugins.concat(rehypeRaw)
        }
        if (temp_math) {
            newRemarkPlugins = newRemarkPlugins.concat(remarkMath)
            newRehypePlugins = newRehypePlugins.concat(rehypeKatex)
        }


        setRemarkPlugins(newRemarkPlugins)
        setRehypePlugins(newRehypePlugins)
    }

    const onControlsChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        let temp_gfm = gfm, temp_raw = raw, temp_math = math;

        if (name === 'gfm') {
            setGfm(checked)
            temp_gfm = checked;
        } else if (name === "raw") {
            setRaw(checked)
            temp_raw = checked;
        } else if (name === "math") {
            setMath(checked)
            temp_math = checked;
        }
        pluginHelper(temp_gfm, temp_raw, temp_math)
    }

    return (
        <div>
            <Hidden mdDown>
                <AppBar
                    position="fixed"
                    style={{ background: '#232932' }}
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <Container style={{ display: 'flex', alignItems: 'center', padding: '0px' }}>
                            <FileModal />
                            <Typography variant="h6" noWrap className={classes.title}>
                                Markdown Slides
                            </Typography>
                            current file: {file ? file.fname : 'null'}
                        </Container>

                        {/* Dark mode toggle */}
                        <IOSSwitch checked={dark} onClick={toggleTheme} />
                        <Typography variant="caption" noWrap style={{ paddingRight: '2em' }}>
                            Dark mode
                        </Typography>

                        <GfmCheckbox gfm={gfm} onControlsChange={onControlsChange} />
                        <HtmlCheckbox raw={raw} onControlsChange={onControlsChange} />
                        <LatexCheckbox mathchecked={math} onControlsChange={onControlsChange} />

                        <SlideModal
                            value={value}
                            indices={indices}
                            remarkPlugins={remarkPlugins}
                            rehypePlugins={rehypePlugins}
                        />

                        <IconButton style={{ color: "#5bc0de" }} onClick={onDownload}>
                            <GetAppIcon />
                        </IconButton>

                        <IconButton style={{ color: "#d9534f" }} onClick={() => {
                            setValue(initialValue)
                        }}>
                            <RotateLeftIcon />
                        </IconButton>
                        <HelpModal />

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={() => setOpen(true)}
                            className={clsx(open && classes.hide)}
                        >
                            <VisibilityIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Hidden>
            <Hidden lgUp>
                <AppBar
                    position="fixed"
                    style={{ background: '#232932' }}
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <Container style={{ display: 'flex', alignItems: 'center', padding: '0px' }}>
                            <FileModal />
                            <Typography variant="h6" noWrap className={classes.title}>
                                MdSlides
                            </Typography>
                            current file: {file ? file.fname : 'null'}
                        </Container>

                        <IOSSwitch checked={dark} onClick={toggleTheme} />
                        <SlideModal
                            value={value}
                            indices={indices}
                            remarkPlugins={remarkPlugins}
                            rehypePlugins={rehypePlugins}
                        />

                        <IconButton style={{ color: "#5bc0de" }} onClick={onDownload}>
                            <GetAppIcon />
                        </IconButton>

                        <IconButton style={{ color: "#d9534f" }} onClick={() => setValue(initialValue)}>
                            <RotateLeftIcon />
                        </IconButton>

                        <HelpModal />

                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            style={{ color: '#ffffff' }}
                            onClick={(event) => setAnchor(event.currentTarget)}
                        >
                            <MoreVertIcon />
                        </IconButton>

                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchor}
                            keepMounted
                            open={Boolean(anchor)}
                            onClose={() => setAnchor(null)}
                        >
                            <StyledMenuItem>
                                <GfmCheckbox gfm={gfm} onControlsChange={onControlsChange} />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <HtmlCheckbox raw={raw} onControlsChange={onControlsChange} />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <LatexCheckbox mathchecked={math} onControlsChange={onControlsChange} />
                            </StyledMenuItem>
                        </StyledMenu>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={() => setOpen(true)}
                            className={clsx(open && classes.hide)}
                        >
                            <VisibilityIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Hidden>
        </div>
    )
}
