

import React from "react";

import {ThemeContext, themes} from './components/theme-context';
import ThemedButton from './components/themed-button';


// Update Context from a Nested Component


import ThemeTogglerButton from "./components/themeTogglerButton"


// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // 
    

    // Updating context 

    this.toggleTheme = ()=>{
        this.setState(state=>({
            theme:state.theme=== themes.dark?themes.light:themes.dark,
        }));
    }

    this.state ={
        theme : themes.light,
        toggleTheme:this.toggleTheme
    }
  }

  render() {
    // The ThemedButton button inside the ThemeProvider   
     // uses the theme from state while the one outside uses    
     // the default dark theme   
    
    
     return (
         <div style={{background:this.state.theme.background,height:"100vh"}}>
        <ThemeContext.Provider value={this.state}>         
         {/* <Toolbar changeTheme={this.toggleTheme} /> 
         
                 */}

                 <Content />
         </ThemeContext.Provider>        
        </div>
    );
  }
}


function Content(){
    return(
        <div>
            <ThemeTogglerButton />
        </div>
    )
}



export default App;