/* eslint-disable react/no-unknown-property */
import './Menu.css'
 




function Menu () {

    return (
        <div className='w-100vw'>

            <nav className="navBar  bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center">
                    {/* <img src="" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pizza Ruth</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border   md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/usuarios" className="block py-2 pl-3 pr-4 text-black">Usuários</a>
                        </li>
                        <li>
                            <a href="/cadastrar" class="block py-2 pl-3 pr-4 text-white rounded bg-black botaoCriar">Criar Conta</a>
                            
                        </li>
                        <li>
                            <a href="/cardapio" class="block py-2 pl-3 pr-4 text-white rounded bg-black botaoCriar">Cardápio</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
            </nav>
            <div className="row-span-1 md:w-full">
                <img src="./src/assets/tempero.jpeg" className=" img-home md:shrink-0 w-full"  alt="back" srcset="" />
            </div>
            
    </div>

      
    )
}

export default Menu