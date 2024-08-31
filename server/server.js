import serverless from '@stormkit/serverless'

export const handler = serverless(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write('Hello from ' + req.url)
    res.end()
  }
)