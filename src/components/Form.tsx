import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { cartActions } from "../features/cartSlice";
import Input from "./Input";



const schema = yup
    .object({
        email: yup.string().email().required("Invalid email"),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        adresse: yup.string().required(),
        telephone: yup.string().required(),
    
        region: yup.string().required(),
        subscribedToNews: yup.boolean(),

    })

const Form:FC = () => {

    const dispatch = useDispatch();

    const {handleSubmit, control } = useForm({
        resolver : yupResolver(schema),
        defaultValues: {
            firstname: "",
            lastName: "",
            email: "",
            adresse: "",
            telephone: "+221",
            gender: "",
            region: "",
            subscribedToNews: false

        }
    });

    
    
    return(
        <div style={styles.container}>
            <h1>Informations</h1>
            <fieldset>
                <form >
                    <Input  type="text" name="firstName" control={control}  />
                    <Input  type="text" name="lastName" control={control} />
                    <Input  type="text" name="email" control={control} />
                    <Input  type="text" name="adresse" control={control} />
                    <Input  type="text" name="telephone" control={control} />
                    
                   
                    {/* <label style={{display: 'flex', marginTop: '10px',}} >
                    <Input type="radio"  name="gender" control={control} /> Female
                    </label>
                    <label style={{display: 'flex',  marginTop: '10px',}} >
                    <Input type="radio"  name="gender" control={control} /> Male
                    </label> */}
                  
                    <select style={styles.input} name="region"  >
                        <option value="dakar">Dakar</option>
                        <option value="thies">Thies</option>
                        <option value="diourbel">Diourbel</option>
                        <option value="louga">Louga</option>
                        <option value="fatick">Fatick</option>
                    </select>
                    <label >
                        <Input name="subscribe" control={control} type="checkbox" />
                            Subscribe to newsletter
                    </label>

                    <button>Submit</button>
                </form>
            </fieldset>
        </div>
    );

}

const styles:any = {
    container: {
        display:'flex',
        flexDirection:'column',
        border: "0.5px solid rgb(184,184,184)", 
        padding: '1%', 
        borderRadius:'5px',
        width: '40%',
        margin: 'auto',
        marginTop: '100px'
      
    },

    input: {
        width: '80%',
        padding: '10px',
        borderRadius: '10px',
        display:'flex',
        flexDirection:'column',
        margin: 'auto',
        marginTop: '10px'
    }
}

export default Form;