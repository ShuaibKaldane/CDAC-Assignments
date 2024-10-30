// Q1
function processData(inputString, callback) {
    const result = callback(inputString);
    console.log(result);
}


const myString = "hello world";
processData(myString, function(str) {
    return str.toUpperCase();
});


// Q2
function forEachElement(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

const array = [2, 4, 6, 8];

forEachElement(array, (element, index) => {
    console.log(`Index ${index}: ${element * 2}`);
});

forEachElement(array, (element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});


// Q3
function fetchData(url, callback) {
    setTimeout(() => {
        // Simulate a response string
        const response = `Response from ${url}`;
        // Call the callback with the response
        callback(response);
    }, 2000); 
}

fetchData('https://example.com', (response) => {
    console.log(response);
});

// Q4
function fetchData(url, callback) {
    setTimeout(() => {
        const isError = Math.random() > 0.5;
        
        if (isError) {
            callback('Error: Network request failed');
        } else {
            
            const response = `Response from ${url}`;
            
            callback(null, response);
        }
    }, 2000); 
}
fetchData('https://example.com', (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});


// Q5
function fetchData(url, callback) {
    
    setTimeout(() => {
        // Simulate an error condition (for example, a 50% chance of an error)
        const isError = Math.random() > 0.5;
        
        if (isError) {
          
            callback('Error: Network request failed');
        } else {
          
            const response = `Response from ${url}`;
            
            callback(null, response);
        }
    }, 2000);
}
function processData(data, callback) {
    
    setTimeout(() => {
        
        const processedData = data.toUpperCase();
        
        callback(processedData);
    }, 1000); 
}
const url = 'https://example.com';

fetchData(url, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Fetched data: ${response}`);
        processData(response, (processedData) => {
            console.log(`Processed data: ${processedData}`);
        });
    }
});


