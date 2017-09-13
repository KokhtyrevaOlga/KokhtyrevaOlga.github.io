
//подключаем JSON 

var myJson = JSON.parse(fs.readFileSync('./items.json'));
//var myJson;
//$.getJSON('./items.json', function(json){ myJson = json; } );


function count_rabbits(document) {
    for(var i=1; i<=3; i++) {
        alert(i)
    }
    document.body.style.background = 'blue';
}

// подсчет общей суммы

function count_sum() {
        sum = eval(document.getElementById("PriceRoof").textContent.substring(8)) +
    eval(document.getElementById("PriceFoundation").textContent.substring(8));
    document.getElementById("textSum").textContent = "Sum = " + sum;
}

// Тест (не используется)

function check(){
    var inp = document.getElementsByName('Model');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            alert("selected Model: " + inp[i].value);
        }
    }
    var inp = document.getElementsByName('Roof');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            alert("selected Roof: " + inp[i].value);
        }
    }
    var inp = document.getElementsByName('Foundation');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            alert("selected Foundation: " + inp[i].value);
        }
    }
}

// Какая модель выбрана
function viewModel(value){
    
	modelValueStr =  "Model " + value;
    document.getElementById("textModel").textContent = modelValueStr;
	document.getElementById("textA").textContent = "A = " + eval("myJson.models[0]."+modelValueStr.replace(/\s/g, '')+".A");
    document.getElementById("textB").textContent = "B = " + eval("myJson.models[0]."+modelValueStr.replace(/\s/g, '')+".B");
    document.getElementById("textC").textContent = "C = " + eval("myJson.models[0]."+modelValueStr.replace(/\s/g, '')+".C");
}

// Выбор Roof

function viewRoof(value){
    document.getElementById("textRoof").textContent = "Roof " + value;
    document.getElementById("PriceRoof").textContent = "Price = " + count_roof_price(value);
    count_sum();
}
// Подсчет цены для Roof
function count_roof_price(value) {
    var inp = document.getElementsByName('Model');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
			modelValueStr =  "myJson.models[0].Model" + value;
			var A = eval(modelValueStr+".A");
            var B = eval(modelValueStr+".B");
            var C = eval(modelValueStr+".C");
			
        }
    }
	valueInt = parseInt(value)-1;
	Z = myJson.items[0].content[valueInt].price;
	
    return (A*Z+B*Z+C*Z)
}

// Выбор Foundation

function viewFoundation(value){
    document.getElementById("textFoundation").textContent = "Foundation " + value;
    document.getElementById("PriceFoundation").textContent = "Price = " + count_foundation_price(value);
    count_sum();
}
// Подсчет цены для Foundation
function count_foundation_price(value) {
    var inp = document.getElementsByName('Model');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
			modelValueStr =  "myJson.models[0].Model" + inp[i].value;
			var A = eval(modelValueStr+".A");
            var B = eval(modelValueStr+".B");
            var C = eval(modelValueStr+".C");
        }
    }
	valueInt = parseInt(value)-1;
	Z = myJson.items[1].content[valueInt].price;

    return (A*Z+B*Z+C*Z)
}




