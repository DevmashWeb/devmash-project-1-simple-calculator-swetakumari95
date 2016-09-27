var out = document.getElementById("output");
var flag=0; //to clear screen after =

function clicked1(){

    //key ON
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    //toggles the placeholder in display
    if (out.placeholder=="Hey, Enter something!")
        out.placeholder="";
    else
        out.placeholder="Hey, Enter something!";
    
    out.value = "";
    
}

function clicked2(){

    //key AC
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    //clears screen value
    out.value = "";
    
}

function clicked3(){

    //key CE
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    //clears screen value
    out.value = "";
    
}

function clicked4(){

    //key /
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "/";
    
}

function clicked5(){
    
    //key 7
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "7";
    
}

function clicked6(){
    
    //key 8
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "8";
    
}

function clicked7(){
    
    //key 9
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "9";
    
}

function clicked8(){
    
    //key *
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "*";
    
}

function clicked9(){

    //key 4
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "4";
    
}

function clicked10(){
    
    //key 5
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "5";
    
}

function clicked11(){

    //key 6
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "6";
    
}

function clicked12(){
    
    //key -
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "-";
    
}

function clicked13(){

    //key 1
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "1";
    
}

function clicked14(){
    
    //key 2
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "2";
    
}

function clicked15(){

    //key 3
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "3";
    
}

function clicked16(){

    //key %
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "%";
    
}

function clicked17(){
    
    //key 0
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "0";
    
}

function clicked18(){
    
    //key .
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += ".";
    
}

function clicked19(){
    
    //key +
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    out.value += "+";
    
}

function clicked20(){
    
    //key =
    var exp = out.value;
    //if % is used, calculate % by extracting no
    if (exp.slice(-1)=="%")
    {
        var str = Number(exp.substring(0,exp.length-1));
        var num = Number(str)/100;
        out.value = num;
    }
    else
    {  
        //simply evaluate expression
        out.value = eval(exp);
    }
    flag = 1;
    
}
