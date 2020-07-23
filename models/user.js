'use strict'


module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {

        user_ID : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },

            lastname : {
                type : DataTypes.STRING,
                allowNull: false
            },
        
            firstname : {
                type: DataTypes.STRING,
                allowNull: false,   
            },

            pseudo : {
                type: DataTypes.STRING,
                allowNull: false,   
            },

            email : {
                type : DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate : {
                    isEmail: true
                }
            },
    
            password : {
                type : DataTypes.STRING,
                allowNull: false
            },

            bio : {
                type : DataTypes.STRING,
                validate : {
                    max : 255,
                }
            },
            avatar : {
                type : DataTypes.STRING,
            },
    
            user_isAdmin : {
                type : DataTypes.BOOLEAN,
                allowNull : false,
                defaultValue : 0
            },
            });

            
        User.associate = models => {
                User.hasOne(models.Pal)        
            }
            return User;
        }