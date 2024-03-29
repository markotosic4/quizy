
let results = document.createElement("section");

results.style.display = "none";
let resForm = document.createElement("form");
let resArticle = document.createElement("article")
let resTitle = document.createElement("h1");
let btnPlayAgain= document.createElement("input");
resTitle.innerHTML = "ODGOVORI";
resTitle.classList.add("resTitle")
btnPlayAgain.type = "submit";
btnPlayAgain.value = "IGRAJ PONOVO";
resArticle.append(resTitle);
document.body.append(results);
resForm.append(resArticle, btnPlayAgain);
results.append(resForm);

let form = document.createElement("form");
let numOfQuestion = document.createElement("h2");
let image = document.createElement("img");
let text = document.createElement("p");
form.append(numOfQuestion, image, text);
let answers = [];
let radios = [];
//////////////////////
// I create answers to the question
let numOfResponses = questions[0].answers_.length;
for(let i=0; i< numOfResponses; i++) {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.id = `${i}`;
    radio.name = "answers_"
    let label = document.createElement("label");
    label.setAttribute("for", `${i}`)
    let div = document.createElement("div");
    div.append(radio, label);
    answers.push(label);
    form.append(div);
   if(i==0){
       radio.checked = true; // sets the first radio button checked for the first question 
       radio.parentNode.style.background = "#C9FFFF";
   }
    
}
//////////////////////////////////////

////////////////////////////////////
// find out which answer was chosen
let radioResponses = document.getElementsByName("answers_");

///////////////////////////////////////

let nextQuestion = document.createElement("input");
nextQuestion.type = "submit"
nextQuestion.value = "SLEDEĆE PITANJE"

let send = document.createElement("input");
send.type = "submit";
send.value = "POŠALJI"
send.style.display = "none";


let playAgain = document.createElement("button");
playAgain.innerHTML = " IGRAJ PONOVO"
playAgain.style.display = "none";


form.append(nextQuestion, send, playAgain)








permutation(questions);








let bgdImage = document.createElement("img");
bgdImage.classList.add("bgdImage");
document.body.append(bgdImage);


// setting the first question
///////////////////////////////
numOfQuestion.innerHTML = `pitanje 1/5`;
image.src = `${questions[0].img}`;
text.innerHTML = `${questions[0].text}`; 
bgdImage.src = `${questions[0].background}`;
  for(let i = 0; i< answers.length; i++) {
    answers[i].innerHTML = `${questions[0].answers_[i]}`
    
} 


//////////////////////////////////////////////

document.body.append(form);



// displaying the next question
///////////////////////////////////
let answers_ = [];
let counter = 0;
let prevent = function (e){
    e.preventDefault();
}
function next_question (e) {
    /* e.preventDefault(); */
   /*  if(counter >5) {
        counter = 0;
    } */
    counter++;


    if(counter <=4){
        
        numOfQuestion.innerHTML = `pitanje ${counter + 1} / 5`;
       image.src = `${questions[counter].img}`;
       text.innerHTML = `${questions[counter].text}`;
       bgdImage.src = `${questions[counter].background}`;
       
       for(let j = 0; j< answers.length; j++) {
        answers[j].innerHTML = `${questions[counter].answers_[j]}`;
    }    
    }
    if(counter <6){
        prevent(e);
    }
    if(counter ==4)  {
        nextQuestion.value = "POŠALJI";   
        nextQuestion.addEventListener("click", displayRes);
        
    }
 
    /*  e.preventDefault(); */
    
    let correctAnswer = questions[counter -1].indexCorrectAnswer;
    for(let i=0;i<radioResponses.length; i++) {
        if(radioResponses[i].checked == true) {
           /*  radioResponses[i].classList.add(checkedAnswer); */
            radioResponses[i].id == correctAnswer ? answers_.push(true) :  answers_.push(false);
        console.log(answers_);
    }
    
    
} 




for(let i=0;i<radioResponses.length; i++) {
    radioResponses[i].checked = false;
    radioResponses[0].checked = true; // sets the first radio button checked except for the first question
   }
        
        /* console.log(radioResponses[i]); */
    

     /* for(let i=0;i<radioResponses.length; i++) {
        radioResponses[i].checked = false;
        console.log("radi");
       } */
       
}

