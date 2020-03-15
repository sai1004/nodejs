// way one
// const getPosts = (req, res) => {
//   res.send("Hello , I'm From Post Route ");
// };

// module.exports = {
//   getPosts
// };

// way Two

exports.getPosts = (req, res) => {
    res.send("Hello , I'm From Post Route ");
  };