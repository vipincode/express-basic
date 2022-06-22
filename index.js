import express, { request, response } from 'express';
import data from './data/mock.json';

const app = express();

const PORT = 3000;

// Using the public folder at root label to acces image
app.use(express.static('public'));

// using the images folder at the route /images

app.use('/images', express.static('images'));

//GET with routing parameters

app.get('/class/:id', (request, response) => {
  const studentId = Number(request.params.id);
  const student = data.filter((student) => student.id === studentId);
  response.send(student);
});

// Route chaining
app
  .route('/class')
  .get((request, response) => {
    response.send('Retrive class info!');
  })
  .post((request, response) => {
    response.send('Create class info!');
  })
  .put((request, response) => {
    response.send('Update class info!');
  });

// GET
// app.get('/', (request, response) => {
//   response.json(data);
// });

// GET- redirect method
// app.get('/redirect', (request, response) => {
//   response.redirect('https://www.linkedin.com/');
// });

// app.get(
//   '/next',
//   (request, response, next) => {
//     console.log('the response will e sent by next function');
//     next();
//   },
//   (request, response) => {
//     response.send('I just setup a route with second callback');
//   }
// );
// POST
// app.post('/create', (request, response) => {
//   response.send('This is a POST request /create');
// });

// // GET
// app.put('/edit', (request, response) => {
//   response.send('This is a PUT request /edit');
// });

// // GET
// app.delete('/delete', (request, response) => {
//   response.send('This is a DELETE request /delete');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
  // console.log(data);
});
