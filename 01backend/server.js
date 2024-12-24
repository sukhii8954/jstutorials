import express from 'express';  // module js import
//   include type : module in package to use module js 
const app = express();

app.get('/', (req, res)=> {
    res.send('server is ready');
});

// get a list of 5 jokes
// url standard should  be setup like this
app.get('/api/jokes', (req, res)=> {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: '18+ joke : nineteen',
        },
        {
            id:2,
            title: 'Another joke',
            content: 'this is another joke',
        },
        {
            id:3,
            title: 'third joke',
            content: 'this is third joke',
        },
        {
            id:4,
            title: 'dank joke',
            content: 'this is dank joke like samay raina',
        },
        {
            id:5,
            title: 'nerd joke',
            content: 'carryminati joke',
        },
    ]
   
    res.send(jokes);

})

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`server at http://localhost:${port}`);
});