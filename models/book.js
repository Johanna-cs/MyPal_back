'use strict'


module.exports = (sequelize, DataTypes) => {

    const Book = sequelize.define('Book', {

        book_ID : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },

            title : {
                type : DataTypes.STRING,
                allowNull: false
            },
        
            category : {
                type: DataTypes.STRING,
                allowNull: false,   
            },

            cover : {
                type: DataTypes.STRING,
                allowNull: false,   
            },
    
    
            });

            
        // Book.associate = models => {
        //         Book.hasMany(models.Pal, {foreignKey:'book_ID' })        
        //     }
            return Book;
        }