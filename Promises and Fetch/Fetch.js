// when we make fetch w have to decide what url we will ake request to.

url = "https://jsonplaceholder.typicode.com/posts/2222"

fetch(url)
    //.then(response => response.json) // take the response to real acutal json data from the server.
    .then(respone => console.log(respone))
    .catch(error => console.log('Error cant featch', error)) // only display if we have error number less than 300 and the domain it self breaks.