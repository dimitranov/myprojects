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
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Line} from 'react-chartjs-2';

const tableStyles={
  table:{
    padding:"0 4%",
    marginBottom:"200px"
  },
  tableText:{
    textAlign:"center",
    fontSize:"16px",
    paddingLeft:"12px",
    paddingRight:"12px"
  }

}
const styles = {
  firstP:{
    textAlign:"center",
    fontSize:"17px",
    margin:"5px 0"
  },
  secondP:{
    textAlign:"center",
    fontSize:"30px",
    margin:"10px 0 0 0"
  },
  secondPSpan:{
    fontSize:"14px",
    color:"rgb(164, 164, 164)"
  },
  secondPSpan2:{
    fontSize:"11px",
    paddingLeft:"5px",
    opacity:"0.7"
  }
}











class PriceData extends Component {
  constructor(props) {
    super(props);
    this.addMoneyData= props.addMoneyData;
    this.state={
      newMoneyData:"",
      wantToAdd:false,
    }
  }
  calculateAverageMoneySpend = () => {
      if (!this.props.priceD) return 0;
      let sum = 0 , avr;
      for( let i = 0; i < this.props.priceD.length; i++ ){
        sum += parseFloat(this.props.priceD[i].value);
      }
      avr = ( sum / this.props.priceD.length ).toFixed(2);
      return avr;
  }
  colorOfvalues = (dataValue) => {
    let arg = this.calculateAverageMoneySpend();
    if(dataValue > arg){
      return "#ff6464";
    }else if ( dataValue < arg){
      return "#11b77b"
    }else return "inherit"
  }
  renderData = () => {
    let dataList;
    if(this.props.priceD){
      dataList = this.props.priceD.map((data , i )=>{
        return (
          <TableRow key={i} selectable={false}>
            <TableRowColumn style={tableStyles.tableText}>{data.date}</TableRowColumn>
            <TableRowColumn style={{color: this.colorOfvalues( parseFloat(data.value)) , textAlign:"center",fontSize:"18px", fontWeight:"900" }}>{data.value}<span style={styles.secondPSpan2}>BGN</span></TableRowColumn>
          </TableRow>
        )
      })
    } else { dataList = null}

    return dataList;
  }
  chartData = ()  =>{
    let chartDataObject = {},
    labelsArray = new Array(),
    valuesArray = new Array();
    for(let i =0; i < this.props.priceD.length; i++ ){
      labelsArray.push((this.props.priceD[i].date).substring(3,8));
      valuesArray.push(this.props.priceD[i].value);
    }
    chartDataObject = {
      labels:labelsArray,
      datasets:[
        {
          label:"Consumption",
          data:valuesArray,
          backgroundColor:"#19e39a"
        }
      ]
    }
  return chartDataObject;
    //console.log(chartDataObject);
  }
  render() {

    return (
      <div>
        <p style={styles.firstP}>Your average fueling expenses</p>
        <p style={styles.secondP}>{this.calculateAverageMoneySpend()} <span style={styles.secondPSpan}>BGN</span></p>
        {(this.state.wantToAdd)?
        (<div className="forms_wraper" style={{marginTop:"30px"}}>
          <TextField
            hintText="How much did spend today?"
            onChange={(e)=>{this.setState({ newMoneyData: e.target.value })}}
          /><br />
          <div className="div_flex_center fat_buttons_wraper">
            <RaisedButton label="Add" style={{margin:"0 8px"}}
              onClick={()=>this.setState({wantToAdd:false},()=>{this.addMoneyData(this.state.newMoneyData)})} primary/>
            <FlatButton label="Cancle" onClick={()=>this.setState({wantToAdd:false})} primary style={{margin:"0 8px"}}/>
          </div>
        </div>):(
          <div className="div_flex_center fat_buttons_wraper">
            <RaisedButton label="Add new" onClick={()=>this.setState({wantToAdd:true})} primary/>
          </div>
        )}
        <div style={tableStyles.table}>
          {(!this.props.priceD)?null:
            <Line data={this.chartData()}
              width={500}
              height={200}
              options={{
                legend: {
                    display: false,
                }}}
              />}
          <Table selectable={false} >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn colSpan="2"  style={tableStyles.tableText}>
                  Money Spend
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn  style={tableStyles.tableText}>Day</TableHeaderColumn>
                <TableHeaderColumn  style={tableStyles.tableText}>Money</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {
                this.renderData()
              }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

        </div>
      </div>
    );
  }

}

export default PriceData;
