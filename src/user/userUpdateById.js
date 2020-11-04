import User from './Model';

export default function userUpdateById(req, res) {
  const userId = req.params.userId;

  delete req.body.password;

  User.updateOne({ _id: userId }, req.body)
    // .skip(1)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User update error');
    });
}
