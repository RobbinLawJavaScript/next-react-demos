import { BASE_URL } from './base.js'

export const getAuthor = async (authorKey) => {
	try {
		const res = await fetch(`${BASE_URL}/authors/${authorKey}.json`)
		if (!res.ok) {
			throw new Error(`Bad response status = ${res.status}`);
			}
		const data = await res.json()
		console.log(`getAuthor data: ${data.name}`)
		return data
	} catch(error) {
		console.log(`getAuthor catch: ${error.message}`)
		throw(error)
	}	
}

export const getAuthorWorks = async (authorKey) => {
	try {
		const res = await fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
		if (!res.ok) {
			throw new Error(`Bad response status = ${res.status}`);
			}
		const data = await res.json()
		console.log(`getAuthorWorks data: ${data.entries[0].title}`)
		return data.entries
	} catch(error) {
		console.log(`getAuthorWorks catch: ${error.message}`)
		throw(error)
	}	
}

export const searchAuthor = async (searchQuery) => {
	try {
		const res = await fetch(`${BASE_URL}/search/authors.json?q=${searchQuery}&limit=10`)
		if (!res.ok) {
			throw new Error(`Bad response status = ${res.status}`);
			}
		const data = await res.json()
		console.log(`searchAuthor data: ${data.docs[0].name}`)
		return data
	} catch(error) {
		console.log(`searchAuthor catch: ${error.message}`)
		throw(error)
	}	
}

const getAuthor1 = (authorKey) => {
		return fetch(`${BASE_URL}/authors/${authorKey}.json`)
		.then((response)=> {
				return response.json()
		}).then((data)=> {
				return data
		})
}

const getAuthorWorks1 = (authorKey) => {
		return fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
		.then((response)=> {
				return response.json()
		}).then((data)=> {
			 return data.entries
		})
}

const searchAuthor1 = (searchQuery) => {
	return fetch(`${BASE_URL}/search/authors.json?q=${searchQuery}&limit=10`)
		.then((response)=> {
			return response.json()
		}).then((data)=> {
			return data
		})
}