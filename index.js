const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const toDoRoute = require('./routes/toDoRoutes');

app.use('/todos',toDoRoute);

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})