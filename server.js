// Import required modules
const dotEnv = require('dotenv');
const express = require('express');

dotEnv.config();

const cors = require('cors');

const app = express();
let counter = 0;

counter++;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const names = ['Ryan', 'Elon', 'Mark', 'Sam'];

let i = 0;

const updateName = (req, res) => {

    if(i > names.length - 1){
        i = 0
    }

    res.send(names[i++]);
}

app.get('/getNewName', updateName)





// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
