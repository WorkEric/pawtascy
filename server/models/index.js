'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json');
const db_conf = config[env]  // process.env.NODE_ENV === 'production' ? config.env : config.env;
const db = {};

const sequelize = new Sequelize(db_conf.database, db_conf.username, db_conf.password, {
    host: db_conf.host,
    dialect: 'mysql',
    // insecureAuth: true,
    dialectOptions: {
        // useUTC: true,
        // typeCast: function (field, next) {
        //     if (field.type === 'TIMESTAMP' || field.type === 'DATETIME' || field.type === 'DATE') {
        //         return field.string();
        //     }
        //     return next();
        // }
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // operatorsAliases: false,
    logging: false    
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
