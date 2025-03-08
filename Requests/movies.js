// // http://www.omdbapi.com/?apikey=[188a320e]&
// function getJson(url) {
//     return fetch(url).then(resp => {
//         return resp.json(); 
//     })
// };

// const movie = document.querySelector('#movie')
// const btn = document.querySelector("#sub")
// const movieYear = document.querySelector('#movieYear')


    
// const sel = document.querySelector('#select')

// btn.onclick = (e) => {
//     e.preventDefault()
//     if (sel.value === 's'){
//         getJson(`http://www.omdbapi.com/?i=tt3896198&apikey=188a320e&s=${movie.value}&y=${movieYear.value}`).then(data =>{
//             if (data.Response === 'False'){
//                 console.log("Try again, because I cant find a movie");
//             }else if (data.Awards != '' && data.Response != 'False'){
//                 for (let i of data.Search){
//                     console.log(i.Title);
//                 }
//             }
//         })
//     }else if (sel.value === 't'){
//         getJson(`http://www.omdbapi.com/?i=tt3896198&apikey=188a320e&t=${movie.value}&y=${movieYear.value}`).then(data =>{
//             if (data.Response === 'False'){
//                 console.log("Try again, because I cant find a movie");
//             }else if (data.Awards != '' && data.Response != 'False'){
//                 console.log(data);
//                 console.log(data.Title);
//                 console.log(data.Plot);
                
//             }
//         })
//     }
// }



