import { Link, Stack, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { CameraView } from "expo-camera";
import * as Contacts from "expo-contacts";
import { Gyroscope } from "expo-sensors";
export default function Home() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName],
        });
        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Link href={"/tabs"}>tabs</Link>
      <Link href={"/drawer"}>Drawer</Link>
      <Link href={"/modal"}>Open Modal</Link>
    </View>
  );
}
