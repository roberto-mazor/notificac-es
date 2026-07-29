import { StyleSheet, View } from 'react-native'
import React from 'react'

import Button from './scr/components/button'
import { envioImediatoNotificacao, requestPermissaoNoticacao, envioDelayNoticacao, cancelarNotificacaoes, envioSomNotificacao } from './scr/services/notifications' 

import { vibracaoSimples } from './scr/services/vibration'

export default function App() {
  async function fnExecutar(acao:() => Promise<void>) {
    const permitido = await requestPermissaoNoticacao();

    if (!permitido){
      alert("Permissão Negada.")
      return;
    }

    await acao()
  }




  return (
    <View style={styles.container}>
      
      <Button title='Notificações Imiediatas' onPress={() => fnExecutar(envioImediatoNotificacao)}/>
      <Button title='Apos 5 segundos' onPress={() => fnExecutar(envioDelayNoticacao)} />
      <Button title='Cancelar Notificações' onPress={() => fnExecutar(cancelarNotificacaoes)} />
      <Button title='Enviar Som' onPress={() => fnExecutar(envioSomNotificacao)} />
      <Button title='Vibra Simples' onPress={vibracaoSimples}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
    paddingHorizontal: 20
  }
})