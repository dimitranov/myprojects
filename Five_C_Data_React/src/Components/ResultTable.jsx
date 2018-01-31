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
import Popover from 'material-ui/Popover';
import Info from 'material-ui/svg-icons/action/info-outline';

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
const calcBgColor = (value) => {
  switch(value){
    case 0:{
      return "td_bg0"; break;
    }
    case 1:{
      return "td_bg1"; break;
    }
    case 2:{
      return "td_bg2"; break;
    }
    case 3:{
      return "td_bg3"; break;
    }
    case 4:{
      return "td_bg4"; break;
    }
    case 5:{
      return "td_bg5"; break;
    }
  }
}

const ResultTable = (props) => (
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
              <TableRowColumn style={TableRowColumnStyle}>{props.total1}</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle}>{props.total2}</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle}>{props.total3}</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle}>{props.total4}</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle}>{props.total5}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={TableRowColumnStyleHead}>QA 1:</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array1[0])}> { (props.array1[0] == 0)?"n/a":props.array1[0] } </TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array2[0])}>{ (props.array2[0] == 0)?"n/a":props.array2[0] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array3[0])}>{ (props.array3[0] == 0)?"n/a":props.array3[0] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array4[0])}>{ (props.array4[0] == 0)?"n/a":props.array4[0] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array5[0])}>{ (props.array5[0] == 0)?"n/a":props.array5[0] }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={TableRowColumnStyleHead}>QA 2:</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array1[1])}>{ (props.array1[1] == 0)?"n/a":props.array1[1] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array2[1])}>{ (props.array2[1] == 0)?"n/a":props.array2[1] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array3[1])}>{ (props.array3[1] == 0)?"n/a":props.array3[1] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array4[1])}>{ (props.array4[1] == 0)?"n/a":props.array4[1] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array5[1])}>{ (props.array5[1] == 0)?"n/a":props.array5[1] }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={TableRowColumnStyleHead}>QA 3:</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array1[2])}>{ (props.array1[2] == 0)?"n/a":props.array1[2] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array2[2])}>{ (props.array2[2] == 0)?"n/a":props.array2[2] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array3[2])}>{ (props.array3[2] == 0)?"n/a":props.array3[2] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array4[2])}>{ (props.array4[2] == 0)?"n/a":props.array4[2] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array5[2])}>{ (props.array5[2] == 0)?"n/a":props.array5[2] }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={TableRowColumnStyleHead}>QA 4:</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array1[3])}>{ (props.array1[3] == 0)?"n/a":props.array1[3] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array2[3])}>{ (props.array2[3]  == 0)?"n/a":props.array2[3] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array3[3])}>{ (props.array3[3] == 0)?"n/a":props.array3[3] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array4[3])}>{ (props.array4[3]  == 0)?"n/a":props.array4[3] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array5[3])}>{ (props.array5[3] == 0)?"n/a":props.array5[3] }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={TableRowColumnStyleHead}>QA 5:</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array1[4])}>{ (props.array1[4] == 0)?"n/a":props.array1[4] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array2[4])}>{ (props.array2[4] == 0)?"n/a":props.array2[4] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array3[4])}>{ (props.array3[4] == 0)?"n/a":props.array3[4] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array4[4])}>{ (props.array4[4] == 0)?"n/a":props.array4[4] }</TableRowColumn>
              <TableRowColumn style={TableRowColumnStyle} className={calcBgColor(props.array5[4])}>{ (props.array5[4] == 0)?"n/a":props.array5[4] }</TableRowColumn>
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
    );


export default ResultTable;
