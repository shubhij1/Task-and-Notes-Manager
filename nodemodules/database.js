var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Title text UNIQUE, 
            Description text, 
            DueDate text,
            Status text,
            Priority text
            )`, (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (Title, Description,DueDate, Status, Priority) VALUES (?,?,?,?,?)'
                db.run(insert, ["notes","related to maths","01-05-20","incomplete", "low"])
                db.run(insert, ["science","related to science","17-04-20","complete","high"])
            }
        }) 
    }
})


module.exports = db
