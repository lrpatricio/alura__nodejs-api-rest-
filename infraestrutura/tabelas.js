class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (' +
            'id int NOT NULL AUTO_INCREMENT,' +
            'cliente varchar(50) NOT NULL,' +
            'pet varchar(20) NOT NULL,' +
            'servico varchar(20) NOT NULL,' +
            'data datetime NOT NULL,' +
            'dataCriacao datetime NOT NULL,' +
            'status varchar(20) NOT NULL,' +
            'observacoes text NOT NULL,' +
            'PRIMARY KEY(id)' +
            ')'
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log('Falha ao criar tabela atendimentos')
            }
        })
    }
}

module.exports = new Tabelas();