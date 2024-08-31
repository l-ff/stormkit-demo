export const handler = ({ req, res }) => {
  res.write("hello world");
  res.end();
};
