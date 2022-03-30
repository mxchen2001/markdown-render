// import React, { useState, useContext } from 'react'
// import clsx from 'clsx';

// import remarkGfm from 'remark-gfm'
// import remarkSlug from 'remark-slug'
// import remarkToc from 'remark-toc'
// import rehypeHighlight from 'rehype-highlight'
// import rehypeRaw from 'rehype-raw'

// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'

// import {
//     Container,
//     Checkbox,
//     FormControlLabel,
//     Typography,
//     AppBar,
//     Toolbar,
//     IconButton,
//     Hidden,
// } from '@material-ui/core/';
// import { withStyles } from '@material-ui/core/styles';

// import VisibilityIcon from '@material-ui/icons/Visibility';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import GetAppIcon from '@material-ui/icons/GetApp';
// import RotateLeftIcon from '@material-ui/icons/RotateLeft';

// import IOSSwitch from './component/Switch'
// import SlideModal from './component/SlideModal'
// import HelpModal from './component/HelpModal'
// import FileModal from './component/FileModal'

// import { SettingContext } from './SettingContext';
// import { FileContext } from './FileContext';


// export default function Navbar(props) {
//     const classes = props.classes
//     const value = props.value

//     const { gfm, setGfm, raw, setRaw, math, setMath, dark, setDark, rehypePlugins, setRehypePlugins, remarkPlugins, setRemarkPlugins, open, setOpen } = useContext(SettingContext)
//     const { file, initialValue } = useContext(FileContext)
//     const [anchor, setAnchor] = useState(null)
//     return (
//         <div>
//             <AppBar
//                 position="fixed"
//                 style={{ background: '#232932' }}
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: open,
//                 })}
//             >
//             </AppBar>
//         </div>
//     )
// }
