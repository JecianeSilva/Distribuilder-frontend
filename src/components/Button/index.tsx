import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    loading?: boolean;
    hideIcon?: boolean;
    disabledClassNameSpan?: boolean;
    typeLayoutButton?: string,
}

const Button: React.FC<ButtonProps> = ({
    label,
    loading = false,
    typeLayoutButton,
    hideIcon = false,
    disabledClassNameSpan = false,
    ...rest
}) => {
    return (
        <Container typeLayoutButton={typeLayoutButton} disabled={loading} {...rest}>
            <>
                <span style={!disabledClassNameSpan ? { margin: '0 auto' } : {}}>
                    {label}
                </span>
            </>
        </Container>
    )
}

export default Button;