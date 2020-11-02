export default function info(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const plus = a + b;
  res.send('Info here! ' + plus);
}
