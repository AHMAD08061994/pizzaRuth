import './CadastrarProdutos.css'

function CadastrarProdutos() {

    return (
        <div>
            <div className='w-100vw bg-red-200'>
                <nav className="navBar   border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" class="flex items-center">
                            {/* <img src="" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pizza Ruth</span>
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border   md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                <li>
                                    <a href="/cardapio" class="block py-2 pl-3 pr-4 text-white rounded bg-black botaoCriar">Cardápio</a>
                                </li>
                                <li>
                                    <a href="/cardapio" class="block py-2 pl-3 pr-4 text-white rounded bg-black botaoCriar">
                                        Sair
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="  corpoProdutos w-full h-screen">
                <div className='w-full flex justify-center'>
                    <h2>Seja bem-vindo <span id='nomeUsuario'></span></h2>
                </div>
                <div className=" w-full flex h-[50vh] justify-center items-center">
                    <div className=" flex w-8/12 justify-between items-center">
                        <a href="cadastrarpizza " className='w-5/12 rounded-md h-[20vh] flex justify-center items-center'>
                            <div className="testeProdutos w-full rounded-md h-[20vh] flex justify-center items-center">
                                <p>Cadastrar Pizza</p>
                            </div>
                        </a>
                        <a href="/cadastrarsobremesa" className='w-5/12 bg-red-300 rounded-md h-[20vh] flex justify-center items-center'>
                            <div className="w-full bg-red-300 rounded-md h-[20vh] flex justify-center items-center">
                                <p>Cadastrar Sobremesa</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full flex justify-center items-start h-[50vh]">
                    <div className="flex w-8/12 justify-between ">
                        <a href="cadastrarentrada" className="w-5/12 bg-red-300 rounded-md h-[20vh] flex justify-center items-center">
                            <div className="w-full bg-red-300 rounded-md h-[20vh] flex justify-center items-center">
                                <p>Cadastrar Entrada</p>
                            </div>
                        </a>
                        <a href="cadastrar" className="w-5/12 p-0 bg-red-300 rounded-md h-[20vh] flex justify-center">
                            <div className="w-full bg-red-300 rounded-md h-[20vh] flex justify-center items-center">
                                <p>Cadastrar Usuário</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default CadastrarProdutos
