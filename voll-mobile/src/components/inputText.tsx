import { FormControl, Input } from "native-base";

type TInputText = {
    label: string;
    placeholder: string;
}


export function InputText({label, placeholder} : TInputText) {
    return(
        <FormControl mt={2}>
          <FormControl.Label>{label}</FormControl.Label>
          <Input    
            placeholder={placeholder}
            size={"lg"}
            w={"100%"}
            borderRadius={"lg"}
            bgColor={"gray.100"}
            shadow={3}
          />
        </FormControl>
    )
}