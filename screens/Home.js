import React, {useContext} from "react"
import {StyleSheet, View, Text, Button} from "react-native"
import Dados from "../context/DadosContext"

export default function({ navigation }) {
  const {receitas, despesas} = useContext(Dados)

  return(
    <View style={css.container}>
      <View style={css.card}>
        <Text style={css.cardText}>Despesas</Text>
        <Text style={css.cardValor}>R$
          {despesas.reduce((soma, item) => soma + parseInt(item.valor), 0)}
        </Text>
      </View>

      <View style={css.card}>
        <Text style={css.cardText}>Receitas</Text>
        <Text style={css.cardValor}>R$
          {receitas.reduce((soma, item) => soma + parseInt(item.valor), 0)}
        </Text>
      </View>

      <Button title="Adicionar Receita" onPress={() => navigation.navigate("Receitas")} />
      <Button title="Adicionar Despesas" onPress={() => navigation.navigate("Despesas")} />
    </View>
  )
}


const css = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 30,
    paddingTop: 60
  },
  card: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "90%",
    textAlign: "center",
    padding: 20,
    borderColor: "white", 
    borderWidth: 1
  },
  cardText: {
    color: "#fff",
    fontSize: 20
  },
  cardValor: {
    fontSize: 30,
    color: "red"
  }
})