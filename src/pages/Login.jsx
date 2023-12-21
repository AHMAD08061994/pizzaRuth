import './Login.css'
import { useState } from 'react';
import axios from 'axios';


function Login() {


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const getDados = async (e) => {
        e.preventDefault();
        const body = { 'Email': email, 'Senha': senha }
        try {
            
            const respostaReq =  axios.post('http://localhost/api/getDados', { body: body }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
            // $nome = respostaReq.data->nm_completo_usuario;

            if (resposta == true) {
                localStorage.setItem(resposta);
            } else {
                
            }
        } catch (error) {
            
        }


    }
    

    const logarUsuario = async (e) => {
        e.preventDefault();

        const body = { 'Email': email, 'Senha': senha }
        try {
            const resposta = await axios.post('http://localhost/api/logar', { body: body }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } });
            // console.log(resposta);
            // $prev = resposta.nm_previlegio;
            // var_dump($prev);
            if (resposta.data == "Adm") {
                // location.href = 'http://localhost:5173/cadastrarprodutos';
                // var_dump(resposta);
            } else {
                if(resposta.data == "cliente") {
                    location.href = 'http://localhost:5173/cardapio';

                } else {
                    alert('Usuário não encontrado!');
                }
            }
            // if (resposta.data == "true")
            // {
            //     console.log('entrando no resposta')
            //     location.href = 'http://localhost:5173/menuFuncionario';
            // }
        }
        catch (error) {
            console.log(error);
            console.log('Algo deu errado :(');
        }
    }

    // function decidirLogin(resposta) {
    //     if (resposta == "true") {
    //         if(resposta.nm_previlegio == "Adm"){
    //             location.href = 'http://localhost:5173/cadastrarprodutos';
    //         } else {
    //             location.href = 'http://localhost:5173/home';
    //         }
    //     }
    // }
    return (
        <div className="w-full h-screnn">
            <div className="w-full border border-gray-200 border-b-1 ">
                <div className="w-3/12 flex justify-end py-2 ">
                    <ul>
                        <li className=""><a href="/"><p className="bg-red-100   sm:text-xs text-base block py-2 pl-3 pr-4 text-red-700 rounded "> Voltar para Home</p></a></li>
                    </ul>
                </div>
            </div>
            <div className="flex w-full bg-red-100 items-center  h-[93vh]">
                <div className='w-6/12 flex justify-center py-2 h-full'>
                    <img src="./src/assets/backlogin.png" className='rounded-2xl' alt="" />
                </div>
                <div className='w-6/12 flex  rounded-2xl'>
                    <form id='formLogin' name='formLogin' onSubmit={(e) => logarUsuario(e)} className='border w-8/12 bg-white border-gray-300 rounded-2xl p-10'>
                        <h1 className='text-center  text-lg pb-4 '>Login :</h1>
                        <div className='relative z-0 w-full mb-6 group'>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className='block py-2.5 px-0 w-full text-sm text-grey-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ' required />
                            <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                Email
                            </label>
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                            <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" name="senha" id="senha" className='block py-2.5 px-0 w-full text-sm text-grey-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ' required />
                            <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                Senha
                            </label>
                            <div className='w-full flex justify-center items-center pt-5'>
                                <div className='w-6/12 bg-blue-400 flex justify-center rounded-full cursor-pointer py-2'>
                                    <input type="submit" onSubmit={(e) => getDados(e)} value="Entrar" className=' cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Login