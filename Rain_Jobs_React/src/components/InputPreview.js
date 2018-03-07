import React, { Component } from 'react';


const InputField = ({name,title,err,onChange,type,value,toggleEdit,holder,isPicture}) => (
  <div style={{display:"block"}}>
    <input type="text" name={name} onChange={onChange} value={value} placeholder={holder}/>
    <button onClick={toggleEdit}>Save</button>
    <p>{err}</p>
  </div>
)



class InputPreview extends Component {
  state = {
    isEditing: true,
  }
  toggleEdit_View = () => {
    this.setState({isEditing:!this.state.isEditing})
  }
  renderComponents= () => {
    if(this.state.isEditing){
      return (
        <InputField
          name={this.props.name}
          holder={this.props.holder}
          onChange={this.props.handleChange}
          value={this.props.value}
          toggleEdit={this.toggleEdit_View}
          isPicture={this.props.isPicture}
        />
      )
    }
    return this.props.isPicture ? <img src={this.props.value} alt="" onClick={()=>this.toggleEdit_View()}/> : <p onClick={()=>this.toggleEdit_View()}>{this.props.value}</p>
  }
  render() {
    const { isEditing } = this.state;
    return (
      <div>
        {this.renderComponents()}
      </div>
    );
  }

}

export default InputPreview;
