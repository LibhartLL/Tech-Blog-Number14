const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}
//define columns
User.init(
  {
    id: {//define id column
        type: DataTypes.INTEGER, //special datatypes object of sequelize to provide what type of date it is
        allowNull: false, //equal to sql not null
        primaryKey: true, //instruct that this is the primaryKey
        autoIncrement: true //turn on auto increment
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1] //this means the password must be at least 1 character long
        }
    }
  },
  {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
            
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },

    sequelize, //pass in sequelize connection
    timestamps: false,//do not auto create timestamp
    freezeTableName: true,//do not pluralize the name of the db
    underscored: true,//use underscore instead of camelcase
    modelName: 'user'//keeps our model name lowercase in db
  }
);

module.exports = User;