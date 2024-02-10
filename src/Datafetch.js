const Datafetch = (url, callback) => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            callback(data); // Call the callback function with the fetched data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

export default Datafetch;