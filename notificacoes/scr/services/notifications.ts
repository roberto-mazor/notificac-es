import * as Notifications from "expo-notifications"

Notifications.setNotificationHandler ({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowList: true,
        shouldShowBanner: true,
        shouldSetBadge: false
    })
})

export async function requestPermissaoNoticacao() {
    const { status } = await Notifications.requestPermissionsAsync()

    return status === "granted";

}

//Noticações Imediatas
export async function envioImediatoNotificacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "📢 OLHA MENSAGEM 📢",
            body: "Essa mensagem é Imediata."
        },
        trigger: null
    })
}

export async function envioDelayNoticacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Notificação Atrasada...",
            body: "Passaram 5 segundos."
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: 5,
            // repeats: true
        }
    })
}


export async function cancelarNotificacaoes() {
    await Notifications.cancelAllScheduledNotificationsAsync()
}

//Noticações Imediatas
export async function envioSomNotificacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: " 🤪 OLHA O SOM",
            body: "Essa mensagem é Imediata.",
            sound: "defoult"
        },
        trigger: null
    })
}