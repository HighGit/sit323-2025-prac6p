const express = require("express");
const path = require('path');

//Add Two Numbers Function
const app = express();
const validate = (n1, n2) => {
    if (isNaN(n1) || isNaN(n2)) {
        return false;
    } else return true;
}
const add = (n1, n2) => {
    return n1 + n2;
};

const subtract = (n1, n2) => {
    return n1 - n2;
}

const multiply = (n1, n2) => {
    return n1 * n2;
}

const divide = (n1, n2) => {
    return n1 / n2;
}

//Route Handling
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/add", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    if (!validate(n1, n2)) {
        return res.status(400).json({ statuscode: 400, message: "Invalid input. Please enter valid numbers." });
    }

    const result = add(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/subtract", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    if (!validate(n1, n2)) {
        return res.status(400).json({ statuscode: 400, message: "Invalid input. Please enter valid numbers." });
    }

    const result = subtract(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/multiply", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    if (!validate(n1, n2)) {
        return res.status(400).json({ statuscode: 400, message: "Invalid input. Please enter valid numbers." });
    }

    const result = multiply(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/divide", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    if (!validate(n1, n2)) {
        return res.status(400).json({ statuscode: 400, message: "Invalid input. Please enter valid numbers." });
    } else if (n2 == 0)
    {
        return res.status(400).json({ statuscode: 400, message: "Invalid input. Can't divide by 0" });
    }

    const result = divide(n1, n2);
    res.json({ statuscode: 200, data: result });
});


//Server setup and listening
const port = process.env.PORT || 3040;
app.listen(port, '0.0.0.0', () => {
    console.log("hello i'm listening to port " + port);
});
