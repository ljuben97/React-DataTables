import React, {Component} from "react"
import TableRow from "./TableRow.js";

class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            descending: false,
            sortingName: "color"
        }
    }

    render(){
        var self=this;
        var newArray=this.props.array.slice(this.props.buttonPoz*this.props.tableSize, (this.props.buttonPoz+1)*this.props.tableSize)
        var items=newArray.map(function(item, index){
            return <TableRow obj={item} key={index}/>
        })

        return(
            <table>
                <thead>
                <tr><th onClick={() => this.SortBy("color")}>Color</th><th onClick={() => this.SortBy("value")}>Value</th></tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </table>
        )
    }

    SortBy=(property)=>{
        if(this.state.sortingName===property){
            this.state.descending=!this.state.descending
        }
        else{
            this.state.descending=false;
            this.state.sortingName=property;
        }
        var mul=1;
        if(this.state.descending) mul=-1;
        function compare(a, b){
            if(a[property]<b[property]){
                return -1*mul
            }
            if(a[property]>b[property]){
                return mul;
            }
            return 0;
        }

        var NewArray=this.props.array.sort(compare);
        this.setState({
            array: NewArray
        })
    }
}

export default Table