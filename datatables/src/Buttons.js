import React, {Component} from "react"
import Button from "./Button.js"

class Buttons extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        let self=this;
        let buttonsArray=[];
        for(let i=1; i<=this.props.buttons; i++) buttonsArray.push(i);
        return(
            <div>
                {buttonsArray.map(function (item, index) {
                    return <Button changeButtonPoz={self.props.changeButtonPoz} isActive={self.props.booleanArray[index]} item={item} key={index}/>
                })}
            </div>
        )
    }
}

export default Buttons