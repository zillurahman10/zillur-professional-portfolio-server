const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Welcome to zillur portfolio server 😀')
})

// zillurhero40
//QmWNiC5V8cbMcltf

const uri = 'mongodb+srv://zillurhero40:QmWNiC5V8cbMcltf@cluster0.vssxr3h.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function server() {
    try {
        await client.connect();
        console.log('database is connected succeessfully 🔥');


    } catch (err) {
        console.log(err);
    }
}

server()



app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})