#pragma strict

var url = "http://photong23d.azurewebsites.net/data.aspx";
var textof : String;
static var dataGlobal = "";

function Start() {  

    var www : WWW = new WWW(url);
    //print www var to console for debugging;
    print("www");
    yield www;
    //print www yield note to console for debugging;
    print("yield");
    
    textof = www.text;
    //print www set to .text note to console for debugging;
    print("text");
    //print www var to console for debugging;
    print(textof);
    dataGlobal = textof;
    
}

function OnGUI() {

   GUI.Box( Rect(100,150,100,90), dataGlobal);
   print("gui");
  
}