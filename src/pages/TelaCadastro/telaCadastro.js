import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from '../../Styles/stylesTelaCadastro';
import { api } from '../../api'
import { CheckBox } from '@rneui/themed';
import Termo from '../../Componente/TermoDeUso'

function TelaCadastro({ navigation }) {
  const [senhaView, setSenhaView] = useState(true)

  const [nomeUsuario, setNomeUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [termoAviso, setTermoAviso] = useState('')
  const [nomeAviso, setNomeAviso] = useState('')
  const [emailAviso, setEmailAviso] = useState('')
  const [senhaAviso, setSenhaAviso] = useState('')

  const [termo, setTermo] = useState(false)
  const [modal, setModal] = useState(false)

  function checkForm() {
    nomeUsuario == '' ? setNomeAviso(<Text style={styles.aviso}>Insira um nome válido</Text>) : setNomeAviso('')
    email == '' ? setEmailAviso(<Text style={styles.aviso}>Insera um email válido</Text>) : setEmailAviso('')
    senha == '' ? setSenhaAviso(<Text style={styles.aviso}>Insira uma senha válida</Text>) : setSenhaAviso('')
    termo == false ? setTermoAviso(<Text style={styles.aviso}>Aceite os termos de uso</Text>) : setTermoAviso('')

    if (nomeUsuario !== '' && email !== '' && senha !== '' && termo !== false) {
      validarCadastro()
    }
  }

  async function validarCadastro() {
    const response = await api.post('cadastrar/', {
      nome: nomeUsuario,
      email: email,
      senha: senha,
      termo: termo
    })
    console.log(response.data.retorno);
    response.data.retorno === "cadastrado" ? setEmailAviso(
      <Text style={styles.aviso}>Email já cadastrado</Text>
    ) : setEmailAviso(''), navigation.navigate('TelaPrincipal')
  }

  return (

    <View style={styles.Conteiner}>
      <View style={styles.Logo}>
        <Text style={styles.LogoTitle}>MONEY MIND</Text>
        <Text style={styles.textTitle}>Cadastro</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTxt}>Nome completo {nomeAviso}</Text>
        <TextInput
          placeholderTextColor={'#000000'}
          style={styles.TextInput}
          placeholder='nome completo'
          onChangeText={text =>
            setNomeUsuario(text)}
        />
        <Text style={styles.formTxt}>E-mail {emailAviso}</Text>
        <TextInput
          placeholderTextColor={'#000000'}
          style={styles.TextInput}
          placeholder='Email'
          onChangeText={text =>
            setEmail(text)}
        />
        <Text style={styles.formTxt}>Senha {senhaAviso}</Text>
        <TextInput
          placeholderTextColor={'#000000'}
          style={styles.TextInput}
          placeholder='Senha'
          secureTextEntry={senhaView}
          onChangeText={text =>
            setSenha(text)}
        />
        <Pressable style={styles.viewExibirOcultar}
          onPress={() => setSenhaView(!senhaView)}>
          <Text style={styles.exibirOcultar}>{
            senhaView ? 'MOSTRAR SENHA' : 'OCULTAR SENHA'
          }</Text>
        </Pressable>
        <View style={styles.areaCheck}>
          <CheckBox
            center
            checked={termo}
            size={20}
            onPress={() => { setTermo(!termo) }}
            checkedColor='#ffffff'
            containerStyle={styles.check}
          />
          <Termo setVisibleProps={modal} setModalProps={setModal} />

          <Pressable onPress={() => { setModal(true) }}>
            <Text style={styles.formTxt}>Eu li e aceito os termos de uso
            </Text>
          </Pressable>
        </View>
        <Text>{termoAviso}</Text>
        <Pressable
          onPress={() => { checkForm() }}
          style={styles.btnCadastrar}
        >
          <Text style={styles.cadastrar}>Cadastrar</Text>
        </Pressable>

      </View>
    </View>


  );
}

export default TelaCadastro;