// async function getJSON(url){
//     const resp = await fetch(url)
//     return await resp.json()
// }

// getJSON("https://dummyjson.com/posts").then( data => {

//     for (let post of data.posts){
//         let post_article = document.createElement("article")

//         let header = document.createElement("h2")
//         header.textContent = post.id + ") " + post.title

//         let content = document.createElement("p")
//         content.textContent = post.body

//         post_article.append(header, content)
//         document.querySelector("body").append(post_article)
        
//     }
// })