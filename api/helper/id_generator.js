import { generateRandom } from "./random";
exports.createJamiiId = (customer) => {
    // Form Jamii Id from region_code, random_six_string, gender
    const customerRegion = customer.region.toUpperCase();
    const customerGender = customer.gender.toUpperCase();
    // Get random 6 digits
    var randomSix = generateRandom(6)

    return customerRegion+randomSix+customerGender;
}
