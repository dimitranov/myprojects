import React, { Component } from 'react';
import HelpIcon from 'material-ui/svg-icons/action/help';
import Work from 'material-ui/svg-icons/action/work';
import Result from 'material-ui/svg-icons/action/trending-down';
import Person from 'material-ui/svg-icons/social/person';
import Email from 'material-ui/svg-icons/communication/email';

const UserTitle = (props) =>(
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td><Person style={tdiIonStyle} color={"#27c9a8"}/><span>{props.name}</span></td>
              <td><Email style={tdiIonStyle} color={"#ffc42e"}/><span>{props.email}</span></td>
            </tr>
            <tr>
              <td><Work style={tdiIonStyle} color={"#3ec6ff"}/><span>{props.industry}</span></td>
              {(props.resultPopup!=="")?<td><Result style={tdiIonStyle} color={"#ff5252"}/><span>{props.resultPopup}</span></td>:null}
              {(props.help)?<td><HelpIcon style={tdiIonStyle} color={"#ff53a0"}/><span>{"Help Message"}</span></td>:null}
            </tr>
          </tbody>
        </table>
      </div>
);

export default UserTitle;

const tdiIonStyle = {
  position:"absolute"
}
