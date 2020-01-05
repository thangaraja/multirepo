const fsPromises = require('fs').promises

const log = async (value, context) => {
    const valueToBeLogged = `${new Date()}---${context}---${value}\n`;
    await fsPromises.appendFile("C://logger" + "//" + "track_data.log", valueToBeLogged);
};

exports.log = log;