import User from './Model';

export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('user created!');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('user is not created!');
    })
    .finally(() => {
      console.log('end');
    });
}
