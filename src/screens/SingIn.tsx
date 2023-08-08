import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import BackgroungImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

export function SingIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} pb={16}>
        <Image
          source={BackgroungImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>
          <Input key="E-mail" autoCapitalize="none" placeholder="E-mail" />
          <Input secureTextEntry placeholder="Senha" />

          <Button title="Acessar" />
        </Center>
        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
        </Center>

        <Button title="Criar conta" variant="outline" />
      </VStack>
    </ScrollView>
  );
}
