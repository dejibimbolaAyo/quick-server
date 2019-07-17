import { hash, compare, genSaltSync} from "bcrypt";
const saltRounds = 10;
/**
 * Generate crypt and decrypt
 * @param plainString
 */

exports.getHash = (plainString) => {
    return hash(plainString, saltRounds)
        .then((hash) => hash)
        .catch((e) => console.log(e.message));
 }

 exports.getSalt = (length) => {
    return genSaltSync(length)
 }

 exports.compareHash = (salted, hash) => {
    return compare(salted, hash)
        .then((res) => res)
        .catch((e) => console.log(e.message));
 }