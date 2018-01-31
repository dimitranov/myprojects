

var Chekbox = React.createClass({
        handleChecked: function () {
          this.setState({
            checked: !this.state.checked
            
          })
        },
        getInitialState: function () {
          return {checked:true}
        },
        render: function() {
          var msg;
          var classColor;
          if (this.state.checked ) {
            msg = "checked";
            classColor = "greengreen";

          }else{
            msg = "unchecked";
            classColor = "redred";
          }
          return (
          <div>
            <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>
            <p className={classColor}>State is {msg}</p>
          </div>
          )
        }
      	
      });



ReactDOM.render(
 <Chekbox/>
,
        
        document.getElementById('reactContainer')
      );


