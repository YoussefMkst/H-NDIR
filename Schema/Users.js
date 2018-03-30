/// require Mongoose
var mongoose = require('mongoose');

//Define a Schema

var Schema = mongoose.Schema;

var UserSchema = new Schema({
        _id: mongoose.Types.ObjectId,
        Username: {
            type: String,
            required: true
        },
        Password: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        Lists: {
            NOT_ADMIN: {
                List: [
                    //One Item Schema
                    {
                        Item_N_Details: {
                            User: {
                                type: String,
                                required: true
                            },
                            Item_Status: {
                                type: Boolean,
                                required: true
                            },
                            Time_Update: {
                                type: Date,
                                required: true
                            },
                            Item_Name: {
                                type: String,
                                required: true
                            }
                        }
                    }
                ]
            },
            ADMIN: {
                List: [
                    {
                        Item_N_Details: {
                            User: {
                                type: String,
                                required: true
                            },
                            Item_Status: {
                                type: Boolean,
                                required: true
                            },
                            Time_Update: {
                                type: Date,
                                required: true
                            },
                            Item_Name: {
                                type: String,
                                required: true
                            }
                        }
                    }
                ]
            }
        }
    }

);
//Compile model from schema
var Users = mongoose.model('User', UserSchema);

