const express = require('express');
// const db = require('./db/connection.js');
// const cors = require('cors');
const Foods = require('./models/Foods.js');
const { Configuration, OpenAI } = require("openai"); 
require("dotenv").config(); 


const openai = new OpenAI({organization: process.env.OPENAI_ORG_ID, project: process.env.OPENAI_PROJECT_ID, });

let getAiResult = async (prompt) => { 
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo-1106",
      });

}; 


//express

const app = express();
// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// app.get('/api/protected/messages', async (req, res) => {
//     try {
//         const results = await Message.find({});
//         res.json(results);
//     } catch (error) {
//         console.error('Error fetching messages:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// init servers

const APP_PORT = process.env.PORT || 30301;

app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
});

