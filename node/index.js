const auth = require("./auth"); // common js module
// import auth from "./auth"; //ecmascript Es module

//  so basically esma k bujnu paryo vanda there are two types of exporting files in node
//   or destrcuting garera lina pani milcah
const { signup, login } = require("./auth");
auth.signup();
auth.login();

signup();
login();
