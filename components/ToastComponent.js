import React from 'react';
import { VStack, Button, ButtonText } from '@gluestack-ui/themed';
import { useToast, Toast, ToastTitle , ToastDescription} from "@gluestack-ui/themed";

const ToastComponent = ({ onPress, title }) => {
    const toast = useToast();
    return (
      <Button
        onPress={() => {
          toast.show({
            placement: "top",
            render: ({ id }) => {
              const toastId = "toast-" + id;
              return (
                <Toast nativeID={toastId} action="error" variant="solid">
                  <VStack space="xs">
                    <ToastTitle>New Message</ToastTitle>
                    <ToastDescription>
                      Hey, just wanted to touch base and see how you're doing. Let's catch up soon!
                    </ToastDescription>
                  </VStack>
                </Toast>
              );
            },
          });
        }}
      >
        <ButtonText>Press Me</ButtonText>
      </Button>
    );
};

export default ToastComponent;
