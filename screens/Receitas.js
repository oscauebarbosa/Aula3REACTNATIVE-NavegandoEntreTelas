import React, {useContext, useState} from "react"
import {StyleSheet, View, Text, TextInput, Button} from "react-native"
import Dados from "../context/DadosContext"

export default function({navigation}) {
  const {receitas, setReceitas} = useContext(Dados)

  const [nome, setNome] = useState("")
  const [valor, setValor] = useState(0)
  const [data, setData] = useState(0)

  function cadastrar() {
    // Cria uma copia dos valores existente na receita
    let aux = [...receitas]

    // Adiciona mais um item a copia da receitas
    aux.push({
      nome: nome, 
      valor: valor, 
      data: data
    })

    // Atualiza a receitas com o item adicionado
    setReceitas(aux)

    // Manda para a home
    navigation.navigate("Home")
  }

  return (
    <View style={css.container}>
      <Text style={css.titulo}>Receitas</Text>

      <TextInput
        value={nome}
        onChangeText={(e) => setNome(e)}
        style={css.input}
        placeholder="Informe o Nome"
        keyboardType="default"
      />

      <TextInput
        value={valor}
        onChangeText={(e) => setValor(e)}
        style={css.input}
        placeholder="Informe o Valor"
        keyboardType="numeric"
      />

      <TextInput
        value={data}
        onChangeText={(texto) => setData(texto)}
        style={css.input}
        placeholder="Informe a Data"
        keyboardType="numeric"
      />

       <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  )
}


const css = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 30,
    paddingTop: 60
  },
  titulo: {
    color: "#fff", 
    fontSize: 40
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black", 
    backgroundColor: "#fff"
  },
});

