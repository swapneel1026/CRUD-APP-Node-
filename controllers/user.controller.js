import UserModel from "../models/user.model.js";

export async function handleGetAllUsers(req, res) {
  const allUsers = await UserModel.find({});
  return res.json({ allUsers, totalUsers: allUsers.length });
}

export async function HandlePostNewUser(req, res) {
  const result = await UserModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    location: req.body.location,
  })
    .then(() => {
      return res.status(201).json({ msg: "Success" });
    })
    .catch((err) => {
      res.json({ msg: `User Already exists with email: ${req.body.email} !` });
    });
}

export async function handleGetUserById(req, res) {
  const userId = req.params.id;
  const user = await UserModel.findById(userId)
    .then((user) => {
      res.send(user);
    })
    .catch(() => {
      res.send("No user found with userId- " + userId);
    });
}

export async function handleUpdateUserById(req, res) {
  const userId = req.params.id;
  const result = await UserModel.findByIdAndUpdate(userId, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    location: req.body.location,
  })
    .then(() => {
      res.status(200).json({ Message: "Updated Succesfully" });
    })
    .catch((err) => res.send(`No user found with userId : ${userId}`));
}

export async function handleDeleteUserById(req, res) {
  const userId = req.params.id;
  const result = await UserModel.findByIdAndDelete(userId)
    .then((user) => res.send("User Deleted with userId : " + user._id))
    .catch((err) => {
      res.json({ msg: err.message });
    });
}
