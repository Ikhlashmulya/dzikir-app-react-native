import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="dzikir-pagi/index"
        options={{
          title: "Dzikir Pagi",
          headerStyle: {
            backgroundColor: "#E0F4F2",
          },
        }}
      />
      <Stack.Screen
        name="dzikir-petang/index"
        options={{
          title: "Dzikir Petang",
          headerStyle: {
            backgroundColor: "#E0F4F2",
          },
        }}
      />
    </Stack>
  );
}
