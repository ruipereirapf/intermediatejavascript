//fetch GET


fetch('http://api-to-call.com/endpoint').then(response => {                     // sends request

    if (response.ok) {                                                          //
        return response.json();                                                 // converts response object to JSON
    }                                                                           //

    throw new Error('Request failed!');                                         // handles errors
}, networkError => console.log(networkError.message)                            //

).then(jsonResponse => {                                                        //
    //Code to execute with jsonResponse                                         // handles success
});                                                                             //