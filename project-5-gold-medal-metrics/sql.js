var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./gold_medals.sqlite');

/*
Returns a SQL query string that will create the Country table with four columns: name (required), code (required), gdp, and population.
*/

const createCountryTable = () => {

  const sqlDo = 'CREATE TABLE Country(name varchar(255) NOT NULL, code int NOT NULL, gdp int, population, int);'
  return sqlDo;


};

/*
Returns a SQL query string that will create the GoldMedal table with ten columns (all required): id, year, city, season, name, country, gender, sport, discipline, and event.
*/

const createGoldMedalTable = () => {
  const sqlDo = 'CREATE TABLE GoldMedal(year int NOT NULL, name varchar(255) NOT NULL, event varchar(255) NOT NULL, gender varchar(255) NOT NULL, sport varchar(255) NOT NULL ,discipline varchar(255) NOT NULL ,city varchar(255) NOT NULL , country varchar(255) NOT NULL, season varchar(255) NOT NULL);'
  return sqlDo;
};

/*
Returns a SQL query string that will find the number of gold medals for the given country.
*/

const goldMedalNumber = country => {
    const sqlDo =`SELECT COUNT(*) as 'count' FROM GoldMedal WHERE country = '${country}';`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the year where the given country 
won the most summer medals, along with the number of medals aliased to 'count'.
*/

const mostSummerWins = country => {
    const sqlDo =`
    SELECT year, COUNT(*) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}' and season = 'Summer'
    GROUP BY year
    ORDER BY COUNT DESC 
    LIMIT 1;`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the year where the given country 
won the most winter medals, along with the number of medals aliased to 'count'.
*/

const mostWinterWins = country => {
      const sqlDo =`
    SELECT year, COUNT(*) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}' and season = 'Winter'
    GROUP BY year
    ORDER BY COUNT DESC 
    LIMIT 1;`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the year where the given country 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestYear = country => {
    const sqlDo =`
    SELECT year, COUNT(*) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}' and season = 'Summer'
    GROUP BY year
    ORDER BY COUNT DESC 
    LIMIT 1;`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the discipline this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestDiscipline = country => {
    const sqlDo =`
    SELECT discipline, COUNT(*) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}'
    GROUP BY discipline
    ORDER BY COUNT DESC 
    LIMIT 1;`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the sport this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestSport = country => {
    const sqlDo =`
    SELECT sport, COUNT(*) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}'
    GROUP BY sport
    ORDER BY COUNT DESC 
    LIMIT 1;`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the event this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestEvent = country => {
    const sqlDo =`
    SELECT event, COUNT(*) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}'
    GROUP BY event
    ORDER BY COUNT DESC 
    LIMIT 1;`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the number of male medalists.
*/

const numberMenMedalists = country => {
    const sqlDo =`
    SELECT COUNT(DISTINCT name) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}' and gender = 'Men';`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the number of female medalists.
*/

const numberWomenMedalists = country => {
    const sqlDo =`
    SELECT COUNT(DISTINCT name) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}' and gender = 'Women';`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the athlete with the most medals.
*/

const mostMedaledAthlete = country => {
    const sqlDo =`
    SELECT name, COUNT(*) as 'count' 
    FROM GoldMedal 
    WHERE country = '${country}'
    GROUP BY name
    ORDER BY COUNT DESC 
    LIMIT 1;`;
    return sqlDo;
};

/*
Returns a SQL query string that will find the medals a country has won
optionally ordered by the given field in the specified direction.
*/

const orderedMedals = (country, field, sortAscending) => {

let orderBy = '';

if (field){
  if(sortAscending){
    orderBy = `ORDER BY ${field} ASC;`
  }else{
    orderBy = `ORDER BY ${field} DESC;`
  }
}

const sqlDo = `SELECT *
    FROM GoldMedal 
    WHERE country = '${country}'
    ${orderBy};
    `

return sqlDo;


};

/*
Returns a SQL query string that will find the sports a country has
won medals in. It should include the number of medals, aliased as 'count',
as well as the percentage of this country's wins the sport represents,
aliased as 'percent'. Optionally ordered by the given field in the specified direction.
*/

const orderedSports = (country, field, sortAscending) => {
  return;
};

module.exports = {
  createCountryTable,
  createGoldMedalTable,
  goldMedalNumber,
  mostSummerWins,
  mostWinterWins,
  bestDiscipline,
  bestSport,
  bestYear,
  bestEvent,
  numberMenMedalists,
  numberWomenMedalists,
  mostMedaledAthlete,
  orderedMedals,
  orderedSports
};
