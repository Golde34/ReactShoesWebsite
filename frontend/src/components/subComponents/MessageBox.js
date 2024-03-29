import React from "react";
import "../css/messageBox.css";


export default function MessageBox(props) {
    return (
        <div className="error">
            <div className={`alert alert-${props.variant || 'info'}`}>
                {props.children}
            </div>
        </div>
    );
}