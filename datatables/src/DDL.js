import React, {Component} from "react"

class DDL extends Component{
    constructor(props){
        super(props);
        this.state={
            numbers: [],
            length: 0,
        }
    }

    render(){
        this.setNewNumbers();
        return(
            <div>
                <select id="selectItem" onChange={() => this.changeTableLength()}>
                    {
                        this.state.numbers.map(function (item, index) {
                            return <option key={index}>{item}</option>
                        })
                    }
                </select>
            </div>
        )
    }

    setNewNumbers=()=>{
        let length=this.props.length;
        let number=Math.floor(length/5);
        let newNumber=[];
        if(length%5===0) number++;
        for(let i=1; i<=number; i++) newNumber.push(i*5);
        if(length%5!==0) newNumber.push(this.props.length);
        this.state.numbers=newNumber
    };

    changeTableLength=()=>{
        let item=document.getElementById("selectItem").value;
        this.props.changeLength(item);
    }
}

export default DDL