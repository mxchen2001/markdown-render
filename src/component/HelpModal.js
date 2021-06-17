import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { 
  Typography,
  IconButton 
} from '@material-ui/core';

import HelpIcon from '@material-ui/icons/Help';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';


const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: theme.palette.background.paper,
    overflow: 'scroll',
    width: "80vw",
    height: "90vh",
    margin: "5vh 10vw 5vh 10vw",
    padding: "3em",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  slideNav: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export default function SlideModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton style={{color: "#757575"}} onClick={handleOpen}>
        <HelpIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.modal}>
            <Typography variant="h3" style={{"text-align": "center", "padding-bottom": "0.4em"}}>Help Guide</Typography>
        
            {/* Dashboard */}
            <Typography variant="h4">Editor</Typography>
            <Typography id="text-body" variant="h6">Standard Markdown format, with a slight twist. Use the keyword <code style={{backgroundColor: '#f4f4f4'}}>@newslide</code> to create a "pagebreak" to render the contents on different slides.</Typography>
            <br/>
            <br/>
            <br/>
            <Typography variant="h4">Preview Window</Typography>
            <Typography id="text-body" variant="h6">Preview the Markdown with indication of different slides.</Typography>
            <br/>
            <br/>
            <br/>
            <Typography variant="h4">Format Options</Typography>
            <Typography id="text-body" variant="h6">You can choose to include Github Flavored Markdown, <code style={{backgroundColor: '#f4f4f4'}}>remark-gfm</code> and/or Raw HTML <code style={{backgroundColor: '#f4f4f4'}}>rehype-raw</code>.</Typography>
            <br/>
            <br/>
            <br/>
            <Typography variant="h4">Presentation Mode</Typography>
            <Typography id="text-body" variant="h6">To present the Markdown Slides, click on the <PresentToAllIcon style={{color: "#5cb85c"}}/> button to enter presentation mode. Each slide will be rendered seperately and you can navigate between all slides present in the preview window.</Typography>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}