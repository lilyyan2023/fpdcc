import React from "react";
import StyledHeader from "../styles/StyledHeader";
import ViewButton from "../styles/ViewButton";
function Header(props){
    return(
        <StyledHeader>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',flexGrow: 1}}>
                <img style={{width: '150px', height: '80px', margin: '10px'}} src={require('../bin/fpdcc-logo.png')} alt='logo'/>
            </div>
            <ViewButton onClick={() => props.setView('Management')}>Gate Management</ViewButton>
            <ViewButton onClick={() => props.setView('Data')}>Usage Data</ViewButton>
            <ViewButton onClick={() => props.setView('Keycodes')}>Keycodes</ViewButton>
            <ViewButton onClick={() => props.setView('Login')} style={{fontWeight: 'normal'}}>Logout</ViewButton>
          
        </StyledHeader>
    )
}

export default Header