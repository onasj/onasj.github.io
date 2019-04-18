function totalp(){
    var paragraphs = document.getElementsByTagName('p');
    var plength = paragraphs.length;
    var pstring = "There are "+plength+" paragraphs on the page";
    console.log(pstring);
    alert(pstring);
}

function totaldiv1(){
    var pdiv1 = document.getElementById('div1').getElementsByTagName('p');
    var div1length = pdiv1.length;
    var div1string = "There are "+div1length+" paragrahs in the first ID";
    console.log(div1string);
    alert(div1string);
}

function totaldiv2(){
    var pdiv2 = document.getElementById('div2').getElementsByTagName('p');
    var div2length = pdiv2.length;
    var div2string = "There are "+div2length+" paragrahs in the Second ID";
    console.log(div2string);
    alert(div2string);
}

function counterdiv1(){
    var pdiv1 = document.getElementById('div1').getElementsByTagName('p');
    var div1length = pdiv1.length;
    var div1string = "There are "+div1length+" paragrahs in the first ID";
    console.log(div1string);
//    alert(div1string);
    
}

function counterdiv2(){
    var pdiv2 = document.getElementById('div2').getElementsByTagName('p');
    var div2length = pdiv2.length;
    var div2string = "There are "+div2length+" paragrahs in the Second ID";
    console.log(div2string);
//    alert(div2string);
    
}

function counterbody(){
    var paragraphs = document.getElementsByTagName('p');
    var plength = paragraphs.length;
    var pstring = "There are "+plength+" paragraphs on the page";
    console.log(pstring);
//    alert(pstring);
}