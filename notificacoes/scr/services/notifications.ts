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