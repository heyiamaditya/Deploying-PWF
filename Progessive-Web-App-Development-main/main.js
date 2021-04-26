if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("index.js").then (registration =>{
        console.log(" Registered!");
        console.log(registration);
    
    }) .catch(error => {
        console.log("Registration failed!");
        console.log(error);
    }
        );
}