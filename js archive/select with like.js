const express = require("express");
const db = require("../util/database");
const app = express();

// app.get('/:deWord', (req, res) => {
//   const deWord = req.params.deWord;
//   db.query(`SELECT * FROM words WHERE deWord = $deWord`, {
//       $deWord : deWord
//   }, (err, row)=>{
//     res.send(row);
//   });

  app.get('/', (req, res) => {
    db.execute("SELECT * FROM words WHERE deWord LIKE '%verkehr%'").then(result => {
      console.log("Database fetshed...");
      res.send(result[0]);
    })
    .catch(err => {
      console.log(err);
    });

  //   const showTable = results => {
  //     for (result in results) {
  //       res.setHeader("Content-Type", "text/html");
  //       res.write("<table>")
  //       res.write("<th>ID</th>")
  //       res.write("<th>Position</th>")
  //       res.write("<th>German</th>")
  //       res.write("<th>Farsi</th>")
  //       res.write("</table>")
  //       res.end();
  //     }
  //   };
});

app.listen("4000", () => {
  console.log("Server started on port 4000");
});
