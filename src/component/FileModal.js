import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  Typography,
  IconButton,
  Grid
} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import FolderIcon from '@material-ui/icons/Folder';
import { AiFillFileMarkdown } from "react-icons/ai";


import DescriptionIcon from '@material-ui/icons/Description';
import { FileContext } from '../FileContext';

import './FileModal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: theme.palette.background.paper,
    overflowX: 'none',
    overflowY: 'none',
    borderRadius: '15px',
    width: "80vw",
    height: "80vh",
    margin: "5vh 10vw 5vh 10vw",
    position: 'relative',
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

export default function FileModal(props) {
  const { file, setFile, saveFile, deleteFile, addFile, filesys } = useContext(FileContext);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newFileName, setNewFileName] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewFileName('');
    setOpen(false);
  };

  return (
    <div>
      <IconButton style={{ color: "#757575" }} onClick={handleOpen}>
        <FolderIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ invisible: true }}
      >
        <Fade in={open}>
          <div className={classes.modal}>
            <div className="mac-header">
              <div className="mac-circles-container">
                <div className="mac-circles mac-circles-red" onClick={handleClose}/>
                <div className="mac-circles mac-circles-yellow" onClick={handleClose}/>
                <div className="mac-circles mac-circles-green" onClick={handleClose}/>
              </div>
            </div>

            <div className="mac-body">
              <Grid container spacing={2}>
                {Object.entries(filesys).map(([filename, content], i) => {
                  return (
                    <Grid item xs={4} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "20vh" }}>
                      <div className="file-icon-container">
                        <div
                          onClick={() => {
                            saveFile(filename, content);
                            setFile({ fname: filename, content: content });
                            handleClose();
                          }}
                          className="file-icon-button"
                        >
                          <div className="file-icon-image-container">
                            <AiFillFileMarkdown className="file-icon-image" />
                          </div>
                          <div className="file-icon-filename">
                            <Typography variant="subtitle1">{filename}</Typography>
                          </div>
                        </div>
                        
                        <div className="file-icon-delete-button">
                          <IconButton
                            onClick={() => {
                              deleteFile(filename);
                            }}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      </div>
                    </Grid>)
                })}
              </Grid>
            </div>

            <form className="mac-footer">
              <input type="text" placeholder="New Filename" className="filename-input" value={newFileName} onChange={(event) => setNewFileName(event.target.value)} autoFocus />

              <button type="button" className="open-file" onClick={() => addFile(newFileName, '')}>
                Add
              </button>

              <button type="button" className="create-file" onClick={() => {
                saveFile(file.fname, file.content);
                setFile({ fname: newFileName, content: '' });
                handleClose();
              }}>
                Create
              </button>

              {/* <IconButton
                  onClick={() => {
                    if (newFileName == '') {
                      return
                    }
                    saveFile(file.fname, file.content);
                    addFile(newFileName, '')
                  }}
                >
                  <DescriptionIcon />
                  <Typography variant="h6" style={{ "textAlign": "center" }}>Create New File</Typography>
                </IconButton> */}
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}