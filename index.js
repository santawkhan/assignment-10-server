const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/chef.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/chefData', (req, res) => {
    res.send(chefData);
})
app.get("/chefData/:id", (req, res) => {
    const id = req.params.id;
    const item = chefData?.find(pd => pd.id == id)

})
app.listen(port, () => {
    console.log(`Chef Server is Running:${port}`)
})
