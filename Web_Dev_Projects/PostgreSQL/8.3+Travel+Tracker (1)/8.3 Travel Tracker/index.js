import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "postgres",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) = LOWER($1)",
      [input]
    );

    if (result.rows.length === 0) {
      const countries = await checkVisisted();
      return res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country does not exist, try again.",
      });
    }

    const countryCode = result.rows[0].country_code;

    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1)",
      [countryCode]
    );

    res.redirect("/");
  } catch (err) {
    const countries = await checkVisisted();

    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country has already been added.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
