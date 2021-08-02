const schedule = require('node-schedule')

const tarefa = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('Executando tarefa !', new Date().getSeconds())
})

setTimeout(function() {
    tarefa.cancel()
    console.log('Cancelando tarefa !')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)]
regra.hour = 15
regra.seconds = 30

const tarefa1 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 1 !', new Date().getSeconds())
})