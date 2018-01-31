import React, { Component } from 'react';
import {idustrys} from './../config/dataConstants';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
class Filter extends Component {
  constructor(props) {
    super(props);
    this.showAll_noFilter =  props.showAll_noFilter;
    this.getFiltered = props.getFiltered;
    this.state = {
      industry:'',
      popup:''
    };
  }

  handleSelectIndustry = (event, index, industry) =>{
    this.showAll_noFilter();
    this.setState({industry:industry},()=>this.getFiltered(this.state.industry,this.state.popup))
  }
  handleSelectPopup = (event, index, popup) =>{
    this.showAll_noFilter();
    this.setState({popup:index},()=>this.getFiltered(this.state.industry,this.state.popup))
  }
  handleRestIndustry = () => {
    this.showAll_noFilter();
    if(this.state.popup !== ''){
        this.setState({industry:''} , ()=> this.getFiltered(this.state.industry,this.state.popup))
    }else if (this.state.industry !== '' && this.state.popup == '') {
      this.setState({industry:''},()=>this.showAll_noFilter());
    }
  }
  handleRestPopup = () => {
    this.showAll_noFilter();

    if(this.state.industry !== ''){
      this.setState({popup:''},()=>this.getFiltered(this.state.industry,this.state.popup))
    }else if(this.state.popup !== '' && this.state.industry == ''){
      this.setState({popup:''},()=>this.showAll_noFilter());
    }
  }
  render() {
    return (
      <div className="card_holder_wraper">
        <div className="card_holder">
          <div className="SelectField_container_all">

            <div className="SelectField_container">
              <SelectField
               floatingLabelText="Industry"
               floatingLabelStyle={{color:"#878787"}}
               value={this.state.industry}
               style={{width:"100%"}}
               onChange={this.handleSelectIndustry}
               maxHeight={250}
             >
               {
                 idustrys.map((title, i) => {
                   return <MenuItem value={title} primaryText={title} key={i}/>
                 })
               }
             </SelectField>
             <RaisedButton label="clear" onClick={()=>{this.handleRestIndustry()}}/>
           </div>
           <div className="SelectField_container">
             <SelectField
                floatingLabelText="Popup"
                floatingLabelStyle={{color:"#878787"}}
                value={this.state.popup}
                style={{width:"100%"}}
                onChange={this.handleSelectPopup}
                maxHeight={250}
              >
                {
                  Cc.map((c, i) => {
                    return <MenuItem value={i} primaryText={c} key={i}/>
                  })
                }

              </SelectField>
              <RaisedButton label="clear" onClick={()=>{this.handleRestPopup()}}/>
              </div>
            </div>
{/*
            <div className="SelectField_container_all">
              <RaisedButton label="Show All" onClick={()=>this.showAll_noFilter()} primary/>
            </div> */}
          </div>
      </div>
    );
  }

}

export default Filter;

const Cc = [ "Concept", "Connecting",
      "Collateral",
      "Communication",
      "Consolidation"]
