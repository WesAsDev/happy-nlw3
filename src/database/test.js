const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db,{
        lat: "-23.5520361",
        lng: "-46.606623",
        name: "Lar do amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "946878764",
        images: [
            "https://images.unsplash.com/photo-1556258707-995cd393dd8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1590009617975-ea0733d39167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"

    
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanato, pelo ixid
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

            
})