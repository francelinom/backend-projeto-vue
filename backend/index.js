const app = require('express')()
const consing =  require('consign')

consing()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, ()=>{
    console.log('Backend executando...')
})