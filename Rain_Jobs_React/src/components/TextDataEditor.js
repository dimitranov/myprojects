import React, { Component } from 'react';


const SpecialInput = ({isTextarea, keyState, valueState, name, placeholder, onChange , children}) => {
  if(isTextarea){
    return (
      keyState && <div>
        <textarea type="text" value={valueState} name={name} placeholder={placeholder} onChange={onChange}/>
        {children}
      </div>
    )
  }
  else {
    return (
      keyState && <div>
        <input type="text" value={valueState} name={name} placeholder={placeholder} onChange={onChange}/>
          {children}
      </div>
    )
  }
}


class TextDataEditor extends Component {
  state = {
    hdOpened:false,
    phOpened:false,
    liOpened:false,
    heading: "",
    pahragraph: "",
    listitem: "",
  }
  addHeading = () => {
    this.setState({ hdOpened:true, phOpened:false, liOpened:false, })
  }
  addPharagraph = () => {
    this.setState({ hdOpened:false, phOpened:true, liOpened:false, })
  }
  addListItem = () => {
    this.setState({ hdOpened:false, phOpened:false, liOpened:true, })
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  restartState = () => {
    this.setState({
      hdOpened:false,
      phOpened:false,
      liOpened:false,
      heading: "",
      pahragraph: "",
      listitem: "",
    })
  }

  renderButtons = () => {
    return (
      <div>
        <button onClick={()=>this.addHeading()}>Add Heading</button>
        <button onClick={()=>this.addPharagraph()}>Add Pharagraph</button>
        <button onClick={()=>this.addListItem()}>Add List Item</button>

      </div>
    )
  }

  renderInputs = () => {
    return (
      <div>
        <SpecialInput
          isTextarea={false}
          keyState={this.state.hdOpened}
          valueState={this.state.heading}
          name={"heading"}
          placeholder={"Type a Heading"}
          onChange={this.handleInputChange}
        >
          <button onClick={
            ()=>this.props.addFunction({type:"heading",value:this.state.heading}, this.restartState)
          }>Add</button>
        </SpecialInput>
        <SpecialInput
          isTextarea={true}
          keyState={this.state.phOpened}
          valueState={this.state.pahragraph}
          name={"pahragraph"}
          placeholder={"Type a pahragraph"}
          onChange={this.handleInputChange}
        >
          <button onClick={
            ()=>this.props.addFunction({type:"pahragraph",value:this.state.pahragraph}, this.restartState)
          }>Add</button>
        </SpecialInput>
        <SpecialInput
          isTextarea={false}
          keyState={this.state.liOpened}
          valueState={this.state.listitem}
          name={"listitem"}
          placeholder={"Type a list item"}
          onChange={this.handleInputChange}
        >
          <button onClick={
            ()=>this.props.addFunction({type:"listitem",value:this.state.listitem}, this.restartState)
          }>Add</button>
        </SpecialInput>
      </div>
    )
  }


  render() {
    if(!this.props.textDataArray.length)
      return <div>{this.renderButtons()}{this.renderInputs()}</div>
    else if(this.props.textDataArray.length>0)
      return (
        <div>
          {this.props.textDataArray.map((unit,index) => {
              return <div key={index}><span>{unit.value}</span><button onClick={()=>this.props.removeFunction(unit, this.restartState)}>remove</button></div>
            })}
            {/*removeFunction make it work*/}
          {this.renderButtons()}
          {this.renderInputs()}
        </div>
      )
  }
}

export default TextDataEditor;
