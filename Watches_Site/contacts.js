

/*

var ForTest = React.createClass({ 
 
 render : function() {
       
        return (

        				        	<div>
	        		<button>{this.props.val}</button>
	        		<a href="#">{this.props.title}</a>
        	 </div>
        )
    }


});


var ContactForm = React.createClass({ 

 render : function() {
       
        return (
        	<div>
        		<p>{this.props.title}</p>
        			<ForTest title= {this.props.title} val="1"/>
	        		<ForTest title= {this.props.title} val="2"/>
	        		<ForTest  title= {this.props.title} val="3"/>
	        </div>
        	
        )
    }


});



ReactDOM.render(<ContactForm title="button"/>,document.getElementById('testdivreact'));

*/





var Headings = React.createClass({

render:function () {
	return (<p className="contacts-send-us-msg">{this.props.heading}</p>)
}
	 	



});

var FirstName = React.createClass({ 


 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="f-name-input" className="contact-input-label">{this.props.label}</label>
	        	<input type="text" name="fname" className="contacts-input" placeholder="Georgi" id="f-name-input" />
        	</div>
        )
    }


});

var LastName = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="l-name-input" className="contact-input-label">{this.props.label}</label>
        		<input type="text" name="lname" className="contacts-input" placeholder="Dimitranov" id="l-name-input" />
        	</div>
        )
    }


});

var Email = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="email-input" className="contact-input-label">{this.props.label}</label>
        		<input type="email" name="email" className="contacts-input" placeholder=" example@gmail.com" id="email-input" />
        	</div>
        )
    }


});

var EmailConfirm = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-input-wraper">
	        	<label for="email-input" className="contact-input-label">{this.props.label}</label>
        		<input type="email" name="email-conf" className="contacts-input" placeholder="Confirm e-mail" id="email-input-conf" />
        	</div>
        )
    }


});

var TextAreaMSG = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contact-textarea-wraper">
	        	<label for="msg-input" className="contact-input-label">{this.props.label}</label>
        		<textarea className="contacts-textarea-field" placeholder="Message here..."/>  
        	</div>
        )
    }


});


var SubmitInfoBtn = React.createClass({ 

 render : function() {
       
        return (
        	<input type="submit" value="Send" className="contacts-submit-btn"/>
        )
    }


});



var RowDiv1 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div">
        			<FirstName label="First Name" />
		        	<LastName label="Last Name" />
		        
        	</div>
        )
    }


});


var RowDiv2 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div">
        			<Email label="E-mail" />
		        	<EmailConfirm label="Confirm E-mail" />
		        
        	</div>
        )
    }


});


var RowDiv3 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div contact-msg-row-3">
        			
        			<TextAreaMSG label="Your message" />
		        	
		        
        	</div>
        )
    }


});


var RowDiv4 = React.createClass({ 

 render : function() {
       
        return (
        	<div className="contacts-row-div contacts-row-submit-butn" >
        			
        			<SubmitInfoBtn  />
		        	
		        
        	</div>
        )
    }


});






























//spisus s contakti
var Country = React.createClass({
    render:function () {
        return(
            <div className="contacts-table-row-td-div">
                <img src={this.props.src} className="contacts-table-img"/>
                <p className="contacts-table-row-text">{this.props.countryname}</p>
            </div>
            )
    }
});


var Location = React.createClass({
   
    render:function () {
        return(
            <div className="contacts-table-row-td-div">
                <img src="assets/locationicon.png" className="contacts-table-img"/>
                <p className="contacts-table-row-text" >{this.props.addres}</p>
            </div>
            )
    }
});

var PhoneNumber = React.createClass({
    render:function () {
        return(
            <div className="contacts-table-row-td-div">
                <img src="assets/callphone.png" className="contacts-table-img"/>
                <p className="contacts-table-row-text">{this.props.phone}</p>
            </div>
            )
    }
});



var TableHeading = React.createClass({
     
render:function () {
        return(
            
            <tr className="contacts-table-heading">
                <td>
                    <p className="contact-table-th-p">Country</p>
                </td>
                <td>
                  <p className="contact-table-th-p" >Adress</p>
                </td>
                <td>
                   <p className="contact-table-th-p">Phone</p>
                </td>
            </tr>
            
            )
    }
});

var TableRow = React.createClass({
    
    render:function () {
        return(
            
            <tr className="contacts-table-row">
                <td>
                    <Country countryname={this.props.countryname} src={this.props.src}/>
                </td>
                <td>
                   <Location addres={this.props.addres}/>
                    
                </td>
                <td>
                    <PhoneNumber phone={this.props.phone}/>
                </td>
            </tr>
            
            )
    }
});













