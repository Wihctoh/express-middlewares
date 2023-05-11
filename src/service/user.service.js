const arr = [
  {
    id: 1,
    name: "Hanna",
    surname: "Pleshko",
    email: "hannapleshko@gmail.com",
    pwd: "12345678",
  },
  {
    id: 2,
    name: "Есения",
    surname: "Грант",
    email: "yesgrant@mail.ru",
    pwd: "12345678",
  },
  {
    id: 3,
    name: "Анастасия",
    surname: "Павлова",
    email: "pavlova@gmail.com",
    pwd: "12345678",
  },
  {
    id: 4,
    name: "Мария",
    surname: "Гардон",
    email: "gardon@mail.ru",
    pwd: "12345678",
  },
  {
    id: 5,
    name: "Марта",
    surname: "Котикова",
    email: "martaktik@gmail.com",
    pwd: "12345678",
  },
  {
    id: 6,
    name: "Борис",
    surname: "Юревич",
    email: "testdata@gmail.com",
    pwd: "12345678",
  },
  {
    id: 7,
    name: "Рыжик",
    surname: "Рыжий",
    email: "email@gmail.com",
    pwd: "12345678",
  },
  {
    id: 8,
    name: "Рейна",
    surname: "Собачкова",
    email: "dogdoggav@mail.ru",
    pwd: "12345678",
  },
  {
    id: 9,
    name: "Максим",
    surname: "Николаев",
    email: "hanna@gmail.com",
    pwd: "12345678",
  },
  {
    id: 10,
    name: "Константин",
    surname: "Константинов",
    email: "konst@mail.ru",
    pwd: "12345678",
  },
  {
    id: 11,
    name: "Иван",
    surname: "Иванов",
    email: "ivaniv@gmail.com",
    pwd: "12345678",
  },
  {
    id: 12,
    name: "Николай",
    surname: "Николаев",
    email: "nikkkk@mail.ru",
    pwd: "12345678",
  },
];

function getAllUser() {
  if (!arr) throw new Error("no have data!");
  return arr;
}

function getUserById(id) {
  const filtered = arr.filter((el) => el.id == id);
  if (!filtered.length) throw new Error("no have data!");

  return filtered[0];
}

function createUser(name, surname, email, pwd) {
  const obj = {
    id: arr.length + 1,
    name: name,
    surname: surname,
    email: email,
    pwd: pwd,
  };

  const filtered = arr.filter((el) => el.email == email);

  if (filtered.length > 0) throw new Error("alredy includes!");

  arr.push(obj);
  return arr;
}

function updateUser(id, name, surname, email, pwd) {
  const item = {
    id: +id,
    name: name,
    surname: surname,
    email: email,
    pwd: pwd,
  };

  const filtered = arr.filter((el) => el.id != id);
  if (filtered.length == arr.length) throw new Error("not found!");

  filtered.push(item);
  return filtered;
}

module.exports = { getAllUser, getUserById, createUser, updateUser };
