import classNames from "classnames";
import s from './Button.module.css'


const buttonSizes = {
    's': ['button_size_s', 'text-sm_medium'],
    'm': ['button_size_m', 'text-sm_medium'],
    'l': ['button_size_l', 'text-lg_medium'],
}

const buttonTypes = {
    'primary': ['button_type_primary'],
    'secondary': ['button_type_secondary'],
}

const Button = (
    {
        text = '',
        type = 'primary',
        size = 's',
        disabled = false,
        ...rest
    }) => {

    return (
        <button
            disabled={disabled}
            className={
                classNames(
                    s.button_base,
                    buttonTypes[type].map((className) => {
                        const existingStyle = s[className]
                        if (existingStyle) {
                            return existingStyle;
                        }
                        return className
                    }),
                    buttonSizes[size].map((className) => {
                        const existingStyle = s[className]
                        if (existingStyle) {
                            return existingStyle;
                        }
                        return className
                    })
                )
            }
            {...rest}
        >
            {text}
        </button>
    )
}

export default Button;

