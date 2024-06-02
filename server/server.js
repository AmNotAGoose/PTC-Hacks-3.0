const express = require('express');
const db = require('./db/connection.js');
const cors = require('cors');
const Foods = require('./models/Foods.js');
const Vendors = require('./models/Vendors.js');
const { Configuration, OpenAI } = require("openai"); 
require("dotenv").config(); 


const getAiResult = async (prompt) => { 
    const openai = new OpenAI({organization: process.env.OPENAI_ORG_ID, project: process.env.OPENAI_PROJECT_ID, apiKey: process.env.OPENAI_SECRET_KEY});
    console.log(prompt)
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo-1106",
      });
    
    console.log(completion.choices[0].message.content)
    return completion.choices[0]
}; 

// getAiResult("hi there how are you");

// console.log(getAiResult("hi there how are you"))

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/foods', async (req, res) => {
    try {
        const results = await Foods.find({});
        console.log('fetched foods')
        res.json(results);
    } catch (error) {
        console.error('Error fetching foods:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/vendors', async (req, res) => {
    try {
        const results = await Vendors.find({});
        console.log('fetched vendors')
        res.json(results);
    } catch (error) {
        console.error('Error fetching vendors:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/getvendor/:vendorId', async (req, res) => {
    const vendorId = req.params.vendorId;
    try {
        const result = await Vendors.findOne({ vendorId: vendorId });
        if (!result) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        console.log('Fetched vendor with vendorId:', vendorId);
        res.json(result);
    } catch (error) {
        console.error('Error fetching vendor:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/suggest', async (req, res) => {
    try {
        const results = await Foods.find({});
        console.log(req)
        const prompt = "Suggest what ingredients this meal is made of: " + req.query.newFood + ", while only picking from this list of foods: " + results.map(result => result.name) + ". ONLY INCLUDE A COMMA SEPERATED LIST AS YOUR RESPONSE, DONT ADD ANY EXTRA INFO. DO NOT PUT A PERIOD OR ANY PUNCTUATION.";
        const aiResult = await getAiResult(prompt);
        console.log('fetched suggestion:' + aiResult)
        res.json(aiResult);
    } catch (error) {
        console.error('Error fetching foods:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
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

