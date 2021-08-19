function myfunction(){
    var a=document.getElementById("text1").value;
    var b=document.getElementById("text2").value;
    var c=document.getElementById("text3").value;
    var d=document.getElementById("text4").value;

    document.getElementById("area").value=a+"\n"+b+"\n"+c+"\n"+d;

    var a=document.getElementById("text1").value="";
    var b=document.getElementById("text2").value="";
    var c=document.getElementById("text3").value="";
    var d=document.getElementById("text4").value="";
}
function myfunction1(){
    alert("Order Placed");
    document.getElementById("area").value="";
}