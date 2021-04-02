import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MiniDrawer from "./components/drawer"
import Signin from "./components/signin";

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ModalPopper from "./components/modal";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

 appBar: {
    top: 'auto',
    bottom: 0,
  },
   paper_root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  },
}));


function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [list,setList] = React.useState([]);


  const setItems = (value)=>{
    console.log(value)
    setList([...list,{id:list.length,value:value}])
  };

  const Open = () => {
    console.log("True")
    setOpen(true);
  };

  const deleteItem = (id)=>{
    
    let data = list;
 
    data.splice(id, 1);
    setList([...list])
  };

  const Close = () => {
    console.log("Close")
    setOpen(false);
   
  };

  
 
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/"> 
         <Signin />
        </Route>

        <Route path="/home"> 
         <MiniDrawer />
        </Route>
      </Switch>
    </Router>
    {/* <Container>

      <Grid 
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-strat"
      >
    <h1>Todo List</h1>
      </Grid>

      <Grid className={classes.paper_root}> 
        {
          list.map(item=><Paper elevation={1} key={item.id}>{item.value}
            <IconButton aria-label="delete" onClick={()=>{deleteItem(item.id)}} color="primary">
              <DeleteIcon />
            </IconButton>
          </Paper>)
        }
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >
  
     <AppBar position="fixed" color="none" elevation={0} className={classes.appBar}>
        <Toolbar>
            <Fab color="primary" aria-label="add"  className={classes.fabButton} onClick={Open}>
              <AddIcon />
            </Fab>
        </Toolbar>
      </AppBar>
    </Grid> 
  
      
       
    
   
      </Container> */}

        {/* <MiniDrawer /> */}
        <ModalPopper handleClose={Close} open={open} setItems={setItems} />
    </div>
  );
}




export default App;
