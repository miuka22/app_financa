import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';
import styles from '../../Styles/stylesTelaCadastro';
import api from '../../api'
import { CheckBox } from '@rneui/themed';
import Termo from '../../Componente/TermoDeUso'

function TelaCadastro() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [repitirSenha, setRepitirSenha] = useState('')

  const [termoAviso, setTermoAviso] = useState('')
  const [nomeAviso, setNomeAviso] = useState('')
  const [emailAviso, setEmailAviso] = useState('')
  const [senhaAviso, setSenhaAviso] = useState('')
  const [repSenhaAviso, setRepSenhaAviso] = useState('')

  const [termo, setTermo] = useState(false)
  const [modal, setModal] = useState(false)

  function checkForm() {
    nomeUsuario == '' ? setNomeAviso(<Text style={styles.aviso}>Insira um nome válido</Text>) : setNomeAviso('')
    email == '' ? setEmailAviso(<Text style={styles.aviso}>Insera um email válido</Text>) : setEmailAviso('')
    senha == '' ? setSenhaAviso(<Text style={styles.aviso}>Insira uma senha válida</Text>) : setSenhaAviso('')
    repitirSenha == '' ? setRepSenhaAviso(<Text style={styles.aviso}>Insira a senha novamente</Text>) : setRepSenhaAviso('')
    termo == false ? setTermoAviso(<Text style={styles.aviso}>Aceite os termos de uso</Text>) : setTermoAviso('')
  }

  async function validarCadastro() {
    console.log('oia eu');
    const response = await api.post('cadastrar/', {
      email: email,
      nome: nomeUsuario,
      senha: senha,
      termo: termo
    })
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
          onChangeText={text =>
            setSenha(text)}
        />
        <Text style={styles.formTxt}>Confirme a senha {repSenhaAviso}</Text>
        <TextInput
          placeholderTextColor={'#000000'}
          style={styles.TextInput}
          placeholder='Confirme a senha'
          onChangeText={text =>
            setRepitirSenha(text)}
        />
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
          onPress={() => { validarCadastro() }}
          style={styles.btnCadastrar}
        >
          <Text style={styles.cadastrar}>Cadastrar</Text>
        </Pressable>

      </View>
    </View>


  );
}

export default TelaCadastro;