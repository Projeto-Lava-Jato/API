module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('usuarios', [
			{
				nome: 'José Rafael',
				ativo: true,
				email: 'rafael@gmail.com',
				role: 'funcionário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Vinicius Duperron',
				ativo: true,
				email: 'vinicius@gmail.com',
				role: 'cliente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Walter José',
				ativo: true,
				email: 'walter@gmail.com',
				role: 'cliente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Daniel',
				ativo: false,
				email: 'daniel@gmail.com',
				role: 'cliente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Leonardo Campello',
				ativo: true,
				email: 'leonardo@gmail.com',
				role: 'cliente',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
