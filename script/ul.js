import {buttonData} from './constant.js'
const ButtonsArea= document.getElementById('buttons')
const menuList = document.getElementById('menu-list')

// arayüz değişikli yapan bütün değişiklikler burada olacak.

export const renderMenuItems = (data )=>{
    // data dizisindeki her obje için kart html'i oluştur.
   // join methodu diziyi metine çevirdi
   const cardsHTML = data
   .map(
     (item) => `
     <a
       id="card"
       href="/detail.html?id=${item.id}"
       class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
     >
       <img
         class="rounded shadow img-fluid"
         src="${item.img}"
       />

       <div>
         <div class="d-flex justify-content-between">
           <h5>${item.title}</h5>
           <p class="text-success fw-bold">${(
             item.price * 30
           ).toFixed(2)}₺</p>
         </div>
         <p class="lead">
          ${item.desc}
         </p>
       </div>
     </a>`
   )
   .join('');

 // oluşturulan kartları #menuList divinin içine aktar
 menuList.innerHTML = cardsHTML;
};

//dizideki herbir eleman için ekrana buton bas fonk

export const renderButtons= (activeText)=>{
  //eski oluşturulan butonları siler yenisi oluşur böylece sayı sbt kalır.  
  ButtonsArea.innerHTML=' '

  buttonData.forEach((btn)=>{
    //1. elementi oluştur
    const buttonEle = document.createElement('button')
    //2. class belirle
    buttonEle.className = "btn btn-outline-dark"
    //data -id değerini tanımla
    buttonEle.setAttribute( 'data-id' , btn.value);
    
    //4. içindeki yazıyı belirle
    buttonEle.innerText = btn.text

    //5. eğer butonun yazısı active ile eşleşirse siyah yap
    if(btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white")
      }
    //5. butonu Html'e gönder
    ButtonsArea.appendChild(buttonEle)
  })
}
/*
<button data-id="all" class="btn btn-outline-dark">Hepsi</button>
*/