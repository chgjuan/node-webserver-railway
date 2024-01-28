
import express from 'express'
import * as url from 'url';
import hbs from 'hbs';
import 'dotenv/config'

// import dotenv from 'dotenv/config'


//miMiddleware
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//handlebar
hbs.registerPartials(__dirname + 'views/partials', function (err){
    
})


const port = process.env.PORT;
const app = express()
//Servir contenido estático
app.set('view engine', 'hbs');

app.use( express.static('public') );

//Esto no se muestra porque ya se uso el middleware
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Pablo',
        titulos: 'Curso NODE'
    });
})

app.get('/generico', (req, res) => {
    res.render('generico', {
        nombre: 'Juan Pablo',
        titulos: 'Curso NODE'
    });
    // res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Pablo',
        titulos: 'Curso NODE'
    });
    // res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })