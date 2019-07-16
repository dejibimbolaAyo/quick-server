import { isDate } from "moment";
module.exports = {
    fields: {
        jamiiId: "varchar",
        memberType: "varchar",
        firstName: "varchar",
        lastName: "varchar",
        phoneNo: "varchar",
        email: "varchar",
        password: "varchar",
        dob: {
            type : "varchar",
            rule : {
                validator : function(value){ return isDate(value) },
                message   : 'Please enter a valid date'
            }
        },
        gender: "varchar",
        region: {
            type: "varchar",
            default: "<Provide your region>",
            rule: {
                validator: function (value) { return value.length > 2 },
                required: true,
                message: "You need to enter a region"
            }
        },
        referalType: "varchar",
        language: "varchar",
        profileImg: "varchar",
        createdAt: "timestamp",
        updatedAt: "timestamp"
    },
    key: ["jamiiId", "phoneNo"],
}




