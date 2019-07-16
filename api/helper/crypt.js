import { hash, compare } from "bcrypt";
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

 exports.compareHash = (plainString, hash) => {
     console.log("plainString", plainString)
     console.log("hash", hash)
    return compare(plainString, hash)
        .then((res) => res)
        .catch((e) => console.log(e.message));
 }