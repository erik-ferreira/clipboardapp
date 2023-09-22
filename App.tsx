import { useState, useEffect } from "react"
import * as Clipboard from "expo-clipboard"
import { MaterialIcons } from "@expo/vector-icons"
import { TextInput, View, TouchableOpacity, Alert, Image } from "react-native"

import { styles } from "./styles"

export default function App() {
  const [information, setInformation] = useState("")
  const [img, setImg] = useState<string | undefined>(
    "http://github.com/erik-ferreira.png"
  )

  async function handleCopyToClipboard() {
    await Clipboard.setStringAsync(information)
  }

  async function handleGetToClipboard() {
    const response = await Clipboard.getStringAsync()

    Alert.alert(response)
  }

  async function handleGetImageToClipboard() {
    const response = await Clipboard.getImageAsync({ format: "png" })

    if (response?.data) {
      setImg(response?.data)
    }
  }

  // useEffect(() => {
  //   const subscription = Clipboard.addClipboardListener(() => {
  //     Alert.alert("Copiado")
  //   })

  //   return () => Clipboard.removeClipboardListener(subscription)
  // }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img }} />

      <TextInput
        style={styles.input}
        value={information}
        onChangeText={setInformation}
      />

      <View style={styles.options}>
        <TouchableOpacity style={styles.button} onPress={handleCopyToClipboard}>
          <MaterialIcons name="content-copy" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleGetToClipboard}>
          <MaterialIcons name="content-paste" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleGetImageToClipboard}
        >
          <MaterialIcons name="image" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
