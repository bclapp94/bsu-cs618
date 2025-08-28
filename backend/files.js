import { writeFileSync, readFileSync } from "node:fs";

const users = [{ name: "Adam Ondra", email: "adam.ondra@climb.ing" }];
const usersJson = JSON.stringify(users);
let filePath = "backend/users.json";
writeFileSync(filePath, usersJson);
const readUsersJson = readFileSync(filePath);
const readUsers = JSON.parse(readUsersJson);
console.log(readUsers);
