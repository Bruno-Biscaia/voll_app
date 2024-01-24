import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import Title from "./components/title";
import { InputText } from "./components/inputText";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={15}>
      <Image mb={5} source={Logo} alt="Logo Voll" />


      <Title>Faça Login em sua conta</Title>

      <Box>
        <InputText
          label="Email"
          placeholder="Insira seu Email"
        />
        <InputText
          label="Senha"
          placeholder="Insira sua senha"
        />
      </Box>

      <Button
        w={"100%"}
        bgColor="blue.900"
        mt={10}
        borderRadius={"lg"}
      >
        Entrar
      </Button>

      <Link
        mt={2}
        href="https://www.google.com"
      >
        Esqueceu sua senha?
      </Link>

      <Box
        mt={8}
        w='100%'
        flexDirection="row"
        justifyContent="center"
      >
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text color="blue.500" ml={1}>Cadastre-se</Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}


