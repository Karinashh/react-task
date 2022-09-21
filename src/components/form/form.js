
import {onSubmit} from "../link/link";
import {useForm} from "react-hook-form";

export default function Form() {
    let {register, handleSubmit} = useForm({defaultValues:{userId:"10"}});
    return (<form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={'title'} {...register("title", {required:true})}/>
        <input placeholder={'body'} {...register("body", {required:true})}/>
        <input type={'submit'} value={'save post'}/>
        <select {...register("userId")}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </form>)
}


