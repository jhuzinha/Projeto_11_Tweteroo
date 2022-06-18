import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());

const userData = []
const tweets = []
    

app.post("/sign-up", (req, res) => {
        const user = { ...req.body }
        userData.push(user)
        res.status(201).send("OK")
    })

app.post("/tweets", (req, res) => { 
    const tweet = req.body
    for(let i = 0; userData.length > i; i++){
        if (tweet.username  === userData[i].username) {
            tweet["avatar"] = userData[i].avatar
        }
    }
    tweets.unshift(tweet)
    res.status(201).send("OK")
})



app.listen(5000)