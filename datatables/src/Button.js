import React, {Component} from "react"

class Button extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <input className={this.props.isActive? 'current':'noncurrent'} onClick={()=>this.setButton(this.props.item)} type="button" value={this.props.item}/>
        )
    }

    setButton=(item)=>{
        this.props.changeButtonPoz(item);
    }
}

export default Button