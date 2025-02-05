import { Redirect, router, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useSession } from '@/session/ctx';

export default function SignIn() {
  const colorScheme = useColorScheme();
  const { signIn, session } = useSession();
  if (session) {
    <Redirect href='/(tabs)/home' />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ headerShown: true, title: 'Login to JobTrakR' }} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          txtSize='xxl'
          text='Sign In'
          onPress={() => {
            signIn();
            router.replace('/(tabs)/home');
          }}
        />
      </View>
    </View>
  );
}
