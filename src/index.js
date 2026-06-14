import dotenv from 'dotenv';
dotenv.config();

import app from './app.js'
import connectDB from './db/index.js';

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=> {
    res.send("Home Page")
})

connectDB()
.then(()=> {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((err) => {
    console.error('Failed to connect to the database', err);
    process.exit(1);
});