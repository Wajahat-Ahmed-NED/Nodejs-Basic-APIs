const gophishKey = require("../models/gophishKey");



exports.getGophishKey = async (req, res) => {
    try {
        const data = await gophishKey.find({});
        const response = {
            message: "Success",
            data: data
        }
        res.status(200).json(response);
    }
    catch (error) {
        const response = { message: "Something went wrong"}
        res.status(500).json(response)
    }
}

exports.createGophishKey = async (req, res) => {


        try {
            const { key,ip } = req.body;


            const userToRegister = new gophishKey({
                key,
                ip
            });

            const user = await userToRegister.save();
            return res.status(201).json({ user: user, auth: true ,message: 'Successfully Registered'});
        }
        catch (err) {
            const response = {
                message: "Something went wrong"
            }
            return res.status(500).json(response);
        }

    
}

exports.editGophishKey = async (req, res) => {


        try {
            const { key ,ip} = req.body;
            console.log(key,ip)
            await gophishKey.updateOne(
                { _id: "64f641b3215b9b76212f2bf8" },
                {
                  key,
                  ip
                  
                }
              );

            // const userToRegister = new gophishKey({
            //     key
            // });

            // const user = await userToRegister.save();
            return res.status(201).json({ message: 'Successfully Updated'});
        }
        catch (err) {
            const response = {
                message: "Something went wrong"
            }
            return res.status(500).json(response);
        }

    
}


