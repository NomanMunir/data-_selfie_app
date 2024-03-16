const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening to port 3000'))
app.use(express.static('public'));
app.use(express.json({ size: '1mb' }));

const database = new Datastore('database.db')
database.loadDatabase();   

app.post('/api', (request, response) => {
    const data = request.body;
    // const timeStamp = Date.now();
    // data.timeStamp = timeStamp;
    database.insert(data)
    response.json({
        status: 'Success',
        timeStamp: data.timeStamp,
        latitude: data.lat,
        longitude: data.lon
    })
})

// database.find({ Text: '' }, function (err, docs) {
//     docs.forEach(v=>console.log(v))||console.log(err)
//     // docs is an array containing documents Mars, Earth, Jupiter
//     // If no document is found, docs is equal to []
// });