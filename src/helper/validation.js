function isValidUserId(req, res, next) {
  const { id } = req.params;

  if (!id) throw new Error("no have id!");
  if (isNaN(id)) throw new Error("id is not a number!");
  if (id < 0) throw new Error("les than zero");

  next();
}

function isValidUserData(req, res, next) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error("name is empty");
  if (!surname) throw new Error("surname is empty");
  if (!email) throw new Error("email is empty");
  if (!pwd) throw new Error("name is pwd");

  if (!isNaN(name)) throw new Error("incorrect name");
  if (!isNaN(surname)) throw new Error("incorrect surname");
  if (!/^\w+@[a-z]+\.[a-z]{2,6}$/gm.test(email))
    throw new Error("incorrect email");
  if (pwd.length < 9) throw new Error("password less then 9 symbols!");

  next();
}

module.exports = { isValidUserId, isValidUserData };
