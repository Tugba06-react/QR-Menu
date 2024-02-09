//Diğer dosyalardan alınan veriler
import{renderMenuItems, renderButtons} from "./script/ul.js"
const buttonArea = document.getElementById('buttons')

import { buttonData } from "./script/constant.js";
//menü verileri jsan dosyasından çeken fonksiyon
// datayı global scope'da tanımla . global scope da h-tanımlanana her yerden ulaşılır
let data; 

async function fetchMenu() {
    const res = await fetch("./db.json");
    // json verisini js'e çevirir.
    data = await res.json()
    // console.log (data)

}
//olay izle
window.addEventListener ('DOMContentLoaded' ,  ()=>{
  //ekrana butonları bas
    renderButtons('Hepsi')

    // verileri çeken fonksiyonu çalıştır    
    fetchMenu()
    // başarılı olursa kartları çeken fonksiyonu çalıştır
    .then(()=> renderMenuItems(data.menu))
} );

//butonlara tıklanma olayını izle

buttonArea.addEventListener("click" , (event)=>{
   
    if (event.target.id == 'buttons') return; 

    renderButtons(event.target.innerText)
    
    const selectedCategory = event.target.dataset.id
    if (selectedCategory === 'all') {
        renderMenuItems(data.menu)
    } else {
        const filtered = data.menu.filter(
            (item)=> item.category === selectedCategory) 
            renderMenuItems(filtered) 
        }
 
})




