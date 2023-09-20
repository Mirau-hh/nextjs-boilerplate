async function Ping(req, res) {
  const { url: path, headers } = req;
  console.log("ping");
  res.send("pong");
}

export default Ping;
