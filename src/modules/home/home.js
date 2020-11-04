export default function home(req, res) {
  res.status(202).json({
    name: 'qwe',
    components: ['13', '42', '141'],
    q: true,
  });
}
