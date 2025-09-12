const express = require('express');
const app = express();
const PORT = 3000;


const toDoRoute = require('./routes/toDoRoutes');

app.use('/todo',toDoRoute);

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})