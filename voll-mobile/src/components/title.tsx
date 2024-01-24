import { ITextProps, Text } from "native-base"
import { ReactNode } from "react"

interface TTitleProps extends ITextProps {
    children: ReactNode
}

export default function Title({ children, ...rest }: TTitleProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color={"gray.500"}
            textAlign="center"
            mt={5}
            {...rest}
        >
            {children}
        </Text>

    )
}