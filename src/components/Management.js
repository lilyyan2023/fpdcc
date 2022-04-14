import React, { useState } from "react";
import Switch from "./Switch";
import Button from "../styles/Button.js";
import '../styles/Management.css';
import CollapsibleTable from "./CollapsibleTable";

function Management(props){
    const [value, setValue] = useState(false);
    return(
        <div className="app">
        <h1>Overall System </h1>
           
            <Switch
                isOn={value}
                onColor="#445721"
                handleToggle={() => setValue(!value)}
            />
            <Button>Reprogram </Button>
            <CollapsibleTable/>
            
        </div>
        
        
    )
}

export default Management