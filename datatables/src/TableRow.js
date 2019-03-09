import React, {Component} from "react"

class TableRow extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <tr><td>{this.props.obj.color}</td><td>{this.props.obj.value}</td></tr>
        )
    }
}

export default TableRow