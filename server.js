const Koa = require('koa');

const app = new Koa();

// response
app.use((ctx) => {
  if (ctx.path === '/test') {
    ctx.body = 'test';
  } else {
    ctx.body = 'Hello Koa';
  }
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
