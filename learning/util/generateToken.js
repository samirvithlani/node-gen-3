const jwt = require("jsonwebtoken");
const secret = "secret";
const generateToken = (user) => {
  return jwt.sign({ user }, secret, {
    expiresIn: "1h",
    algorithm: "HS256",
    // audience: ["http://localhost:3000"],
    // issuer: "http://localhost:3000",
    // subject: "user",
    // allowInsecureKeySizes: true,
  });
};

//validate....

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null;
  }
};

// console.log(
//   generateToken({
//     name: "raj",
//     email: "raj@gmail.com",
//     role: { id: 1, name: "admin" },
//   })
// );
// console.log(
//   validateToken(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJyYWoiLCJlbWFpbCI6InJhakBnbWFpbC5jb20iLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiYWRtaW4ifX0sImlhdCI6MTY3NDgzMTc1MSwiZXhwIjoxNjc0ODMxODExLCJhdWQiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsInN1YiI6InVzZXIifQ.J5I6BZgSV4P1xBOVK2AokGmr9o0WPBMZ6oZNLDpBE5Q"
//   )
// );

module.exports = { generateToken, validateToken };
