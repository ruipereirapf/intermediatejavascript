// async await POST


const getData = async () => {
    try {
        const response = await fetch ('https://api-to-call.com/endpoint', {                 //
            method: 'POST',                                                                 // sends request
            body: JSON.stringify({id: 200})                                                 //
        });                                                                                 // 
        
        if (response.ok) {                                                                  //
            const jsonResponse = await response.json();                                     // handles response if successful
            //Code to execute with jsonResponse                                             //
        }
        
        throw new Error('Request failed!');                                                 //
    } catch (error) {                                                                       // handles response if successful
        console.log(error);                                                                 //
    }
}