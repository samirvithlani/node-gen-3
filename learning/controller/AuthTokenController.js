const AuthTokenSchema = require("../model/AuthTokenSchema");
const generateString = require("../util/generateString");

exports.createAuthToken = (req, res) => {

    exposedKey = generateString.generateString(10);
    var tokenData = {
        token: req.body.token,
        user: req.body.user,
        secret: req.body.secret,
        exposedKey: exposedKey,
    }
    const authToken = new AuthTokenSchema(tokenData);
    authToken.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "Error in saving data",
            });
        } else {
            res.status(201).json({
                data: data,
                message: "Data saved successfully",
            });
        }
    });
};
