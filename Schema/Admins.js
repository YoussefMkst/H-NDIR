/// require Mongoose
var mongoose = require('mongoose');

//Define a Schema

const Schema = mongoose.Schema;

var AdminSchema = new Schema({
   
    USER_ID: {
        Lists: [
            {
                List: {
                    List_Id: {
                        type: String
                    },
                    List_Name: {
                        type: String,
                        required: true
                    },
                    New Field: {
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
                }
            }
        ]
    }
});
//Compile model from schema
var Admins = mongoose.model('Admins', AdminSchema);