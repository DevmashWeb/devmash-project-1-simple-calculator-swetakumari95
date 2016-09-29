var out = document.getElementById("output");
var flag=0; //to clear screen after =

function On_Off(){

    //key OFF
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    //toggles the placeholder in display, disables all keys if turned off
    if (out.placeholder=="Hey, Enter something!")
    {
        out.placeholder="";
        var keydisable = document.getElementsByTagName("input");
        keydisable[1].value = "ON";
        for (i=2;i<keydisable.length;i++)
            document.getElementsByTagName("input")[i].disabled = true;
    }
    else
    {
        out.placeholder="Hey, Enter something!";    
        var keydisable = document.getElementsByTagName("input");
        keydisable[1].value = "OFF";
        for (i=2;i<keydisable.length;i++)
            document.getElementsByTagName("input")[i].disabled = false;
    }
    
    out.value = "";
    
}

function clicked(inp){
    
    if (flag==1)
    {
        out.value = "";
        flag=0;
    }
    
    if (inp == 'AC'){
        out.value = "";
    }
    else if (inp == 'CE'){
        var str = out.value;
        out.value = str.substring(0, str.length-1);
    }
    else
        out.value += inp;
    
}

function calculate(){
    
    //key =
    var exp = out.value;
    //if % is used, calculate % by extracting no
    if (exp.slice(-1)=="%")
    {
        var str = exp.substring(0,exp.length-1);
        try{
            str = eval(str);
            var num = Number(str)/100;
            out.value = num;
        }
        catch(e){
            if (e instanceof SyntaxError)
                out.value = "Syntax Error";
            else
                out.value = "Error";
        }
        
    }
    else
    {  
        //simply evaluate expression
        try{
            out.value = eval(exp);
        }
        catch(e){
            if (e instanceof SyntaxError)
                out.value = "Syntax Error";
            else
                out.value = "Error";
        }
    }
    flag = 1;
    
}