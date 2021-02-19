import React from 'react';
import iconsearch from "../icons/search.svg";

//Auto complete is finished but it needs data in params to work properly

  

class AutoCompleteText extends React.Component{
    constructor(props) {
        super(props);
       
        this.state = {
            suggestions: [], 
            text: ""
        };
    }

        onTextChange = (e) =>{
            const {items} = this.props;
            const value =e.target.value;
            let suggestions = [];
            if(value.length > 0){
                const regex = new RegExp(`^${value}`, 'i');
                suggestions = items.sort().filter(v => regex.test(v));     
            }
          this.setState(() => ({suggestions, text: value}));
        }
        suggestionSelected(value){
            this.setState(() => ({
                text: value,
                suggestions: [],
            }))
        }
        renderSuggestions() {
            const {suggestions} =this.state;
            if (suggestions.length === 0){
            return null;
        }
         return(
            <ul className="AutoTextdrop">
            {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
         );
        }
       

    render() {
        const {text} = this.state
        return(
            <div>
            <div className= "autocomplete-container">
                <input className="auto-input-bar" placeholder="Location" value={text} onChange={this.onTextChange} type="text"/>
                {this.renderSuggestions()}
            </div>
            </div>
        )
    }
}

export default AutoCompleteText;