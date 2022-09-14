const hamb = document.querySelector(".hamb");

hamb.addEventListener("click",(e)=>{
  if(e.target.classList.contains("hambclick")){
    e.target.classList.remove("hambclick")
  }else{
    e.target.classList.add("hambclick")
  }
})


const eksi = document.querySelector(".lower")
const arti = document.querySelector(".higher")
const adet = document.querySelector(".adet")
const left = document.querySelector(".leftside")
const pay = document.querySelector(".pay")
const ekle = document.getElementById("ekle")
const sonuc = document.querySelector(".sonuc")
const sil = document.querySelector(".sil")

left.addEventListener("click",(e) => {
    if(e.target.classList.contains("lower") && adet.innerText>=1){
      adet.innerText -- ;
    }else if(e.target.classList.contains("higher")){
      adet.innerText ++ ;
      
    }
})

ekle.addEventListener("click",() => {
 sonuc.innerText = `${adet.innerText} = $${125*adet.innerText}`;
})

sil.addEventListener("click",()=>{
    console.log(e.target);
  sonuc.innerText =""
})