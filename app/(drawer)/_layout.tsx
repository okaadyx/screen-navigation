import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{ title: "Home", headerShown: false }}
      />
      <Drawer.Screen name="index" options={{}} />
    </Drawer>
  );
}
