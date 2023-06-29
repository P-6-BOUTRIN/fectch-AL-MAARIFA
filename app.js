
// // 1 exemple  Récupérer un objet
// fetch("https://jsonplaceholder.typicode.com/photos/1")
// // Créer la reponse
// .then((reponse )=> reponse.json())
// .then((json)=> creerImage(json.url))
// // Créer une image  et afficher une image
// function creerImage (str){
// let simg = document.createElement("img")
// simg.setAttribute("src",str);
// document.body.appendChild(simg);
// }


// Récupérer plusieurs photos
fetch("https://jsonplaceholder.typicode.com/photos")
.then((reponse )=> reponse.json())
.then((json)=> creerImage(json))
// Créer un tableau et afficher plusieurs images
function creerImage (tableau){
// Faire une itération avec la boucle for
for(item of tableau){
    let simg = document.createElement("img")
    simg.setAttribute("src", item.url);
    simg.setAttribute("width", "100px");
    simg.setAttribute("style", "border: solid 2px red;");
    simg.setAttribute("style","margin: 20px;")

    
    document.body.appendChild(simg);

}
    }
    
