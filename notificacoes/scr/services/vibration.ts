import { Vibration } from "react-native";

export function vibracaoSimples () {
    Vibration.vibrate() 
    console.log ("Trepidando Trepidando Trepidando Trepidando")
}

export function vibracaoLonga() {
    Vibration.vibrate(2000)
}

export function vibracaoRepeat(){
    Vibration.vibrate(2000, true)
}

export function vibracaoCancelar() {
    Vibration.cancel()
}