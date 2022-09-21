
import {onSubmit} from "../link/link";
import {useForm} from "react-hook-form";

export default function Form() {
    let {register, handleSubmit} = useForm();
    return (<form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={'name'} {...register("name", {required:true})}/>
        <input placeholder={'username'} {...register("username", {required:true})}/>
        <input placeholder={'email'} {...register("email", {required:true})}/>

        <input type={'submit'} value={'save new user'}/>
    </form>)
}


