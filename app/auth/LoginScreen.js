import React from 'react';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';
import { Text, VStack, HStack, MailIcon, Button, Icon, UnlockIcon } from '@gluestack-ui/themed';
import { GluestackUIProvider, InputField, FormControl, Box, Input, Center, Link } from "@gluestack-ui/themed";
import { config } from '../../config/gluestack-ui.config';
import { getUsers, loginUser } from '../../services/userService';
import { router } from 'expo-router';
import ToastComponent from '../../components/ToastComponent'; 

export default function LoginScreen() {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };


  const LoginUser = async () => {
    try {
      const { email, password } = formData;
      const response = await loginUser(email, password);
      
      router.replace('/home/HomeScreen');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <Center bg="$light50" h="100%" w="100%">
        <Box>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.logo}
          />
        </Box>
        <Box>
          <Text size="4xl" bold="true" color="$primary500">
            CHECKTOR
          </Text>
        </Box>

        <FormControl w={300} my={50}>
          <VStack space="lg" reversed={false}>
            <Box m={2}>
              <Input variant="outline" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} borderRadius={15} style={styles.input}>
                <Icon as={MailIcon} size="xl" color="$primary500" />
                <InputField
                  placeholder='Email'
                  color="$light500"
                  onChangeText={(text) => handleInputChange('email', text)}
                />
              </Input>
            </Box>

            <Box m={2}>
              <Input variant="outline" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false} borderRadius={15} style={styles.input}>
                <Icon as={UnlockIcon} size="xl" color="$primary500" />
                <InputField
                  type="password"
                  placeholder='Password'
                  color="$light500"
                  onChangeText={(text) => handleInputChange('password', text)} // Update password in state
                />
              </Input>
            </Box>
            <Box >
              <Button variant="solid" size="md" borderRadius={15} onPress={LoginUser}>
                <Text size="lg" bold="true" color="$light50">Login</Text>
              </Button>
            </Box>
            <Box style={styles.container}>
              <Link href="/auth/forget_password"  >
                <Text color="$light400" underline="true" size="xs" bold="true">Forgot password</Text>
              </Link>
              <Link href="/auth/create-account"  >
                <Text color="$primary500" underline="true" size="xs" bold="true">Create Account</Text>
              </Link>
            </Box>
          </VStack>
        </FormControl>

      </Center>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: '#F27F0C',
    borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
