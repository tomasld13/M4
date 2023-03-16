const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Character', {
    code: {
      type: DataTypes.STRING(5),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNule: false
    },
    age: {
      type: DataTypes.INTEGER,
    },
    race: {
      type: DataTypes.ENUM("Human", "Elf", "Machine", "Demon", "Animal", "Other"),
      defaultValue: "Other"
    },
    hp: {
      type: DataTypes.FLOAT,
      allowNule: false
    },
    mana: {
      type: DataTypes.FLOAT,
      allowNule: false
    },
    date_added: {
      type: DataTypes.DATEONLY,
      defaultValue : DataTypes.NOW
    }
  },{
    timestamps: false
  })
}