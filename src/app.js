const express = require("express"); 
const router = require("./routes/routes");
const path = require('path');

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use("/api", router);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});

