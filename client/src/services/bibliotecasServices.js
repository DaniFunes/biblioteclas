import http from './httpServices.js'

import config from '../../config.json'

const endpoint = config.apiURL + "/bibliotecas"

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllBibliotecas() {
	return http.get(getEndpoint())
}

function getBibliotecasByCity(city) {
	return http.get(getEndpoint(city))
}

function createBiblioteca(payload) {
	return http.post(getEndpoint(), payload)
}

function updateBiblioteca(id, payload) {
	return http.put(getEndpoint(id) + '/updatebiblio', payload)
}

function deleteBiblioteca(id) {
	return http.delete(getEndpoint() + '/delete', payload)
}




const todosService = {
	getAllBibliotecas,
	getBibliotecasByCity,
	createBiblioteca,
	updateBiblioteca,
	deleteBiblioteca,
}

export default todosService
