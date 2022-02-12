let articles = [];

function listar() {

    let NewArt = document.getElementById("NewArticulo").value;
    if (NewArt == '') return;

    articles.push(NewArt);
    let divArticulo = document.getElementById("articulos");
    divArticulo.innerHTML="";
    for (x of articles) {
        divArticulo.innerHTML+= `
      <div class="card text-white bg-secondary mb-3 " style="max-width: 18rem;">
          <div class="card-header">Articulo</div>
            <div class="card-body">
               <h5 class="card-title">${x}</h5>
               <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quasi?</p>
           </div>
     </div>`
    }
    document.getElementById("NewArticulo").value="";

}

