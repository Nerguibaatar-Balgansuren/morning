const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const fs = require("fs");
const { json } = require("body-parser");
// const { response } = require("express");
const uuid = require("uuid");

app.use(cors());
app.use(json());

const file = "./users.json";
const UniqRandomID = uuid.v4();

app.post("/user", (req, res) => {
    const body = req.body;

    console.log(req.body);

    fs.readFile(file, "utf-8", (readError, data) => {
        let savedData = data ? JSON.parse(data) : [];
        if (readError) {
            // response.json({
            //     status: "read file error",
            // });
        }

        const newUser = {
            id: UniqRandomID,
            username: body.username,
            
        };

        savedData.push(newUser);

        fs.writeFile(
            file,
            JSON.stringify(savedData),
            (writeError) => {
                if (writeError) {
                    response.json({
                        status: "error",
                    });
                } else {
                    response.json({
                        status: "success",
                        data: savedData,
                    });
                }
                
            } 
        );

    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});