const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("VIT Full Stack API Challenge is running!");
});

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: "simran_gupta_29082025",
        error: "Invalid input format. 'data' key with an array is required.",
      });
    }

    const user_id = "simran_gupta_29082025";
    const email = "simrangupta.space@gmail.com";
    const roll_number = "22BCY10028";

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alphabet_string = "";

    // Iterate over the input data array to categorize each element
    data.forEach((item) => {
      if (!isNaN(parseFloat(item)) && isFinite(item)) {
        // Check if it's a number
        const num = Number(item);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(String(num));
        } else {
          odd_numbers.push(String(num));
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        // Check if it's a string of alphabets
        alphabets.push(item.toUpperCase());
        alphabet_string += item;
      } else {
        // Otherwise, it's a special character
        special_characters.push(item);
      }
    });

    //Logic for the alternating caps string
    const reversed_alphabets = alphabet_string.split("").reverse().join("");
    let concat_string = "";
    for (let i = 0; i < reversed_alphabets.length; i++) {
      if (i % 2 === 0) {
        concat_string += reversed_alphabets[i].toUpperCase();
      } else {
        concat_string += reversed_alphabets[i].toLowerCase();
      }
    }

    //response object
    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string,
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      user_id: "simran_gupta_29082025",
      error: `An unexpected error occurred: ${error.message}`,
    });
  }
});

module.exports = app;
