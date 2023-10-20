/* eslint-disable react/no-unknown-property */

import Footer from '../componentes/Footer'
import './Cadastrar.css'


function Cadastrar(){

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
            <div className="sm:flex-col md:flex md:flex-row md:w-[100wh] md:h-[100vh] md:mt-[13rem] justify-center">
                <div className="sm:w-[10vw] sm-h-[10vh] md:w-[30vw] md:h-[80vh]">
                    <img src="./src/assets/back-cadastrar.png" alt="" />
                </div>
                <div className="grid-rows md:w-[30vw] md:h-[80vh] md:ml-[5rem]">
                    <div className="md:h-[5rem]">
                        <h2 className="md:text-[2.5rem]"><b>Criar minha conta</b></h2>
                    </div>
                    
                    <form action="row-span ">
                        <div className="row-span-1">
                            <label className="md:text-[1.5rem]">Qual seu Nome e Sobrenome?</label>
                            <div className="row-span-1 md:mt-[0.5rem]">
                            <input type="text" name="nome" id="nome" placeholder="Informe seu Nome" className="input md:w-[30rem] md:h-[2.5rem] md:pl-5"/>
                            </div>
                            
                        </div>
                        <div className="row-span-1 md:mt-[1rem]">
                            <label className="md:text-[1.5rem]">Digite sua senha: </label>
                            <div className="row-span-1 md:mt-[0.5rem]">
                            <input type="password" name="senha" id="senha" placeholder="Mínimo 6 digitos" className="input  md:w-[30rem] md:h-[2.5rem]  md:pl-5 "/>
                            </div>
                            
                        </div>
                        <div className="row-span-1 md:mt-[1rem]">
                            <label className="md:text-[1.5rem]">Digite seu E-mail:</label>
                            <div className="row-span-1 md:mt-[0.5rem]">
                            <input type="text" name="email" id="email" placeholder="example@email.com" className="input  md:w-[30rem] md:h-[2.5rem]  md:pl-5 " />
                            </div>
                        </div>
                       <div className="row-span-1">
                       <button type="button" className="text-white bg-red-700 md:w-[30rem] md:h-[3rem] md:mt-[5rem] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Criar</button>
                            <p className="md:ml-[6.5rem] md:mt-[1rem]">Já tem uma conta? <a className="text-red-700" href="">Acesse aqui</a></p>
                       </div>
                    </form>

                </div>
            </div>
            <hr className=' linha' />
           
        </div>



    )

}

export default Cadastrar