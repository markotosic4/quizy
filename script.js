
let rezultati = document.createElement("section");

rezultati.style.display = "none";
let rezForma = document.createElement("form");
let rezArticle = document.createElement("article")
let rezNaslov = document.createElement("h1");
let btnIgrajPon= document.createElement("input");
rezNaslov.innerHTML = "ODGOVORI";
rezNaslov.classList.add("rezNaslov")
btnIgrajPon.type = "submit";
btnIgrajPon.value = "IGRAJ PONOVO";
rezArticle.append(rezNaslov);
document.body.append(rezultati);
rezForma.append(rezArticle, btnIgrajPon);
rezultati.append(rezForma);

let forma = document.createElement("form");
let brPitanja = document.createElement("h2");
let slika = document.createElement("img");
let tekst = document.createElement("p");
forma.append(brPitanja, slika, tekst);
let odgovorii = [];
let radios = [];
//////////////////////
// kreiram odgovore na pitanje
let brojOdgovora = pitanja[0].odgovori.length;
for(let i=0; i< brojOdgovora; i++) {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.id = `${i}`;
    radio.name = "odgovori"
    let label = document.createElement("label");
    label.setAttribute("for", `${i}`)
    let div = document.createElement("div");
    div.append(radio, label);
    odgovorii.push(label);
    forma.append(div);
   if(i==0){
       radio.checked = true; // postavlja prvi radio button za prvo pitanje čekirano 
       radio.parentNode.style.background = "#C9FFFF";
   }
    
}
//////////////////////////////////////

////////////////////////////////////
// saznaj koji odgovor je odabran
let radioOdgovori = document.getElementsByName("odgovori");

///////////////////////////////////////

let sledecePitanje = document.createElement("input");
sledecePitanje.type = "submit"
sledecePitanje.value = "SLEDEĆE PITANJE"

let posalji = document.createElement("input");
posalji.type = "submit";
posalji.value = "POŠALJI"
posalji.style.display = "none";


let igrajPonovo = document.createElement("button");
igrajPonovo.innerHTML = " IGRAJ PONOVO"
igrajPonovo.style.display = "none";


forma.append(sledecePitanje, posalji, igrajPonovo)








permutacija(pitanja);








let bgdImage = document.createElement("img");
bgdImage.classList.add("bgdImage");
document.body.append(bgdImage);


// setovanje prvog pitanja
///////////////////////////////
brPitanja.innerHTML = `pitanje 1/5`;
slika.src = `${pitanja[0].img}`;
tekst.innerHTML = `${pitanja[0].tekst}`; 
bgdImage.src = `${pitanja[0].background}`;
  for(let i = 0; i< odgovorii.length; i++) {
    odgovorii[i].innerHTML = `${pitanja[0].odgovori[i]}`
    console.log(odgovorii[i].innerHTML);
} 


//////////////////////////////////////////////

document.body.append(forma);
console.log(forma);


// prikazivanje sledeceg pitanja
///////////////////////////////////
let odgovori = [];
let brojac = 0;
let prevent = function (e){
    e.preventDefault();
}
function sledeceP (e) {
    /* e.preventDefault(); */
   /*  if(brojac >5) {
        brojac = 0;
    } */
    brojac++;


    if(brojac <=4){
        
        brPitanja.innerHTML = `pitanje ${brojac + 1} / 5`;
       slika.src = `${pitanja[brojac].img}`;
       tekst.innerHTML = `${pitanja[brojac].tekst}`;
       bgdImage.src = `${pitanja[brojac].background}`;
       
       for(let j = 0; j< odgovorii.length; j++) {
        odgovorii[j].innerHTML = `${pitanja[brojac].odgovori[j]}`;
    }    
    }
    if(brojac <6){
        prevent(e);
    }
    if(brojac ==4)  {
        sledecePitanje.value = "POŠALJI";   
        sledecePitanje.addEventListener("click", prikaziRez);
        
    }
 
    /*  e.preventDefault(); */
    
    let tacanOdgovor = pitanja[brojac -1].indexKorektnogOdgovora;
    for(let i=0;i<radioOdgovori.length; i++) {
        if(radioOdgovori[i].checked == true) {
           /*  radioOdgovori[i].classList.add(checkedAnswer); */
            radioOdgovori[i].id == tacanOdgovor ? odgovori.push(true) :  odgovori.push(false);
        console.log(odgovori);
    }
    
    
} 




for(let i=0;i<radioOdgovori.length; i++) {
    radioOdgovori[i].checked = false;
    radioOdgovori[0].checked = true; // postavlja prvi radio button sa svako pitanje čekiran sem za prvo pitanje
   }
        
        /* console.log(radioOdgovori[i]); */
    

     /* for(let i=0;i<radioOdgovori.length; i++) {
        radioOdgovori[i].checked = false;
        console.log("radi");
       } */
       
}

