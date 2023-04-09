import React from 'react'
import { useLocation } from "react-router-dom";

function ModeChoice() {

    const { state } = useLocation();
    const prop1 = state.prop1;
    const prop2 = state.prop2;
    
    

  return (
    <div>
        Mode choice
        This is page2. The selected options are "{prop1}" and "{prop2}"
    </div>
  )
}

export default ModeChoice

