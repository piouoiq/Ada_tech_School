const books = [
    { id: 1, title: "JavaScript for Beginners", author: "Alice Martin", year: 2020, pages: 300, genre: "programming", rating: 4.2 },
    { id: 2, title: "Advanced React", author: "Bob Dupont", year: 2021, pages: 450, genre: "programming", rating: 4.5 },
    { id: 3, title: "Art History", author: "Claire Leroy", year: 2019, pages: 280, genre: "art", rating: 3.8 },
    { id: 4, title: "Python Data Science", author: "David Moreau", year: 2022, pages: 520, genre: "programming", rating: 4.7 },
    { id: 5, title: "Design Patterns", author: "Alice Martin", year: 2018, pages: 320, genre: "programming", rating: 4.1 },
    { id: 6, title: "Modern Painting", author: "Emma Laurent", year: 2020, pages: 190, genre: "art", rating: 3.9 }
];

//1

function authorBooks(authorName){
 for (let book of books){
    
   if (book.author == authorName){
       console.log(book.title)
    } 
 }
}
authorBooks("Alice Martin")


//  2
function averagePageGenre(genre) {
 
    let tottal = 0 ;
    let nb = 0 ;

for (let i = 0; i < books.length; i++){

   if (books[i].genre == genre){

    tottal += books[i].pages;
    nb++; 
   }
}
console.log(tottal / nb)
}

averagePageGenre("art")
averagePageGenre("programming")
 

//2 correction Mathurin

// function averagePageGenre(genre) {
//  let genreStats = {};

//     books.forEach(function(book) {
//         if (!genreStats[book.genre]){
//             genreStats[book.genre] = {totalPages:0, count:0};
//         }

//         genreStats[book.genre].totalPages += book.pages;
//         genreStats[book.genre].count += 1; 
//     }
//     )

//     let average = {};
//     for (const genre in genreStats){
//         average[genre] = Math.round(genreStats[genre].totalPages / genreStats[genre].count);
//     }
//     return average
// }
// console.log(averagePageGenre())

//3
let newest = 0

for (let i = 0; i < books.length; i++){

   if (books[i].year > newest){

    newest = books[i].year;
     
   }
  
}
 console.log(newest)

 //4

 let listOfAuthor = []

 for (let i = 0; i < books.length; i++){
 
    if (listOfAuthor.includes(books[i].author) === false){

        listOfAuthor.push(books[i].author)
    }

 }
console.log(listOfAuthor) //on ajoute .join(',') a listOfAuthor pour retourner en string plutôt qu'en 5 console log différents.

//5 
function genreList() {
 let genreGroup = {};


    for(let book of books){
        if (!genreGroup[book.genre]){
            genreGroup[book.genre] = [];
        } 
        genreGroup[book.genre].push(book);
    }

    
    return genreGroup;
}
console.log(genreList())


// 2eme méthode 
// function genreList() {
//  let genreGroup = {};

//     books.forEach(function(book) {
//         if (!genreGroup[book.genre]){
//             genreGroup[book.genre] = [];
//         } 
//         genreGroup[book.genre].push(book);
//     }
//     );
//         return genreGroup;
// }
// console.log(genreList());

