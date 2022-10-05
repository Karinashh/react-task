
import {useForm} from "react-hook-form"
    const Form =({setUsers}) => {

        let {register, handleSubmit} = useForm();

        const submit = (data) => {

            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((response) => setUsers (users => [...users, response]));

        }
        return (<form onSubmit={handleSubmit(submit)}>
            <input placeholder={'name'} {...register("name", {required:true})}/>
            <input placeholder={'username'} {...register("username", {required:true})}/>
            <input placeholder={'email'} {...register("email", {required:true})}/>

            <input type={'submit'} value={'save new user'}/>
        </form>)
}
export {Form}

