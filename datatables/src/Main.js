import React, {Component} from "react"
import Table from "./Table.js"
import DDL from "./DDL.js"
import Buttons from "./Buttons";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            booleanArray: [],
            tableSize: 0,
            buttons: 0,
            buttonPoz: 0
        }
    }

    render(){
        return(
            <div>
                <DDL changeLength={this.changeLength} length={this.state.array.length} />
                <Table buttonPoz={this.state.buttonPoz} tableSize={this.state.tableSize} array={this.state.array} />
                <Buttons booleanArray={this.state.booleanArray} changeButtonPoz={this.changeButtonPoz} buttons={this.state.buttons}/>
            </div>
        )
    }

    changeButtonPoz=(item)=>{
        let newBooleanArray=this.state.booleanArray;
        newBooleanArray[this.state.buttonPoz]=false;
        newBooleanArray[item-1]=true;
        this.setState({
            buttonPoz: item-1,
            booleanArray: newBooleanArray
        });
        console.log(this.state.booleanArray);
    };

    changeLength=(length)=>{
        let number=Math.floor(this.state.array.length/length)+1;
        if(length==this.state.array.length){
          number=1;
        }
        let newBooleanArray=this.state.booleanArray;
        newBooleanArray[this.state.buttonPoz]=false;
        newBooleanArray[0]=true;
        this.setState({
            tableSize: length,
            buttons: number,
            buttonPoz: 0,
            booleanArray: newBooleanArray
        });
        console.log(this.state.booleanArray);
    };

    componentDidMount() {
        fetch("https://api.myjson.com/bins/1exld0")
            .then(response => response.json())
            .then(data => {
                let numberButtons=Math.floor(data.length/5);
                if(data.length%5!==0) numberButtons++;
                let newBooleanArray=[];
                for(let i=0; i<numberButtons; i++) newBooleanArray.push(false);
                newBooleanArray[0]=true;
                this.setState({ array: data, tableSize: 5, buttons: numberButtons, booleanArray: newBooleanArray});
            });

    }
}

export default Main;