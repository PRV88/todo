import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
 
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
   fabButton: {
    top:'auto',
    bottom:0

  },
   formroot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [title, setTitle] = React.useState("");

  const Submit = ()=>{
    console.log("Data Submited",title);
     props.setItems(title);
     props.handleClose();
  }
  const changeTitle = (e) => {
    setTitle(e.target.value);
   
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const body = (
    <div style={modalStyle} className={classes.paper}>
  
    <form className={classes.formroot} noValidate autoComplete="off">
      <h1>Add Title</h1>
      <TextField id="title" label="Title" onChange={changeTitle} variant="outlined" />
       <Button variant="outlined" onClick={Submit} color="primary">
          Submit
        </Button>
    </form>
        
  
    </div>
  );

  return (
    <div>
  
      <Modal
        open={props.open}
        onClick={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}