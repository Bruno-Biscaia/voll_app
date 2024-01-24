import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";


import Title from "./components/title";
import { InputText } from "./components/inputText";
import { useState } from "react";

export default function Register() {

  const [numberSection, setNumberSection] = useState(0)

  const sections = [
    {
      id: 1,
      title: "Insira alguns dados básicos",
      inputText: [
        {
          id: 1,
          label: "Nome",
          placeholder: "Insira seu nome Completo",
        },
        {
          id: 2,
          label: "Email",
          placeholder: "Insira seu Email",
        },

      ],
    },
    {
      id: 2,
      title: "Agora mais alguns dados sobre você",
      inputText: [
        {
          id: 1,
          label: "CEP",
          placeholder: "Digite seu CEP",
        },
        {
          id: 2,
          label: "Email",
          placeholder: "Insira seu Email",
        },

      ],
    },
    {
      id: 3,
      title: "Para finalizar, quais são os seus planos?",
      inputText: [],
      checkbox: [
        {
          id: 1,
          value: "Sulamerica",
        },
        {
          id: 2,
          value: "Unimed",
        },


      ],
    }
  ]

  function nextSection() {
    if (numberSection < sections.length - 1) {
      setNumberSection(numberSection + 1)
    }
  }

  function prevSection() {
    if (numberSection > 0) {
      setNumberSection(numberSection - 1)
    }
  }



  return (
    <ScrollView flex={1}  p={15}>
      <Image mb={5} source={Logo} alt="Logo Voll" />


      <Title>{sections[numberSection].title}</Title>

      <Box>
        {sections[numberSection].inputText?.map(section => {
          return <InputText
            label={section.label}
            placeholder={section.placeholder}
            key={section.id}
          />
        })}
      </Box>
      <Box>
        {sections[numberSection].checkbox?.map(checkbox => 
        {
          return <Checkbox key={checkbox.id} value={checkbox.value}>
            {checkbox.value}
            </Checkbox>
        })
        }
      </Box>

      {numberSection > 0 &&
        <Button
          onPress={() => prevSection()}
          w={"100%"}
          bgColor="gray.400"
          mt={10}
          borderRadius={"lg"}
        >
          Voltar
        </Button>
      }
      {numberSection < sections.length - 1 ?
        <Button
          onPress={() => nextSection()}
          w={"100%"}
          bgColor="blue.900"
          mt={4}
          borderRadius={"lg"}
        >
          Avançar
        </Button>
        :
        <Button
        onPress={undefined}
        w={"100%"}
        bgColor="blue.900"
        mt={4}
        borderRadius={"lg"}
      >
        Cadastrar
      </Button>
      }



    </ScrollView>
  );
}


