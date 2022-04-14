import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import '../styles/Collapsible.css'
import Switch from "./Switch";
import Button from "../styles/Button.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [value1, setValue1] = useState(true);

return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <h2>{isExpanded ? <FontAwesomeIcon icon="fa-solid fa-caret-down" /> : <FontAwesomeIcon icon="fa-solid fa-caret-right" />} Northern Cook County</h2>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <div className="park">
                    <p>Algonquin Woods</p>
                    <Switch
                        isOn={value1}
                        onColor="#445721"
                        handleToggle={() => setValue1(!value1)}
                    />
                    <Button>Apply </Button>
                </div>
                <div>Click again to hide...</div>
            </div>
        </div>
    </div>
    );
}

export default Collapsible;