#pragma strict
//released under the MIT license by G23D Studios-Kyle "G" www.3dg2.com;

//edit between "" below to change to your own URL;
var url = "http://photong23d.azurewebsites.net/read/readusers.aspx";
var textof : String;
textof = "";
//create a global variable to store the web page text
static var dataGlobal = "";

function Start() {  
    //create a new WWW object which will parse the "url" variable value (web page) for text
    var www : WWW = new WWW(url);
    //print www var to console for debugging;
    print("www");
    //wait for the text to completely load from the url
    yield www;
    //print www yield note to console for debugging;
    print("yield");
    //set the variable "textof" to the returned text from the WWW object request
    textof = www.text;
    //print www set to .text note to console for debugging;
    print("text");
    //print www var to console for debugging;
    print(textof);
    //set a global variable so that other functions and scripts can access the returned text
    dataGlobal = textof;
    }
    

function OnGUI() {
   //value 1 of "Rect" moves the item horizontally to the left (lower numeric value)or right (higher numeric value)on the screen
   //value 2 of "Rect" moves the item vertically up (lower numeric value) or down (higher numeric value) on the screen
   //value 3 of "Rect" decreases (lower numeric value) or increases (higher numeric value) the width of the item on the screen
   //value 4 of "Rect" decreases (lower numeric value) or increases (higher numeric value) the height of the item on the screen
   //create an onscreen 2D GUI box element and fill it with a label and the global variable dataGlobal
   GUI.Box( Rect(10,100,150,25), "Output 2=" + dataGlobal);
   //print gui text to console for debugging;
   print("gui");
  }