// first_name
// last_name
// payment_type
// payment_number
// msisdn
// status
// region_id
// district_id
// zoneid
// updated_at
// created_at
// first_login
// pin
// change_pin

module.exports = {
    fields: {
        firstName: "text",
        lastName: "text",
        paymentType: "text",
        paymentNumber: "text",
        phoneNo: "text",
        status: "text",
        region: "text",
        district: "text",
        zone: "text",
        firstLogin: "text",
        pin: "text",
        // is pin changed a good implementation?
        pinChanged: "text",
        createdAt: "text",
        updatedAt: "text"
    },
    key: ["phoneNo"]

}