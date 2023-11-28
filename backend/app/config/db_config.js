console.log("db connect")
module.exports = {

    HOST: "15.207.55.172",
    USER: "techt31",
    PASSWORD:"d0neK*waR4@61",
    // DB: "pilot",
    DB: "elearning",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

