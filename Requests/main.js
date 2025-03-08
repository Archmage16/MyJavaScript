function getJson(url, method = "GET", body = null) {
    return fetch(url , {
        method,
        headers: {"Content-Type": "application/json"},
        body: body ? JSON.stringify(body) : null
    })
        .then(resp => {
            if (!resp.ok){
                throw new Error(`Error: ${resp.status}`)
            }
            return resp.json();
        });
};

getJson("https://jsonplaceholder.typicode.com/posts/1").then(data => {console.log(data);})

getJson("https://jsonplaceholder.typicode.com/posts").then(data => {
    const filtered = data.filter(post => post.userId === 4)
    console.log(filtered);
})
//Phantom data
// getJson("https://jsonplaceholder.typicode.com/posts", "POST",{
//     title : "fqw", 
//     body : "dfqwed",
//     userId: 1
// }).then(data => {
//     console.log(data);
// })

/////// PUT
// getJson("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
//     title: "dfwed",
//     body: "eeee",
//     userId: 1
// }).then(data => {
//     console.log(data);
// })


/////// PATCH
// getJson("https://jsonplaceholder.typicode.com/posts/1", "PATCH", {
//     body: '10fdjed'
// }).then(datas => {
//     console.log(datas);
// })

/////// DELETE
// getJson("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then(() => {
//     console.log("Deleted");
// })


