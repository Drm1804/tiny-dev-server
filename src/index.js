import micro from 'micro';

const server = micro(async (req, res) => {
  res.end('Success, server is work UPD')
})

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`));