var Table = React.createClass({
  

    render:function () {
        return(
            <table className="contact-table">
                <tbody>
                <TableHeading/>
                
                <TableRow   src={this.props.data.flag.flag1}
                            countryname={this.props.data.country.country1} 
                            phone={this.props.data.phone.phone1}
                            addres={this.props.data.location.location1} 
                            
                            
                            />
                <TableRow   src={this.props.data.flag.flag1}
                            countryname={this.props.data.country.country1} 
                            phone={this.props.data.phone.phone6}
                            addres={this.props.data.location.location6}
                            

                            />
                <TableRow   src={this.props.data.flag.flag2}
                            countryname={this.props.data.country.country2} 
                            phone={this.props.data.phone.phone2}
                            addres={this.props.data.location.location2}
                            

                            />
                <TableRow   src={this.props.data.flag.flag2}
                            countryname={this.props.data.country.country2} 
                            phone={this.props.data.phone.phone3}
                            addres={this.props.data.location.location3}
                            

                            />
                 <TableRow  src={this.props.data.flag.flag3}
                            countryname={this.props.data.country.country3} 
                            phone={this.props.data.phone.phone4}
                            addres={this.props.data.location.location4}
                            

                            />
                <TableRow   src={this.props.data.flag.flag4}
                            countryname={this.props.data.country.country4} 
                            phone={this.props.data.phone.phone5}
                            addres={this.props.data.location.location5}
                            

                            />
                            </tbody>
            </table>
            )
    }
});


//krai na spisuka s kontakci

var Maps = React.createClass({


   getInitialState: function () {
        return{
            currentmap:1,
            maptitle:1
        }
    },
 /*
{this.props.data.map.map1}
*/

ChangeMap1:function () {
    this.setState({ 
        currentmap:1,
        maptitle:1 
    });
},
ChangeMap2:function () {
    this.setState({ 
        currentmap:2,
        maptitle:2 
    });
},

ChangeMap3:function () {
    this.setState({ 
        currentmap:3,
        maptitle:3 
    });
},
ChangeMap4:function () {
    this.setState({ 
        currentmap:4,
        maptitle:4 
    });
},
ChangeMap5:function () {
    this.setState({ 
        currentmap:5,
        maptitle:5 
    });
},
ChangeMap6:function () {
    this.setState({ 
        currentmap:6,
        maptitle:6 
    });
},




    render:function () {
        var mapCurr;
        var mapTitle;
        var ClassNameBtnAvtive = "contacts-maps-buttons contacts-maps-buttons-avtive";
        var ClassNameBtnUnactive="contacts-maps-buttons";
        if (this.state.currentmap == 1) {
            mapCurr = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.0488266754514!2d24.747870215596354!3d42.14924195638109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1a2d28e4d79%3A0x3695d2011e91dc4e!2sul.+%22Zhelezarska%22+18%2C+4000+Kapana%2C+Plovdiv!5e0!3m2!1sen!2sbg!4v1501585499118";
            mapTitle = "Bulgaria, Plovdiv";
           
        }
        if (this.state.currentmap == 2) {
            mapCurr = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.4347812559517!2d23.318749115609666!3d42.69451382190647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856c5021a881%3A0x49293a9f619fd306!2sbul.+%22Vitosha%22+13%2C+1000+Sofia+Center%2C+Sofia!5e0!3m2!1sen!2sbg!4v1501585577048";
            mapTitle = "Bulgaria, Sofia";
             
        }
        if (this.state.currentmap == 3) {
            mapCurr = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.841105515255!2d8.668821115807647!3d50.10798101986281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0eaa6f266dc1%3A0x9eb7375aaa118996!2sM%C3%BCnchener+Str.+13%2C+60329+Frankfurt+am+Main%2C+Germany!5e0!3m2!1sen!2sbg!4v1501586119365";
            mapTitle = "Germany, Frankfurt";
             
        }
        if (this.state.currentmap == 4) {
            mapCurr = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9653156471945!2d7.465488715848371!3d51.51385231805229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9175f501acb25%3A0xc6b9970d36ff9596!2sKleppingstra%C3%9Fe+3%2C+44135+Dortmund%2C+Germany!5e0!3m2!1sen!2sbg!4v1501539628924";
            mapTitle = "Germany, Dortmund";
             
        }
        if (this.state.currentmap == 5) {
            mapCurr = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1592641516754!2d4.3502251158289535!3d50.846734966611784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47f4614f1f1%3A0xb03c355d8fe2cfb6!2sGrand+Place!5e0!3m2!1sen!2sbg!4v1501586238019";
            mapTitle = "Belgium, Brussels";
             
        }
        if (this.state.currentmap == 6) {
            mapCurr = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.499095772156!2d12.48542741559036!3d41.903628471794995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60552e033001%3A0xb1926e961194e037!2sVia+Sistina%2C+4%2C+00187+Roma+RM%2C+Italy!5e0!3m2!1sen!2sbg!4v1501586195618" ;
            mapTitle = "Italy, Rome";
             
        }
        return(
            <div className="contacts-location-maps-wraper">
            <p className="contacts-location-maps-title">{mapTitle}</p>
            
            <div className="contacts-maps-buttons-wraper">
                <button className={(this.state.currentmap == 1)?ClassNameBtnAvtive:ClassNameBtnUnactive} onClick={this.ChangeMap1} >Plovdiv</button>
                <button className={(this.state.currentmap == 2)?ClassNameBtnAvtive:ClassNameBtnUnactive} onClick={this.ChangeMap2} >Sofia</button>
                <button className={(this.state.currentmap == 3)?ClassNameBtnAvtive:ClassNameBtnUnactive} onClick={this.ChangeMap3} >Frankfurt</button>
                <button className={(this.state.currentmap == 4)?ClassNameBtnAvtive:ClassNameBtnUnactive} onClick={this.ChangeMap4} >Dortmund</button>
                <button className={(this.state.currentmap == 5)?ClassNameBtnAvtive:ClassNameBtnUnactive} onClick={this.ChangeMap5} >Brussels</button>
                <button className={(this.state.currentmap == 6)?ClassNameBtnAvtive:ClassNameBtnUnactive} onClick={this.ChangeMap6} >Rome</button>
            </div>
            
            
                <iframe className="contacts-location-maps" src={mapCurr}></iframe>
            </div>

            )
    }
});



