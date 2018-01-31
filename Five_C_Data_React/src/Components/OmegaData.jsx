import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Line} from 'react-chartjs-2';



class OmegaData extends Component {
  constructor(props) {
    super(props);
    this.results = props.results;

  }
  componentDidMount() {
    console.log(this.results);
  }

  omegaGraph=(array)=>{
    let chartDataObject = {},

    valuesArray = new Array();
    for(let i = 0; i < array.length; i++ ){
      valuesArray.push(array[i]);
    }
    chartDataObject = {
      labels:["Concept", "Connecting", "Collateral", "Communication", "Consolidation"],
      datasets:[
        {
          label:"Result Count",
          data:valuesArray,
          backgroundColor:"#19e39a"
        }
      ]
    }
    return chartDataObject
  }
  render() {

    let C1Count = 0 ,C2Count = 0,C3Count = 0,C4Count = 0,C5Count = 0;
    let resultsTemp = this.props.results;
    for (var i = 0; i < resultsTemp.length; i++) {
      switch (resultsTemp[i]) {
        case 0: C1Count += 1; break;
        case 1: C2Count += 1; break;
        case 2: C3Count += 1; break;
        case 3: C4Count += 1; break;
        case 4: C5Count += 1; break;
        default: null

      }
    }

    return (
      <div className="card_holder_wraper">
        <div className="card_holder">
        <Table selectable={false} >
        <TableHeader displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow colSpan="6">
            <TableHeaderColumn> </TableHeaderColumn>
            <TableHeaderColumn>Concept</TableHeaderColumn>
            <TableHeaderColumn>Connecting</TableHeaderColumn>
            <TableHeaderColumn>Collateral</TableHeaderColumn>
            <TableHeaderColumn>Communication</TableHeaderColumn>
            <TableHeaderColumn>Consolidation</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} >
          <TableRow>
            <TableRowColumn style={TableRowColumnStyleHead}>Total:</TableRowColumn>
            <TableRowColumn style={TableRowColumnStyle}>{C1Count}</TableRowColumn>
            <TableRowColumn style={TableRowColumnStyle}>{C2Count}</TableRowColumn>
            <TableRowColumn style={TableRowColumnStyle}>{C3Count}</TableRowColumn>
            <TableRowColumn style={TableRowColumnStyle}>{C4Count}</TableRowColumn>
            <TableRowColumn style={TableRowColumnStyle}>{C5Count}</TableRowColumn>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableRowColumn> </TableRowColumn>
            <TableRowColumn> </TableRowColumn>
            <TableRowColumn> </TableRowColumn>
            <TableRowColumn> </TableRowColumn>
            <TableRowColumn> </TableRowColumn>
            <TableRowColumn> </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
      <div  className="graph_container">
      <Line data={this.omegaGraph([C1Count,C2Count,C3Count,C4Count,C5Count])}
        width={200}
        height={150}
        options={{
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
        }}
        /></div>
    </div>
  </div>
    );
  }

}
const TableRowColumnStyle={
  marginRight:"100px",
  paddingLeft:"24px",
  backgroundColor:"none",
  fontSize:"1.2em",
  position:'relative'
}
const TableRowColumnStyleHead = {
  paddingLeft:"24px",
  textAlign:'center',
  fontSize:"12px",
  color:"#9e9e9e",
}
const infoIconStyle = {
  position:'absolute',
  top:"10px",
  right:"10px"
}
export default OmegaData;
