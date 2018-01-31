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
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Line} from 'react-chartjs-2';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';

const tableStyles={
  table:{
    padding:"0 4%",
    marginBottom:"200px",
    position:"relative"
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
  },
  modalStyle:{
    width: '90%',
    maxWidth: 'none',
  }
}


class FuelData extends Component {
  constructor(props) {
    super(props);
    this.state={
      modal_visible:false
    }
  }
  calculateAverageConsumption = () => {
      if (!this.props.fuelD) return 0;
      let sum = 0 , avr;
      for( let i = 0; i < this.props.fuelD.length; i++ ){
        sum += parseFloat(this.props.fuelD[i].value);
      }
      avr = ( sum / this.props.fuelD.length ).toFixed(2);
      return avr;
  }
  colorOfvalues = (dataValue) => {
    let arg = this.calculateAverageConsumption();
    if(dataValue > arg){
      return "#ff6464";
    }else if ( dataValue < arg){
      return "#11b77b"
    }else return "inherit"
  }
  chartData = ()  =>{
    let chartDataObject = {},
    labelsArray = new Array(),
    valuesArray = new Array();
    for(let i =0; i < this.props.fuelD.length; i++ ){
      labelsArray.push((this.props.fuelD[i].date).substring(3,8));
      valuesArray.push(this.props.fuelD[i].value);
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

  renderData = () => {
    let dataList;
    if(this.props.fuelD){
      dataList = this.props.fuelD.map((data , i )=>{
        return (
          <TableRow key={i} selectable={false}>
            <TableRowColumn style={tableStyles.tableText}>{data.date}</TableRowColumn>
            <TableRowColumn style={{color: this.colorOfvalues( parseFloat(data.value)) , textAlign:"center",fontSize:"18px", fontWeight:"900" }}>{data.value}<span style={styles.secondPSpan2}>L/100KM</span></TableRowColumn>
          </TableRow>
        )
      })
    } else { dataList = null}

    return dataList;
  }
  handleOpen = () => {
    this.setState({modal_visible: true});
  };

  handleClose = () => {
    this.setState({modal_visible: false});
  };
  render() {
    const actions = [
      <FlatButton
        label="GOT IT"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div>
        <p style={styles.firstP}>Your average fuel consumption</p>
        <p style={styles.secondP}>{this.calculateAverageConsumption()} <span style={styles.secondPSpan}>L / 100KM</span></p>
        <div style={tableStyles.table}>
          {(!this.props.fuelD)?null:
            <Line data={this.chartData()}
              width={500}
              height={200}
              options={{
                legend: {
                    display: false,
                }}}
              />}
              <FloatingActionButton mini={true}
                style={{position:"absolute", top:"-20px", right:"20px",zIndex:'3'}}
                onClick={this.handleOpen}
                >
                <InfoOutline />
              </FloatingActionButton>
              <Dialog
                title="Instruction for use"
                actions={actions}
                modal={true}
                contentStyle={styles.modalStyle}
                open={this.state.modal_visible}
                >To add data in this section, go to the Fuel Consumption page , calculate your consumption and save it.
              </Dialog>
          <Table selectable={false} >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn colSpan="2"  style={tableStyles.tableText}>
                  Fuel Consumption Data
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn  style={tableStyles.tableText}>Day</TableHeaderColumn>
                <TableHeaderColumn  style={tableStyles.tableText}>Consumption</TableHeaderColumn>
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

export default FuelData;
