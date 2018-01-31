import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Swiper, Slide } from 'react-dynamic-swiper';
import 'react-dynamic-swiper/lib/styles.css';

import Price from "./Price"
import Distance from "./Distance";
import Fuel from "./Fuel";


import EuroLogo from 'material-ui/svg-icons/editor/monetization-on';
import LocationLogo from 'material-ui/svg-icons/maps/directions';
import FuleLogo from 'material-ui/svg-icons/maps/local-gas-station';
import DataLogo from 'material-ui/svg-icons/action/trending-up';

injectTapEventPlugin();



export default class ParentComponent extends React.Component{
  constructor() {
    super()

    this.chnageTabIndexOnSwipe = this.chnageTabIndexOnSwipe.bind(this);
    this.state = {
      page:0,
    }
  }

  chnageTabIndexOnSwipe(index){
    this.setState({page:index})
  }

  render(){
    const stylesTab = {
      fontSize: "10px",
      height: "63px",
      margin: "-10px 0 0 0",
      color:"#fff",
    }
    return(
      <div>
        <Tabs
          inkBarStyle={{backgroundColor:"#aa2424"}}
          //tabItemContainerStyle={{backgroundColor:"black"}}
          tabTemplateStyle={{fontSize:"50px"}}

          value={this.state.page}
          >
          <Tab
            icon={<EuroLogo />}
            onActive={()=>this.setState({page:0})}
            label="price"
            style={stylesTab}
            value={0}


          />
          <Tab
            icon={<LocationLogo />}
            onActive={()=>this.setState({page:1})}
            label="distance"
            style={stylesTab}
            value={1}
          />
          <Tab
            icon={<FuleLogo />}
            onActive={()=>this.setState({page:2})}
            label="fule"
            style={stylesTab}
            value={2}
          />
          <Tab
            icon={<DataLogo />}
            onActive={()=>this.setState({page:3})}
            label="data"
            style={stylesTab}
            value={3}
          />
        </Tabs>

        <Swiper
          onInitSwiper={()=>console.log(33333)}
          swiperOptions={{scrollbarHide: false}}
          navigation={false}
          onTouchMove={()=>console.log(33333)}
          pagination= {false}
          scrollBar= {false}

        >
            <Slide onActive={()=>this.chnageTabIndexOnSwipe(0)}>
              <Price/>
            </Slide>
            <Slide  onActive={()=>this.chnageTabIndexOnSwipe(1)}>
              <Distance/>
            </Slide>
            <Slide onActive={()=>this.chnageTabIndexOnSwipe(2)}>
              <Fuel/>
            </Slide>
            <Slide onActive={()=>this.chnageTabIndexOnSwipe(3)}>
              <p>page 4</p>
            </Slide>


        </Swiper>

        {/* <div>
          {
          (() => {  switch(this.state.page){
              case 0: {
                 return <Price/>
               } break;
              case 1: {
                 return <Distance/>
               } break;
              case 2: {
                return <Fuel/>
              } break;
              case 3: {
                return <p>page 4</p>
              } break;
            }

          }
        )()}
        </div> */}

      </div>
    )
  }

}
