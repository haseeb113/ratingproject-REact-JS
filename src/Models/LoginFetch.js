export const Forsignup= (data,cb)=>
{
    fetch('http://localhost/ratingproject/public/api/SaveU',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(Response =>Response.json())
    .then((result)=>{
        cb(result);
    })
}

export const Forlogin =(data,cb)=>
{
    fetch('http://localhost/ratingproject/public/api/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(Response =>Response.json())
    .then((result)=>
    {
        cb(result);
    })
}