const mongoose = require('mongoose');  // connecting monogodb
const express = require('express');// connecting express
const cors = require('cors');//connecting crosss origin
const app = express();
const port = process.env.PORT || 5005;

//mongoose.connect('mongodb://localhost:27017/config')
mongoose.connect("mongodb+srv://revathip21it:FPoj79l3s1rLlri4@dem1.4so2efq.mongodb.net/?retryWrites=true&w=majority&appName=dem1")

    .then(() => {
        console.log('Connected to  database');
    })
    .catch((err) => {
        console.error(err);
    });

const DBSchema = new mongoose.Schema({

    name: { type: String, require: true },
    email:{type:String},
    password:{type:String},
    confirmPassword:{type:String}
});

const DBModel = mongoose.model('student', DBSchema);

app.use(express.json());
app.use(cors());
app.post('/posting', async (req, resp) => {
    try {
        const user = new DBModel(req.body);
        const results = await user.save();
        const datasending = results.toObject();
        //text string
        // converting all datas to obj
        resp.send(datasending);
    } catch (e) {
        console.error(e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.get('/getting', async (req, resp) => {
    try {
        const users = await DBModel.find({}, 'todo');
        resp.json(users);
    } catch (e) {
        console.error(e);
        resp.status(500).send('Failed to retrieve user data');
    }
});

app.put('/updating/:id', async (req, res) => {
    const { id } = req.params;
    const { todo } = req.body;

    try {
        const updatedTodo = await DBModel.findByIdAndUpdate(
            id,
            { todo },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).send('Todo not found');
        }

        res.json(updatedTodo);
    } catch (error) {
        console.error('Failed to update todo:', error);
        res.status(500).send('Failed to update todo');
    }
});



app.delete('/deleting/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const result = await DBModel.findByIdAndDelete(id);

        if (!result) {
            return resp.status(404).send('Todo not found');
        }

        resp.send('Todo deleted successfully');
    } catch (e) {
        console.error(e);
        resp.status(500).send('Failed to delete todo');
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
