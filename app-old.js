import http from 'node:http';


const server = http.createServer((req, res) =>{
    // console.log(req); 
    // res.writeHead(200, {'Content-Type': 'application/json'});  
    // res.setHeader('Content-Disposition', 'attachment; filename = lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});  


    res.write( 'Hola Mundo');
    res.end();

})

server.listen(8000);

console.log('Escuchando en el puerto', 8080);
