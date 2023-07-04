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

const portfolio = [
    {
        name: 'Coffee Buddy',
        technologies: 'ReactJS, Javascript, NodeJS, ExpressJS, MongoDB',
        img: '',
        shortDescription: ''
    }
]


async function server() {
    try {
        await client.connect();
        console.log('database is connected succeessfully 🔥');
        const portfolioCollection = client.db('zillur-rahman').collection('portfolio')

        app.get('/portfolios', async (req, res) => {
            const query = {}
            const cursor = portfolioCollection.find(query)
            const result = await cursor.toArray()
            res.send(result)
        })

    } catch (err) {
        console.log(err);
    }
}

server()



app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})