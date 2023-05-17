const fs = require("fs");
const path = "./storage/storage.json";

class Service {
  getAllUser() {
    const data = JSON.parse(fs.readFileSync(path));

    if (!data.length) throw new Error("no data!");
    return data;
  }

  deleteUser(id) {
    const data = JSON.parse(fs.readFileSync(path));
    const filtered = data.filter((el) => el.id != id);

    if (filtered.length == data.length) throw new Error("no have this  id");

    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
  }

  getUserById(id) {
    const data = JSON.parse(fs.readFileSync(path));
    const filtered = data.filter((el) => el.id == id);

    if (!filtered.length) throw new Error("no have id");

    return filtered;
  }

  updateUser(id, name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(path));
    const item = {
      id: +id,
      name: name,
      surname: surname,
      email: email,
      pwd: pwd,
    };
    const filtered = data.filter((el) => el.id != id);

    if (filtered.length == data.length) throw new Error("no data!");

    filtered.push(item);
    fs.writeFileSync(path, JSON.stringify(filtered));

    return filtered;
  }

  patchUser(id, clientObj) {
    const data = JSON.parse(fs.readFileSync(path));

    const oldData = data.find((el) => el.id == id);
    const newData = { ...oldData, ...clientObj };
    const patched = data.filter((el) => el.id != id);

    if (data.length == patched.length) throw new Error("no have this id");

    patched.push(newData);
    fs.writeFileSync(path, JSON.stringify(patched));

    return patched;
  }
}

function getAllUser() {
  const data = JSON.parse(fs.readFileSync(path));

  if (data.length) throw new Error("no data!");
  return data;
}

function deleteUser(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((el) => el.id != id);

  if (filtered.length == data.length) throw new Error("no have this  id");

  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function getUserById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((el) => el.id == id);

  if (!filtered.length) throw new Error("no have id");

  return filtered;
}

function updateUser(id, name, surname, email, pwd) {
  const data = JSON.parse(fs.readFileSync(path));
  const item = {
    id: +id,
    name: name,
    surname: surname,
    email: email,
    pwd: pwd,
  };
  const filtered = data.filter((el) => el.id != id);

  if (filtered.length == data.length) throw new Error("no data!");

  filtered.push(item);
  fs.writeFileSync(path, JSON.stringify(filtered));

  return filtered;
}

function patchUser(id, clientObj) {
  const data = JSON.parse(fs.readFileSync(path));

  const oldData = data.find((el) => el.id == id);
  const newData = { ...oldData, ...clientObj };
  const patched = data.filter((el) => el.id != id);

  if (data.length == patched.length) throw new Error("no have this id");

  patched.push(newData);
  fs.writeFileSync(path, JSON.stringify(patched));

  return patched;
}

// module.exports = { getAllUser, deleteUser, getUserById, updateUser, patchUser };
module.exports = { Service };
