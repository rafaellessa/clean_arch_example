import Express from 'express';

const app = Express();

app.listen(process.env.SERVICE_CLEAN_ARCH_PORT, () => {
  console.log(`Server listen on port ${process.env.SERVICE_CLEAN_ARCH_PORT}`)
})