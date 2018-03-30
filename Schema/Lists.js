/// require Mongoose
var mongoose = require('mongoose');

//Define a Schema
var Schema = mongoose.Schema;

var ListSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    {
    List: {
        List_Name: {
            type: String,
            required: true
        },
        Users: [
            {
                type: String
            }
        ],
        List Elements: {
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
        },
        Admin: {
            type: String,
            required: true
        }
    }
}
});
//Compile model from schema
var Lists = mongoose.model('Lists', ListSchema);