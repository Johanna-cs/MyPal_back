'use strict'


module.exports = (sequelize, DataTypes) => {

    const Pal = sequelize.define('Pal', {

        pal_ID : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },
        book : {
            type : DataTypes.STRING,
            allowNull: false
        },
        // read : {
        //     type : DataTypes.BOOLEAN,
        //     defaultValue : 0
        // },
    })
    Pal.associate = models => {
        Pal.belongsTo(models.User, {foreignKey:'user_ID' }), 
        Pal.hasMany(models.Book, {foreignKey:'pal_ID' })        
    }
    return Pal
}