window.addEventListener("click", ()=>{
    for(let i=0;i<radioResponses.length; i++) {
        if(radioResponses[i].checked == true) {
            
            if(questions[counter].img == "photos/10.png" || questions[counter].img == "photos/11.png"|| questions[counter].img == "photos/12.png" || questions[counter].img == "photos/13.png"){
                
                if(questions[counter].answers_[radioResponses[i].id] == "narandžasta"){
                   radioResponses[i].parentNode.style.background = "#FF9330";
                }else if(questions[counter].answers_[radioResponses[i].id] == "ljubičasta"){
                    radioResponses[i].parentNode.style.background = `#8513C3`;
                    radioResponses[i].nextSibling.style.color = "white";
                }else if(questions[counter].answers_[radioResponses[i].id] == "zelena"){
                    radioResponses[i].parentNode.style.background = `#52DC70`
                }else if(questions[counter].answers_[radioResponses[i].id] == "roze"){
                    radioResponses[i].parentNode.style.background = `#FF6EB4`
                }else if(questions[counter].answers_[radioResponses[i].id] == "plava"){
                    radioResponses[i].parentNode.style.background = `#142BF9`;
                    radioResponses[i].nextSibling.style.color = "white";
                }else if(questions[counter].answers_[radioResponses[i].id] == "braon"){
                    radioResponses[i].parentNode.style.background = `#7E441A`;
                    radioResponses[i].nextSibling.style.color = "white";
                }else if(questions[counter].answers_[radioResponses[i].id] == "siva"){
                    radioResponses[i].parentNode.style.background = `#C3C3C3`
                }else if(questions[counter].answers_[radioResponses[i].id] == "crna"){
                    radioResponses[i].parentNode.style.background = `#000000`;
                    radioResponses[i].nextSibling.style.color = "white";
                }else if(questions[counter].answers_[radioResponses[i].id] == "maslinasta"){
                    radioResponses[i].parentNode.style.background = `#96AC68`
                }
            } else{
                radioResponses[i].parentNode.style.background = `#C9FFFF`
                
            }        
            
        }else{
            radioResponses[i].parentNode.style.background = "none";
            radioResponses[i].nextSibling.style.color = "black";
        }
    }
});


nextQuestion.addEventListener("click", next_question);

/////////////////////////////////////////////////////////////

for(let i=0; i < 5; i++){
    let answer = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = "radiiiiii"
    let img = document.createElement("img");
    answer.append(p,img);
    resArticle.append(answer);
}






function displayRes() {
         /* form.innerHTML = ""; */
         /* form.append(rezultati) */
         /* rezultati.style.display = "flex"; */
         let paragraphs = results.querySelectorAll("p");
         let images = results.querySelectorAll("img");
         for(let i = 0; i< answers_.length; i++){
             paragraphs[i].innerHTML = `pitanje ${i+1}`;
             images[i].src = `photos/${answers_[i]}.png`;
         }
         let inputs = form.querySelectorAll("input");
         inputs.forEach(el=>{
            el.disabled = true;
         })
        form.style.display = "none";
        results.style.display = "flex";
        
        for(let i = 0; i<answers_.length; i++){
             
        }
        
        bgdImage.src = `photos/background_results.png`;
        document.getElementsByClassName("bgdImage")[0].style.opacity = "1";
        
}

function permutation (arr) {
  for(let i = arr.length-1; i >= 0; i--){
    let question = Math.floor(Math.random() * (i +1));
    let question2 = arr[i];
    arr[i] = arr[question];
    arr[question] = question2;
  }
  return arr;
}

btnPlayAgain.addEventListener("click", ()=>{
    console.log(counter);
    permutation(questions);
})