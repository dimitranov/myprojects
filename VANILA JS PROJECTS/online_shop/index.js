var dataJSON_MAIN = [{
  "id": 1,
  "name_main": "Span",
  "name_second": "Sonsing",
  "watch_id": "241780309-7",
  "gender": "Female",
  "color": "gold",
  "price": 323,
  "off": 7
}, {
  "id": 2,
  "name_main": "Konklux",
  "name_second": "Konklab",
  "watch_id": "166416313-1",
  "gender": "Female",
  "color": "wood",
  "price": 955,
  "off": 20
}, {
  "id": 3,
  "name_main": "Alpha",
  "name_second": "Toughjoyfax",
  "watch_id": "571795928-1",
  "gender": "Female",
  "color": "black",
  "price": 785,
  "off": 32
}, {
  "id": 4,
  "name_main": "Span",
  "name_second": "Tres-Zap",
  "watch_id": "435210379-9",
  "gender": "Male",
  "color": "wood",
  "price": 489,
  "off": 16
}, {
  "id": 5,
  "name_main": "Aerified",
  "name_second": "Sub-Ex",
  "watch_id": "369536179-4",
  "gender": "Male",
  "color": "wood",
  "price": 502,
  "off": 41
}, {
  "id": 6,
  "name_main": "Viva",
  "name_second": "Cardguard",
  "watch_id": "373642432-9",
  "gender": "Male",
  "color": "wood",
  "price": 843
}, {
  "id": 7,
  "name_main": "Stim",
  "name_second": "Daltfresh",
  "watch_id": "233575931-0",
  "gender": "Male",
  "color": "ocean",
  "price": 814
}, {
  "id": 8,
  "name_main": "Konklab",
  "name_second": "Voltsillam",
  "watch_id": "651042243-3",
  "gender": "Female",
  "color": "black",
  "price": 490
}, {
  "id": 9,
  "name_main": "Andalax",
  "name_second": "Zamit",
  "watch_id": "190884034-X",
  "gender": "Female",
  "color": "fire",
  "price": 672
}, {
  "id": 10,
  "name_main": "Flexidy",
  "name_second": "Temp",
  "watch_id": "607973837-6",
  "gender": "Male",
  "color": "fire",
  "price": 705
}, {
  "id": 11,
  "name_main": "Zaam-Dox",
  "name_second": "Duobam",
  "watch_id": "303002966-2",
  "gender": "Male",
  "color": "gold",
  "price": 749
}, {
  "id": 12,
  "name_main": "Tresom",
  "name_second": "Konklab",
  "watch_id": "033558635-X",
  "gender": "Male",
  "color": "gold",
  "price": 470
}, {
  "id": 13,
  "name_main": "Latlux",
  "name_second": "Zontrax",
  "watch_id": "428483871-7",
  "gender": "Male",
  "color": "forest",
  "price": 635
}, {
  "id": 14,
  "name_main": "Job",
  "name_second": "Latlux",
  "watch_id": "148696775-2",
  "gender": "Male",
  "color": "silver",
  "price": 343
}, {
  "id": 15,
  "name_main": "Bamity",
  "name_second": "Voltsillam",
  "watch_id": "378429657-2",
  "gender": "Female",
  "color": "silver",
  "price": 424
}]

//dataJSON_MAIN ^





var articule_holder = document.getElementById('articule_holder'),
    input_from = document.getElementById('priceFrom'),
    input_to = document.getElementById('priceTo'),
    option_all = document.getElementById('option_all'),
    option_man = document.getElementById('option_man'),
    option_woman = document.getElementById('option_woman'),
    order_up = document.getElementById('order_up'),
    order_down = document.getElementById('order_down'),
    found_count = document.getElementById('found_count'),
    filtered_array = [];



function makePrice(pr,off) {
  var get_original_price = ((pr*100)/(100-off)).toFixed(0);
  if(off){
    return `<h4 class="card-title text-success font-weight-bold">${pr}$<br><small class="font-weight-bold text-danger text-lowercase"><s>${get_original_price}$</s> off ${off}%</small></h4>`;
  }
  else return `<h4 class="card-title text-dark font-weight-bold">${pr}$</h4>`;
}

function rederActicules(json_array) {
  var articule_holder_temp_data = '';
  for (var i = 0; i < json_array.length; i++) {
    articule_holder_temp_data +=
    '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4 rounded watch_apear">'+
      '<div class="card">'+
        '<p class="card-text text-center py-2 px-3">'+json_array[i].name_main + ' ' + json_array[i].name_second + ' ' + json_array[i].watch_id+'</p>'+
        '<img class="card-img-top" src="images/watch'+(json_array[i].id)+'.png" alt="Card image cap">'+
        '<div class="card-body">'+
           makePrice(json_array[i].price,json_array[i].off) +
          '<a href="#" class="btn btn-primary">View</a>'+
        '</div>'+
      '</div>'+
    '</div>';
  }
  return articule_holder_temp_data;
}

function fillArticluleHolder(dataArr) {
  articule_holder.innerHTML = rederActicules(dataArr);
}
function getNUmberOfFoundWatchesAfterFiltering() {
  found_count.innerHTML = articule_holder.childElementCount;
}

