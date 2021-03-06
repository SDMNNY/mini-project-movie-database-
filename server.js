const express = require ('express'); 
const mysql = require ('mysql2');

const PORT = process.env.PORT || 3001; 
const app = express(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'saadpassword',
        database: 'movie_db'
    },
    console.log('Connected to the movies_db database.')
);

// GET /api/movies 
app.get (`/api/movies`, (req, res) => {
    db.query(`SELECT * FROM movies`, function (err, results)
   {
    console.log(results);
   })
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

});