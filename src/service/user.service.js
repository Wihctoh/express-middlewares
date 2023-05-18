const fs = require("fs");
const path = "./storage/storage.json";

class Service {
  getAllUser() {
    const data = JSON.parse(fs.readFileSync(path));
    if (!data.length) throw new Error("empty");

    return data;
  }

  getUserById(id) {
    const data = JSON.parse(fs.readFileSync(path));

    const filtered = data.filter((el) => el.id == id);
    if (!filtered.length) throw new Error("such id not found");

    return filtered;
  }

  createUser(name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(path));

    const filtered = data.filter((el) => el.email == email);
    if (filtered.length > 0) throw new Error("such email already exists");

    const item = { id: data.length + 1, name, surname, email, pwd };

    data.push(item);

    fs.writeFileSync(path, JSON.stringify(data));
    return data;
  }

  updateUser(id, name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(path));

    const filtered = data.filter((el) => el.id != id);
    if (filtered.length == data.length) throw new Error("such id not found");

    const item = { id: +id, name, surname, email, pwd };

    filtered.push(item);

    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
  }

  deleteUser(id) {
    const data = JSON.parse(fs.readFileSync(path));

    const filtered = data.filter((el) => el.id != id);
    if (filtered.length == data.length) throw new Error("such id not found");

    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
  }

  patchUser(id, clientObj) {
    const data = JSON.parse(fs.readFileSync(path));

    const oldData = data.find((el) => el.id == id);
    const newData = { ...oldData, ...clientObj };

    const patched = data.filter((el) => el.id != id);
    if (patched.length == data.length) throw new Error("such id not found");

    patched.push(newData);

    fs.writeFileSync(path, JSON.stringify(patched));
    return patched;
  }
}

module.exports = { Service };
