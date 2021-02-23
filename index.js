const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({message: 'Olá mundo'});
})

app.listen(4001, ()=>{
    console.log('Porta 4001')
})