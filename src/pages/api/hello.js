
export default async function sendHello(req, res) {
  try {
    return res.status(200).json({ status: 'OK' });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
