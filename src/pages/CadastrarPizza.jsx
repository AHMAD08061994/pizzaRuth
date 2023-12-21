import { useState } from 'react'
import './CadastrarPizza.css'
import axios from 'axios'
import React from 'react';


function CadastrarPizza() {

    const [nomePizza, setNomePizza] = useState("");
    const [descPizza, setDescPizza] = useState("");
    const [valorPizza, setValorPizza] = useState("");
    const [imgPizza, setImgPizza] = useState("");

    const cadastrarPizza = async (e) => {
        // e.preventDefault();

        const title = "CadastrarPizza";
        const body = { 'nomePizza': nomePizza, 'descPizza': descPizza, 'valorPizza': valorPizza, 'imgPizza': imgPizza };

        try {
            const resposta = await axios.post('http://localhost/api/cadastrarpizza', { body: body }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } });
            console.log(resposta);
        } catch (error) {
            console.error(error);


        }
    }


    return (


        <div className="flex w-full h-full justify-center">
            <div className="flex w-10/12 justify-end items-center h-screen ">
                <div className="w-8/12 divRuthinha h-screen">

                </div>
                <div className="w-4/12 divForm rounded-2xl bg-red-100">
                    <form className="border  border-gray-300 rounded-2xl p-10" onSubmit={(e) => cadastrarPizza(e)}>
                        <h1 className="text-center pb-5 ">Cadastre sua pizza</h1>
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={(e) => setNomePizza(e.target.value)} type="text" name="nomePizza" id="nomePizza" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome da Pizza</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={(e) => setDescPizza(e.target.value)} type="text" name="descPizza" id="descPizza" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrição da Pizza</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={(e) => setValorPizza(e.target.value)} type="number" name="valorPizza" id="valorPizza" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Valor da Pizza R$</label>
                        </div>
                        <div className="">
                            <div class="relative z-0 w-full mb-6 group">
                                <input onChange={(e) => setImgPizza(e.target.value)} type="text" name="imgPizza" id="imgPizza" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">URL da Imagem</label>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-red">Cadastrar</button>
                    </form>
                </div>


            </div>
        </div>



    )
}
export default CadastrarPizza