window.addEventListener("click", ()=>{
    for(let i=0;i<radioOdgovori.length; i++) {
        if(radioOdgovori[i].checked == true) {
            
            if(pitanja[brojac].img == "fotografije/10.png" || pitanja[brojac].img == "fotografije/11.png"|| pitanja[brojac].img == "fotografije/12.png" || pitanja[brojac].img == "fotografije/13.png"){
                
                if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "narandžasta"){
                   radioOdgovori[i].parentNode.style.background = "#FF9330";
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "ljubičasta"){
                    radioOdgovori[i].parentNode.style.background = `#8513C3`;
                    radioOdgovori[i].nextSibling.style.color = "white";
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "zelena"){
                    radioOdgovori[i].parentNode.style.background = `#52DC70`
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "roze"){
                    radioOdgovori[i].parentNode.style.background = `#FF6EB4`
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "plava"){
                    radioOdgovori[i].parentNode.style.background = `#142BF9`;
                    radioOdgovori[i].nextSibling.style.color = "white";
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "braon"){
                    radioOdgovori[i].parentNode.style.background = `#7E441A`;
                    radioOdgovori[i].nextSibling.style.color = "white";
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "siva"){
                    radioOdgovori[i].parentNode.style.background = `#C3C3C3`
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "crna"){
                    radioOdgovori[i].parentNode.style.background = `#000000`;
                    radioOdgovori[i].nextSibling.style.color = "white";
                }else if(pitanja[brojac].odgovori[radioOdgovori[i].id] == "maslinasta"){
                    radioOdgovori[i].parentNode.style.background = `#96AC68`
                }
            } else{
                radioOdgovori[i].parentNode.style.background = `#C9FFFF`
                
            }        
            
        }else{
            radioOdgovori[i].parentNode.style.background = "none";
            radioOdgovori[i].nextSibling.style.color = "black";
        }
    }
});


sledecePitanje.addEventListener("click", sledeceP);

/////////////////////////////////////////////////////////////

for(let i=0; i < 5; i++){
    let odg = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = "radiiiiii"
    let img = document.createElement("img");
    odg.append(p,img);
    rezArticle.append(odg);
    console.log(":nessssstooooooo");

}




// nazalost nisam stigao da zavrsim zadatak 
//dizajn mi je odneo puno vremena i na kraju nije ostalo vremena za funkcionalnosti

function prikaziRez() {
         /* forma.innerHTML = ""; */
         /* forma.append(rezultati) */
         /* rezultati.style.display = "flex"; */
         let paragrafi = rezultati.querySelectorAll("p");
         let images = rezultati.querySelectorAll("img");
         for(let i = 0; i< odgovori.length; i++){
             paragrafi[i].innerHTML = `pitanje ${i+1}`;
             images[i].src = `fotografije/${odgovori[i]}.png`;
         }
         let inputi = forma.querySelectorAll("input");
         inputi.forEach(el=>{
            el.disabled = true;
         })
        forma.style.display = "none";
        rezultati.style.display = "flex";
        
        for(let i = 0; i<odgovori.length; i++){
             
        }
        
        bgdImage.src = `fotografije/background_rezultati.png`;
        document.getElementsByClassName("bgdImage")[0].style.opacity = "1";
        
}

function permutacija (niz) {
  for(let i = niz.length-1; i >= 0; i--){
    let pitanje = Math.floor(Math.random() * (i +1));
    let pitanje2 = niz[i];
    niz[i] = niz[pitanje];
    niz[pitanje] = pitanje2;
  }
  return niz;
}

btnIgrajPon.addEventListener("click", ()=>{
    console.log(brojac);
    permutacija(pitanja);
})