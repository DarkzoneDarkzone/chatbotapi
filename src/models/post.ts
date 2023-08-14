import { Sequelize, DataTypes } from "sequelize"
import { sequelize } from "../util/database"

export const Post = sequelize.define('Post',
{
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    isQuestion: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    display: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    sequelize,
    tableName: 'posts',
    // timestamp: false,
})