var MainFatherDiv = React.createClass({ 

     render : function() {
           var rand = Math.floor(Math.random() * 10) + 1;
           
    var imageAsste = (rand>5) ? "image-letter.png" : "image-letter-2.png";

    //funkciq za avtomatichno izvejdane na danni vuv contact-location-and-phones-wraper .. {this.function}

            return (
            	<div>
            			<Headings heading="Send us a message"/>
    	        		<div className="contact-form-and-img-wraper">
    	        			<form className="contacts-father-div">
    	        			<RowDiv1/>
    	        			<RowDiv2/>
    	        			<RowDiv3/>
    	        			<RowDiv4/>
    	        			</form>
    	        			<div className="contact-gif-wraper">
    	        				<img src={"assets/" + imageAsste } className="contact-gif"/>
    	        			</div>
    	        		</div>





            			<Headings heading="Find or Call us"/>
            			<div className="contact-location-and-phones-wraper">
            				
                            <Table data={this.props.data} />
                                <Maps />
            			</div>
            	</div>
            )
        }


});




var DATA = { 



flag: { 
        flag1:'assets/flags/bulg.png',
        flag2:'assets/flags/germ.png',
        flag3:'assets/flags/belg.png',
        flag4:'assets/flags/ital.png'
                }, 


country: { 
        country1:'Bulgaria',
        country2:'Germany',
        country3:'Belgium',
        country4:'Italy'
                }  , 


location: { 
        location1:'Plovdiv, 18 Jelezarska Str.',
        location2:'Frankfurt, 13 Münchener Str.',
        location3:'Dortmund, 3 Kleppingstraße Str.',
        location4:'Brussels, Grand-Place',
        location5:'Rome, 4 Via Sistina ',
        location6:'Sofia, Vitosha bul.'
                }  ,


 phone: { 
        phone1:'+359/ 889 190 860',
        phone2:'+49/022 453 1225',
        phone3:'+49/034 532 3328',
        phone4:'+74/993 783 7284',
        phone5:'+234/ 748 739 003',
        phone6:'+359/ 998 344 533'

                }



};








  
     







ReactDOM.render(<MainFatherDiv data={DATA}/>,document.getElementById('testdivreact'));
/*

class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span> ;
        
      
     
      
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
     
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }      rows.push(<ProductRow product={product} key={product.name} /> );

      lastCategory = product.category;
    


    });
    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 6'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 



ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('testdivreact')
);


*/

