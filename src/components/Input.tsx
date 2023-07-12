import { Controller } from "react-hook-form"

interface Props {
    control: any,
    name: string,
    type: string,
}

const Input = ({ control, name, type}: Props ) => {
    return(
        <Controller
            name={name}
            control={control}
            render={({ field, formState: { errors}  }) => (
                <>
                <input style={styles.input} type={type} {...field} />
                { errors && errors[name] && <div style={styles.error}>{errors[name]?.message as string}</div>}
                </>
            )}
            />
    )
}

const styles:any = {
   

    input: {
        width: '80%',
        padding: '10px',
        borderRadius: '10px',
        display:'flex',
        flexDirection:'column',
        margin: 'auto',
        marginTop: '10px'
    },

    error: {
        color: 'red'
    }
}

export default Input;