const axios = require('axios');

exports.handler = async (event) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Data fetched successfully!",
        data: response.data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
