const { Sequelize } =  require('sequelize-typescript');
const { Task } =  require('../models/Task');
const { User } =  require('../models/User');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "task-container",
  models: [Task, User],
});

export default sequelize;
