import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { 
  Select,   
  Grid,
  InputLabel,
  FormHelperText,
  FormControl,
  IconButton 
} from '@material-ui/core';

import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { MarkdownWrapperHelper } from './MarkdownWrapper';


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

function SlidePageOptions(length) {
  const totalPageNum = (length / 2)
  let elements = []

  for(var i = 0; i < totalPageNum; i++) {
    elements.push(i)
  }
  
  return elements;
}

export default function SlideModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [pageNum, setPageNum] = React.useState(0);

  const element = MarkdownWrapperHelper(props.value, props.indices, props.remarkPlugins, props.rehypePlugins)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setPageNum(pageNum >= element.length - 2 ? pageNum : pageNum + 2);
  };

  const handlePrev = () => {
    setPageNum(pageNum <= 0 ? 0 : pageNum - 2);
  };

  const handleSet = (event) => {
    const page = event.target.value;
    setPageNum(page * 2);
  };

  const handleKeyPress = (event) => {
    if (event.key === "ArrowRight" || event.key === " " || event.key === "ArrowDown") {
      setPageNum(pageNum >= element.length - 2 ? pageNum : pageNum + 2);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      setPageNum(pageNum <= 0 ? 0 : pageNum - 2);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div>
      <IconButton style={{color: "#5cb85c"}} onClick={handleOpen}>
        <PresentToAllIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        onClick={handleNext}
        onKeyDown={handleKeyPress}
      >
        <Fade in={open}>
          <div className={classes.modal}>
            {/* <Grid container>
              <Grid item className={classes.slideNav} xs={4}>
                <IconButton disabled={pageNum <= 0 ? true : false} onClick={handlePrev}>
                  <NavigateBeforeIcon />
                </IconButton>
              </Grid>
              <Grid item className={classes.slideNav} xs={4}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-simple">Page</InputLabel>
                  <Select
                    native
                    value={pageNum / 2}
                    onChange={handleSet}
                  >
                    {SlidePageOptions(element.length).map((page) => (
                      <option value={page}>Page {page + 1}</option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item className={classes.slideNav} xs={4}>
                <IconButton disabled={pageNum >= element.length - 2? true : false}  onClick={handleNext}>
                  <NavigateNextIcon />
                </IconButton>
              </Grid>
            </Grid> */}
            {element[pageNum]}
            {element[pageNum + 1]}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}