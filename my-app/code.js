var WordsList = ["WORLD", "WORD", "LOW", "OR", "DO", "OWL", "LORD", "OW"];
var WheelWordsList = ["W", "O", "L", "D", "R"];
var WordsDictionary = {
  "WORLD": (["button5", "button8", "button15", "button17", "button20"]),
  "WORD": ["button5", "button7", "button14", "button19"],
  "LOW": ["button17", "button12", "button2"],
  "OR": ["button9", "button14"],
  "DO": ["button19", "button11"],
  "OWL": ["button11", "button4", "button16"],
  "LORD": ["button16", "button10", "button13", "button18"],
  "OW": ["button10", "button3"]
};
var CurrentWord = "";
var win = 0;

function ShowHideWord(List, Show) {
 for (var i = 0; i < List.length; i++) {
    var ID =List[i];
    if (Show) {
      setProperty(ID,"text-color", "black");
    } else{
      setProperty(ID,"text-color", "white");
    }
  }
}

function ClearInputText() {
  setProperty("InputText", "text-color", "black");
  setText("InputText", "");
  CurrentWord = "";
}


function SetupGame(){
  ClearInputText();
setProperty("VictoryBackground", "hidden", true);
setProperty("Victory", "hidden", true);
  for(var key in WordsDictionary){
    var List = WordsDictionary[key];
    ShowHideWord(List, false);
  }
}


SetupGame();

onEvent("button1", "click", function( ) {
  setScreen("screen2");
});

onEvent("Clear", "click", function( ) {
  ClearInputText();
});

onEvent("Submit", "click", function( ) {
  var i = 0;
  while ( i < WordsList.length || WordsList[i]==CurrentWord) {
    if( WordsList[i]==CurrentWord) {
      ShowWord(CurrentWord);
      win++;
    }
    i++;
  }
  if (win == WordsList.length){
    setProperty("VictoryBackground", "hidden", false);
    setProperty("Victory", "hidden", false);
    console.log("win");
  }
  ClearInputText();
});

function InputBuilder(Index) {
  var CurrLetter = WheelWordsList[Index];
  if (!CurrentWord.includes(CurrLetter)){
  
  var CurrText = getText("InputText");
  if(CurrentWord.length < 5){
  setText("InputText", CurrText + CurrLetter );
  CurrentWord= CurrText + CurrLetter;
  }
  }
}

function ShowWord(Word) {
  var CurrentWordList = WordsDictionary[Word];
  ShowHideWord(CurrentWordList, true);
  }

function Shuffle() {
  var arr =  ["WB1","WB2","WB3","WB4","WB5"]
  for (var i = 0; i < arr.length; i++) {
        // Pick a random index from 0 to i
        var j = randomNumber(1, arr.length-1)
         
        // Swap arr[i] with the element at random index
        var temp = WheelWordsList[i];
        WheelWordsList[i] = WheelWordsList[j];
        setText(arr[i], WheelWordsList[j])
        WheelWordsList[j] = temp;
        setText(arr[j], temp)
        }
  
}

onEvent("shuffle", "click", function( ) {
  console.log("Shuffle")
   Shuffle()
  
});

onEvent("WB1", "click", function( ) {
  InputBuilder(0);
});

onEvent("WB2", "click", function( ) {
    InputBuilder(1);
});

onEvent("WB3", "click", function( ) {
    InputBuilder(2);
});

onEvent("WB4", "click", function( ) {
    InputBuilder(3);
});

onEvent("WB5", "click", function( ) {
    InputBuilder(4);
});


onEvent("screen2", "click", function( ) {
	console.log("screen2 clicked!");
});