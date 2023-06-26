const data = await fetch('api.son')

const USER = JSON.parse(data)

console.log(USER)

export { USER }