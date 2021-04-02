import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {Container,Grid,Paper,Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme)=>({
    root:{
        height:"100vh"
    },
    paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mb1:{
      paddingBottom:"1em"
  },

   mx2:{
      padding:"0em 2em"
  },
  tfw:{
      width:'30ch'
  }


}))



class LoginForm extends Component {
    
    constructor(props){
        super(props)
        this.redirect = this.redirect.bind(this);
    }

     redirect(){
        console.log("this",this.props)
     }
    render() { 
      
        const classes = this.props.classes;
        return (  
            <div>
              <Grid direction="column" spacing={2}>
                        <form  noValidate autoComplete="off">
                            <div className={classes.mb1}>
                            <TextField id="outlined-basic" className={classes.tfw} label="username" variant="outlined" />
                            </div>
                            <div className={classes.mb1}>
                            <TextField id="outlined-basic" className={classes.tfw} label="password" variant="outlined" />
                            </div>
                            <div className={classes.m2}>
                            <Button variant="outlined" size="large" color="primary" className={classes.tfw} onClick={this.redirect}>
                                SignIn
                            </Button>
                            </div>
                        </form>
                    </Grid>
            </div>

        );
    }
}
 



function SignInComponent({history}) {
       
        const classes = useStyles();
 
        return ( 
            <React.Fragment>
                <Grid container className={classes.root} justify="center" alignItems="center" >
                    <Paper className={classes.paper}>
                        <LoginForm classes={classes} history={history} />
                    </Paper>
                            
                </Grid>         

            </React.Fragment>

         );
    
}
 
export default SignInComponent;

