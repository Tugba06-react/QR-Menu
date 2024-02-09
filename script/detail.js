/*
url'deki arama parametresine (search-param) erişme
* Js'de tarayıcı ile alaklaı verileri erişmek istiyorsak
 * window nesnesini kullanırız.
 * İçerisndeki locaiton değeri url detaylarını verir
 

 * Js'de url'deki arama parametrelerini yönetmeye yarayan
 * yerleşik bir class vardır. URLSearchParams
 

*/
// urldeki parametreleri yönetmemizi sağlaycak bir nesne oluşturduk
const params=new URLSearchParams(window.location.search)
/*
 * yukarıdaki class'dan örnek alamamız sayesinde parametrelere
 * erişmeye ve güncellemeye yarayan metheodları kullanabilceğimiz
 * bir nense oluştu bizde bu nesnenin içerisindeki get methodu ile
 * parametreler arasından isteğimizi çağırdık
 */
const paramId =params.get('id');
// sayfanın yüklenmesini izle
document.addEventListener('DOMContentLoaded', async () => {
    // 1) api'dan veirleri al
    const res = await fetch('../db.json')
    const data = await res.json()
     // 2) veriler arasında url'deki id'ye denk gelen veriyi al
     const product = data.menu.find((item)=> item.id===Number(paramId))
     renderPage(product)

    })

    const outlet= document.getElementById('outlet')
     function renderPage(product){
        outlet.innerHTML = `
        <!-- ÜST KISIM -->
        <div class="d-flex justify-content-between fs-5">
          <a href="/">
            <img width="40px" src="/images/home.png" />
          </a>
  
          <p>anasayfa / ${
            product.category
          } / ${product.title.toLowerCase()}</p>
        </div>
  
        <!-- İÇERİK KISMI -->
        <h1 class="text-center my-3">${product.title}</h1>
  
        <img
          src="${product.img}"
          class="rounded object-fit-cover shadow"
          alt="oreo"
        />
  
        <h3 class="mt-4">
          <span>Ürünün Kategorisi:</span>
          <span class="text-success">${product.category}</span>
        </h3>
  
        <h3 class="mt-4">
          <span>Ürünün Fiyatı:</span>
          <span class="text-success">${(product.price * 30).toFixed(
            2
          )} ₺</span>
        </h3>
  
        <p class="lead">
          ${product.desc}
        </p>    
      `;
  }
   



   
