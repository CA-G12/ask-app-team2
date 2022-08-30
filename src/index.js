const app = require('./app');

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
