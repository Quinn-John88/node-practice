const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('server/public'));

app.get('/',(req,res) => {
    res.send('hello world!')
});

app.listen(PORT, function () {
    console.log(`listening at http://localhost:${PORT}`);
})