var dataJSON_MAIN_TEMP_COPY = dataJSON_MAIN;

function filterGender(arr,gen) {
  var tmp_arr = arr.filter(watch => watch.gender == gen);
  fillArticluleHolder(tmp_arr);
  getNUmberOfFoundWatchesAfterFiltering();
}

// filter for only watches with promotion ... same as gender filter function
function filterPrice(arr, min=0, max=99999999) {
  var tmp_arr = arr.filter(watch => watch.price > min && watch.price < max);
  fillArticluleHolder(tmp_arr);
  getNUmberOfFoundWatchesAfterFiltering();
  dataJSON_MAIN_TEMP_COPY = (tmp_arr !== dataJSON_MAIN_TEMP_COPY) ? tmp_arr : dataJSON_MAIN;
}

var arr_prv_fil = []; //array_for_gender_with_prev_filters

function filterColor(arr,colorArray) { // colorArray e.g. ["black", "gold", "fire", "forest"]
  var tmp_arr = [];
  for (var i = 0; i < colorArray.length; i++) {
    var newArray = arr.filter(watch => watch.color == colorArray[i] );
    if(tmp_arr.langth !== 0)
      tmp_arr = tmp_arr.concat(newArray);
    else
      tmp_arr = newArray;
  }
  fillArticluleHolder(tmp_arr);
  getNUmberOfFoundWatchesAfterFiltering();
  arr_prv_fil = tmp_arr;
}

function sortCheep_Expensive(arr) {
  var tmp_arr = arr.sort((a,b) => a.price - b.price);
  fillArticluleHolder(tmp_arr);
  getNUmberOfFoundWatchesAfterFiltering();
  dataJSON_MAIN = tmp_arr;
}

function sortExpensive_Cheep(arr) {
  var tmp_arr = arr.sort((a,b) => b.price - a.price);
  fillArticluleHolder(tmp_arr);
  getNUmberOfFoundWatchesAfterFiltering();
  dataJSON_MAIN = tmp_arr;
}


fillArticluleHolder(dataJSON_MAIN);
getNUmberOfFoundWatchesAfterFiltering();
sortCheep_Expensive(dataJSON_MAIN);

function classShifting(active,un1,un2){
  var ac = 'btn-primary',
  unac = 'btn-outline-primary';
  if(active.classList.contains(unac)){
    active.classList.remove(unac)
    active.classList.add(ac);
  }
  else active.classList.add(ac);
  if(un1.classList.contains(ac)) {
    un1.classList.remove(ac)
    un1.classList.add(unac);
  }
  else un1.classList.add(unac);
  if(un2!==undefined){
    if(un2.classList.contains(ac)) {
      un2.classList.remove(ac)
      un2.classList.add(unac);
    }
    else un2.classList.add(unac);
  }
}
option_all.addEventListener('click',() => {
  classShifting(option_all,option_man,option_woman);
  fillArticluleHolder(dataJSON_MAIN_TEMP_COPY);
  getNUmberOfFoundWatchesAfterFiltering();
});
option_man.addEventListener('click',()=>{
  classShifting(option_man,option_all,option_woman);
  filterGender((arr_prv_fil.length==0?dataJSON_MAIN_TEMP_COPY:arr_prv_fil),"Male")
});
option_woman.addEventListener('click',()=>{
  classShifting(option_woman,option_man,option_all);
  filterGender((arr_prv_fil.length==0?dataJSON_MAIN_TEMP_COPY:arr_prv_fil),"Female")
});

order_up.addEventListener('click',()=>{
  classShifting(order_up,order_down);
  sortCheep_Expensive(arr_prv_fil.length !== 0?arr_prv_fil:dataJSON_MAIN_TEMP_COPY);
});
order_down.addEventListener('click',()=>{
  classShifting(order_down,order_up);
  sortExpensive_Cheep(arr_prv_fil.length !== 0?arr_prv_fil:dataJSON_MAIN_TEMP_COPY);
});





var color_checkbox_node_list = document.querySelectorAll('input[name=color_checkbox]');
var  colorArray = [];
for (var i = 0; i < color_checkbox_node_list.length; i++) {
  color_checkbox_node_list[i].addEventListener( 'change', function() {
    if(this.checked) {
      colorArray.push(this.value);
      filterColor(dataJSON_MAIN_TEMP_COPY,colorArray);
    } else {
      for (var i = 0; i < colorArray.length; i++) {
        if(colorArray[i] == this.value){
          colorArray.splice(i,1);
        }
      }
      filterColor(dataJSON_MAIN_TEMP_COPY,colorArray);
      if(colorArray.length == 0){
        fillArticluleHolder(dataJSON_MAIN_TEMP_COPY);
        getNUmberOfFoundWatchesAfterFiltering();
      }
    }
  });
}

input_from.addEventListener('keyup',(e) => {
  filterPrice(dataJSON_MAIN, +e.target.value, ( +input_to.value < +e.target.value || +input_to.value == 0? undefined : +input_to.value) );
});
input_to.addEventListener('keyup',(e) => {
  filterPrice(dataJSON_MAIN,  +input_from.value , (+e.target.value < +input_from.value || +e.target.value == 0? undefined : +e.target.value) );
});
