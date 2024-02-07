import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useToast, Toast, ToastTitle, ToastDescription } from "@gluestack-ui/themed";

export default function HomeScreen () {
  
  function showToast() {
    const toast = useToast();
    toast.show({
      placement: "top",
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast nativeID={toastId} action="error" variant="solid">
            <View>
              <ToastTitle>New Message</ToastTitle>
              <ToastDescription>
                Hey, just wanted to touch base and see how you're doing. Let's catch up soon!
              </ToastDescription>
            </View>
          </Toast>
        );
      },
    });
  }

  
  return (
    <View>
      <Text>Home</Text>
      <Link href="/">Back</Link>
    </View>
  );
}
