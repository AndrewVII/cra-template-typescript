import path from 'path';
import express from 'express';

const app = express();
const port = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', port);

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', port);
});
