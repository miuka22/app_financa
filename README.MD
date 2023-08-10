funcões de requests: 

const baseURL = "http://localhost:3000"

export const requestsUser = {
    async createUser(props){

         const res = await  axios.post(`${baseURL}/createuser`).then( (response) => response)
         return res
    }




funcão de lidar com request: 
  async function lidarComCadastro(){
    const dataUser = {
      name: nameUsuario,
      email: email,
      senha: senha,
      repitirSenha: repitirSenha
    }

    const res = await requestsUser.createUser(dataUser, "user")
  }    