function isValidUserId(req, res, next) {
  const { id } = req.params;

  if (!id) throw new Error("no have id");
  if (isNaN(id)) throw new Error("id is not a number");
  if (id < 0) throw new Error("id is less than zero");

  next();
}

function isValidUserData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error("name value is empty");
  if (!surname) throw new Error("surname value is empty");
  if (!email) throw new Error("email value is empty");
  if (!pwd) throw new Error("pwd value is empty");
  if (!isNaN(name)) throw new Error("incorrect name");
  if (!isNaN(surname)) throw new Error("incorrect surname");
  if (!/^[\w\.\-\_]+@[a-z]{1,10}\.[a-z]{1,8}$/gm.test(email)) throw new Error("incorrect email");
  if (pwd.length < 8) throw new Error("pwd contains less than 8 symbols");

  next();
}

module.exports = { isValidUserId, isValidUserData };