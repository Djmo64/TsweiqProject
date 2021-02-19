import React from "react";


function Dropdown() {
    return(

        <div>
          <select value= "All Categories">
            <option value="TV">TV</option>
            <option value="Cinema">Cinema</option>
            <option value="Radio">Radio</option>
            <option value="Print">Print</option>
            <option value="Out of Home">Out of Home</option>
            <option value="Digital">Digital</option>
            <option value="Production">Production</option>
          </select>
       </div>

    )
}
export default Dropdown;