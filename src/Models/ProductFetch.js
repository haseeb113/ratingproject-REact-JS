export const ForProduct = (cb) => {
    fetch('http://localhost/ratingproject/public/api/showp', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(Response => Response.json())
        .then((result) => {
            cb(result);
        })
}

export const ForRProduct = (data, cb) => {
    fetch('http://localhost/ratingproject/public/api/saveRP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(Response => Response.json())
        .then((result) => {
            cb(result);
        })
}
export const DisplayRProduct = (data, cb) => {
    fetch('http://localhost/ratingproject/public/api/ShowRID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(Response => Response.json())
        .then((result) => {
            cb(result);
        })
}
export const getbyID = (data, cb) => {
    fetch('http://localhost/ratingproject/public/api/showbyid', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then((result) => {
            cb(result);
        })
}
export const countReviews = (id, cb) => {
    fetch('http://localhost/ratingproject/public/api/countR',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(response => response.json())
        .then((result) => {
            cb(result);
        })
}