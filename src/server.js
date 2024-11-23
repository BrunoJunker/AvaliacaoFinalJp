DatabaseError.db
    .sync({ force: false})
    .then((_) => {
        if (!process.env.TEST) {
            appendFile.listen(300, (_) => {
                console.log("Server running on port 3000");                
            });
        }
    })
    .catch((e) =>{
        console.error(`Erro ao inicialiar o banco de dados ${e} `);
    });