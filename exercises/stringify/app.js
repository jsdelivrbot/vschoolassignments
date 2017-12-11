
let endpoint = "http://localhost:8080/monkeys"
let query = {
    color: "black",
    species: "howler"
}
console.log(stringifyUrl(endpoint, query));


function stringifyUrl(url, queries){
    let propNames = (Object.getOwnPropertyNames(queries));
    let queryStrings = propNames.map(propName => {
        return propName + "=" + queries [propName]
    });
    return url + "?" + queryStrings.join("&");
}

const urlWithQuery = "http://localhost:8080/monkeys?color=black&species=howler"
function extractQueries(url) {
    let querySet = {};
    let queries = url.slice(url.indexOf("?")+1, url.length);
    let queriesArr = queries.split("&");
    queriesArr.map(singleQuery=>{
        querySet[singleQuery.split("=")[0]] = singleQuery.split("="[1])
    })
    return querySet;
}
console.log(extractQueries(urlWithQuery));




//Bob's solution
// let endpoint = "http://localhost:8080/monkeys"
// let query = {
//     color: "black",
//     species: "howler"
// }
// console.log(stringifyUrl(endpoint, query));
//
// function stringifyUrl(endpoint, query){
//     if (Object.keys(query).length === 0) {
//       return endpoint;
//     }
//     endpoint += "?";
//     for(let prop in query) {
//         endpoint += `${prop}=${query[prop]}&`
//     }
//     return endpoint.slice(0, -1);
// }
