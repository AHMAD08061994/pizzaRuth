/* eslint-disable react/no-unknown-property */
import { useEffect, useState, React } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios"
import './Cadastrar.css'


function Cadastrar() {

    const [cep, setCep] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUF] = useState("");

    const cadastrarUsuario = (e) =>  {
        e.preventDefault();

        const title = "Cadastro";
        const body = {'nome' : nome, 'email': email, 'senha': senha, 'logradouro': logradouro, 'numero': numero, 'bairro': bairro, 'cidade': cidade, "uf": uf, 'cep': cep};

        try {
            const resposta =  axios.post('http://localhost/api/cadastrar', {body: body,},{headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            
        } catch (error) {
            console.log(error);
        }
    }

    const verCep = (e) => {
        e.preventDefault();
        pesquisarCep(cep)
    }    
    
    function pesquisarCep(valor){
        var cepDigitado = valor.replace(/\D/g,'');

        if (cepDigitado != "")
        {
            var validaCep = /^[0-9]{8}$/;

            if(validaCep.test(cepDigitado))
            {
                fetch('https://viacep.com.br/ws/'+ cepDigitado + '/json/')
                .then((response) => response.json())
                .then((json) => colocarResultado(json));
            } else {
                limparFormulario();
                alert("CEP não existe. ");
            }
        }
        else{
            limparFormulario();
        }
    }

    function limparFormulario(){
        document.getElementById('endereco').value = "";
        setLogradouro("");
        document.getElementById('bairro').value = "";
        setBairro("");
        document.getElementById('cidade').value = "";
        setCidade("");
        document.getElementById('uf').value = "";
        setUF("");
    }

    function colocarResultado(resultado){
        if(!("erro" in resultado))
        {
            document.getElementById('logradouro').value = resultado.logradouro;
            setLogradouro(resultado.logradouro);
            document.getElementById('bairro').value = resultado.bairro;
            setBairro(resultado.bairro);
            document.getElementById('cidade').value = resultado.localidade;
            setCidade(resultado.localidade);
            document.getElementById('uf').value = resultado.uf;
            setUF(resultado.uf);
        }
    }

    return (
        
        <div className="tela">
            <div className="divNav border bg-red-200 items-center flex flex-row sm:w-[100vw] sm:h-[2vh] md:w-[100vw] md:h-[8vh]">
                <div className="md:w-[50vw]  text-center align-middle">
                    <nav className=" flex flex-row justify-center sm:w-[100vw] md:w-[50vw]  sm:text-[2px] md:text-sm md:ml-10 ">
                        <ul className="flex flex-row items-center ">
                            <a href="/">
                                <img src="https://www.pizzahut.com.br/assets/back.4be71058.svg"  className="" alt="" />
                            </a>
                            <li className=""><a href="/"><p className="  sm:text-xs md:text-[5rem] block py-2 pl-3 pr-4 text-white rounded bg-red-700"> Voltar para Home</p></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="md:w-[50vw]">
                    
                </div>
            </div>
            <div className=" flex md:w-full md:h-full pt-5 gap-x-36 items-center justify-center">
                <div className="sm:w-4/12 sm-h-[10vh] md:w-4/12 ">
                    <img src="./src/assets/back-cadastrar.png" alt="" />
                </div>
                <div className=" md:w-5/12 md:h-[80vh] justify-center">
                    <div className="md:h-[5rem] w-full flex items-center">
                        <h2 className="md:text-[2.5rem] text-center flex"><b>Criar minha conta</b></h2>
                    </div>
                    
                    <form onSubmit={(e) => cadastrarUsuario(e)}>
                        <div className="w-full">
                            <label className="md:text-[1.5rem]">Qual seu Nome e Sobrenome?</label>
                            <div className="w-full md:mt-[0.5rem]">
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome" id="nome" placeholder="Informe seu nome completo" className="input  md:w-[30rem] md:h-[2.5rem] md:pl-5" required/>
                            </div>
                            
                        </div>
                        <div className="w-full md:mt-[1rem]">
                            <label className="md:text-[1.5rem]">Digite sua senha: </label>
                            <div className="w-full md:mt-[0.5rem]">
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} name="senha" id="senha" placeholder="Mínimo 6 digitos" className="input  md:w-[30rem] md:h-[2.5rem]  md:pl-5 " required/>
                            </div>
                            
                        </div>
                        <div className="w-full md:mt-[1rem]">
                            <label className="md:text-[1.5rem]">Digite seu E-mail:</label>
                            <div className="w-full md:mt-[0.5rem]">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="example@email.com" className="input  md:w-[30rem] md:h-[2.5rem]  md:pl-5 "required />
                            </div>
                        </div>
                        <div className="w-full md:mt-[1rem] flex">
                            <div className="w-3/12 flex ">
                                <label className=" ">CEP:</label>
                                <div className="w-8/12">
                                <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={(e) => verCep(e)} name="cep" id="cep" placeholder="11111-000"  className="input w-full md:pl-3 text-sm "required />
                                </div>
                            </div>
                            <div className="w-3/12 flex">
                                <label className="">Cidade:</label>
                                <div className="w-10/12">
                                <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} name="cidade" id="cidade" placeholder="Santos" className="input text-sm w-full  md:pl-3 " disabled />
                                </div>
                            </div>
                            <div className="w-1/12 flex">
                                <label className="">UF:</label>
                                <div className="w-full">
                                <input type="text" value={uf} onChange={(e) => setUF(e.target.value)} size="2" name="uf" id="uf" placeholder="SP" className="input text-sm w-full  md:pl-1" disabled/>
                                </div>
                            </div>
                            <div className="w-5/12 flex">
                                <label className="">Bairro:</label>
                                <div className="">
                                <input type="text" size="40" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} id="bairro" placeholder="PQ. São Vicente" className="input text-sm w-11/12 pl-3 " disabled />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center mt-3">
                            <div className="w-8/12 flex">
                                <label className="">Logradouro:</label>
                                <div className="w-full">
                                <input type="text" value={logradouro} 
                                onChange={(e) => setLogradouro(e.target.value)} name="logradouro" id="logradouro" size="60" placeholder="Frei Gaspar" className="input text-sm w-11/12 pl-3 " disabled />
                                </div>
                            </div>
                            <div className="w-2/12 flex">
                                <label className="">Nº:</label>
                                <div className="">
                                <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} name="numero" id="numero" placeholder="1640" className="input text-sm w-11/12  md:pl-2"required/>
                                </div>
                            </div>
                       </div>
                       <div className="w-full  justify-center">
                        <input type="submit" value="Cadastrar" className="w-full rounded-full text-lg mt-5 text-center text-neutral-50 justify-center py-2 bg-red-700 flex " />
                            <p className="md:ml-[6.5rem] md:mt-[1rem]">Já tem uma conta? <a className="text-red-700" href="/login">Acesse aqui</a></p>
                       </div>
                    </form>

                </div>
            </div>
            <hr className=' linha' />
           
        </div>



    )

}

export default Cadastrar