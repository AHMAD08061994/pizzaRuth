import './Cardapio.css'
import Footer from '../componentes/Footer'
import { FiHome } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { PiUserCircle } from 'react-icons/pi'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { GiFullPizza } from 'react-icons/gi';
import { BsFire } from 'react-icons/bs';
import { MdMenuBook } from 'react-icons/md'
import { LiaPizzaSliceSolid } from 'react-icons/lia'
import { BiShocked } from "react-icons/bi";
import { LuDessert } from "react-icons/lu";
import { useEffect, useState } from "react";



function Cardapio (){

  const [pizzas, setPizzas] = useState([]);

    function data(){
        fetch('http://localhost/api/pizzas')
        .then((response) => response.json())
        .then((json) => setPizzas(json))
    }

    useEffect(() => {
      data();
  }, [])
    
  const [entradas, setEntradas] = useState([]);

    function datae(){
        fetch('http://localhost/api/entradas')
        .then((response) => response.json())
        .then((json) => setEntradas(json))
    }

    useEffect(()=>{
      datae();
    }, [])

    const [sobremesas, setSobremesas] = useState([]);

    function datas(){
      fetch('http://localhost/api/sobremesas')
      .then((response) => response.json())
      .then((json) =>setSobremesas(json))
    }
    useEffect(()=>{
      datas();
    }, [])
    

    return(
        <div className='corpo md:w-[100vw] md:h-[100vh] font-semibold'> 
          <div className='nav flex w-full justify-center h-[10vh]'>
            <div className="flex justify-center w-8/12">
              <div className='flex md:w-5/12 items-center'>
                <div className='flex  w-2/12'>
                  <a href="/" className='flex items-center'>
                    <p className='text-lg bg-red-50 text-red-700 p-1 rounded-lg '><FiHome /></p>
                    <p className='font-normal text-sm text-red-700'>Home</p>
                  </a>
                </div>
                <div className='txtCardapio hover:text-red-700 justify-center ml-1 w-3/12 flex items-center'>
                  <a href="/cadastrar" className='flex items-center'> 
                    <p className='text-lg pr-1 '><MdMenuBook/></p>
                    <p className='text-sm font-normal '>
                      Cardápio
                    </p>
                  </a>
                </div>
                <div className='flex justify-center w-3/12 hover:text-red-700'>
                  <a href="/cadastrar" className='flex items-center'>
                    <p className='text-lg p-1'>
                      <LiaPizzaSliceSolid/>
                    </p>
                    <p className='font-normal text-sm'>                      
                      Meio a meio
                    </p>
                  </a>
                </div>
              </div>
              <div className='nav1 flex justify-end md:w-7/12 items-center '>
                <div className='flex items-center text-lg'>
                  <CiLocationOn/>
                  <p className='mx-1 text-sm font-normal'>
                    Rua: Frei Gaspar, 1640
                  </p>
                  <p className='text-red-700 flex items-center'>
                    <a href="#">  
                      <IoIosArrowDown/>
                    </a>
                  </p>
                </div>
                <div  className='flex md:mt-1 md:ml-9 iUser bg-red-100'></div>
                  <div className=' text-red-700 flex items-center'>
                    <a href="#" className='flex items-center'>
                      <p className='flex items-center bg-red-50 p-1 text-lg rounded-md'>
                      <PiUserCircle/>
                      </p>
                      <p className='ml-1'>
                        Meu perfil
                      </p>
                    </a>
                  </div>
                </div>  
              </div>
          </div>
          <hr className=" border-black " />
          <div className="flex  md:w-full justify-center md:h-[5rem] items-center">
            <div className="flex w-8/12">
              <div className="flex md:w-4/12 items-center">
                  <p className='iStore flex items-center pr-1 text-red-700'><SiHomeassistantcommunitystore/></p>
                  <p className='text-red-700 font-normal'>Loja: </p>
                  <p className='md:ml-2 font-normal text-gray-600'>PH FCD LITORAL PLAZA - SP</p>
              </div>
              
              <div className="flex md:w-6/12 justify-end ">
                <div className='border border-gray-400 rounded-3xl flex md:w-12/12 md:h-[3rem] justify-between items-center md:px-3'>
                  <div className='md:h-[2rem] md:w-6/12 mr-5  bg-red-700 justify-center text-center flex items-center text-white rounded-3xl '>
                    <a href="#">
                      <p className='text-sm px-2'>
                        Delivery
                      </p>
                    </a>
                  </div>
                  <div className='flex items-center  text-gray-400'>
                    <a href="#">
                      Retirada
                    </a>
                  </div>
                </div>
              </div>
              <div className='divBorda md:ml-9'>
              </div>
              <div className="divItens w-2/12 justify-end flex items-center md:pl-2">
                  <p className='text-2xl'>
                    <GiFullPizza/>
                  </p>
                  <div className='md:pl-2 tItens'>
                    <p>R$ 0,00</p>
                    <p>0 itens</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex banner justify-center w-11/12 md:h-[5rem]">
              <div className="flex w-full">
                <div className="flex md:w-6/12  justify-end items-center">
                  <p>
                    Para ofertas exclusivas
                  </p>
                  <div className='flex justify-end items-center w-3/12'>
                      <button type="button" className='btnCriar flex items-center justify-center text-white hover:bg-opacity-80 w-11/12 bg-red-700 rounded-2xl py-1'>Criar conta</button>
                  </div>
                </div>
                <div className="back flex md:w-8/12  justify-center items-center">
                    <div className="flex md:w-9/12 items-center justify-end">
                      <p className='text-start text-white'>
                        Já tem uma conta?
                      </p>
                      <a href="#" className='aEntrar md:ml-5'>
                        Entrar
                      </a>
                    </div>
                </div>                       
              </div>
            </div>
            <div className="flex justify-end fundo md:w-2/12">
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className='flex flex-wrap w-8/12'>
              <div className="flex justify-center md:w-full py-8 items-center ">
                <a href="#" className='w-full'>
                  <img src="./src/assets/tartaruga.png" alt="" className='w-full rounded-lg'/>
                </a>
              </div>
              <div className="flex justify-between w-full">
                <p className='flex items-center text-2xl'><BsFire/>Dá um Ruth nessas ofertas!</p>
                <a href="#" className='underline text-red-700'>Ver todas</a>
              </div>
              <div className="flex flex-wrap w-12/12 justify-center items-center py-9">
                  <div className='flex px-2 w-4/12 '>
                    <a href="#" className='w-12/12'>
                      <img src="./src/assets/bannerDaum.jpg" className='rounded-xl' alt="" />
                    </a>
                  </div>
                  <div className='flex px-2 md:mx-auto w-4/12'>
                  <a href="#">
                    <img src="./src/assets/bannerDaum.jpg" className='rounded-xl' alt="" />
                  </a>
                  </div>
                  <div className='flex px-2 w-4/12'>
                  <a href="#">
                    <img src="./src/assets/bannerDaum.jpg" className='rounded-xl' alt="" />
                  </a>
                  </div>
              </div>
              <div className="flex md:w-full justify-between">
                <p className='text-2xl'>Tá na mão as mais recomendadas</p>
              </div>
              <div className="flex justify-start w-full py-5">
                <div className="flex w-6/12 items-center">
                  <p className='pr-2 text-red-600 text-2xl'><GiFullPizza /></p>
                  <p className='font-medium'>Pizzas</p>
                </div>
                <div className="flex w-6/12 justify-end">
                  <a href="#" className=' underline text-red-700'>Ver todas</a>
                </div>
              </div>

              {/* Cardapio pizzas */}

              <div className='w-full justify-center flex  gap-x-5'>
                {pizzas.map((pizza)   =>
                  <div key={pizza.id} className='cardPizza  flex flex-wrap w-4/12 border border-inherit rounded-lg'>
                      <div className="flex w-full justify-between pr-2">
                          <div className=" flex-wrap w-8/12 px-2 py-2">
                            <p className='nmPizza font-normal text-gray-800  text-lg whitespace-nowrap'>{pizza.nm_pizza}</p>
                            <p className=' dsPizza font-normal text-gray-400 text-xs mb-5 h-3.8rem  '>{pizza.ds_pizza}</p>
                            <p className='font-normal text-gray-400 text-xs'>A partir de:</p>
                            <p className='font-medium'>R$ {pizza.vl_pizza},00</p>
                          </div>
                          <div className="flex overflow-hidden h-[8rem] border w-4/12 my-2 rounded-lg justify-end items-center">
                            <div className=''>
                              <img className="scale-125" src={pizza.img_pizza} alt=""/>
                            </div>
                          </div>
                      </div>
                      <hr className='w-full borde border-gray-20'/>
                      <div className='flex justify-end items-end w-full py-2 px-2'>
                        <button className='hover:bg-black  hover:text-white hover:transition-all border border-black bg-white text-black px-3 py-1 rounded-full cursor-pointer '>Adicionar</button>
                      </div>
                  </div>
                  )}
              </div>
              <div className="flex w-full py-5 items-center">
                <div className="flex w-6/12 items-center">
                  <p className='pr-2 text-yellow-300 text-2xl'><BiShocked/></p>
                  <p>Entradinhas</p>
                </div>
                <div className="flex w-6/12 justify-end">
                  <a href="#" className=' underline text-red-700'>Ver todas</a>
                </div>
              </div>

              {/* Cardapio entradinhas */}

              <div className='w-full justify-center flex  gap-x-5'>
                {entradas.map((entrada)   =>
                  <div key={entrada.id} className='cardSobremesa flex flex-wrap w-4/12 border border-gray-200 rounded-lg'>
                      <div className="flex w-full justify-between pr-2">
                          <div className=" flex-wrap w-8/12 px-2 py-2 ">
                            <p className='nmEntrada font-medium text-lg whitespace-nowrap'>{entrada.nm_entrada}</p>
                            <p className='dsEntrada font-normal text-gray-400 text-xs mb-5 h-3.8rem overflow-hidden '>{entrada.ds_entrada}</p>
                            <p className='font-normal text-gray-400 text-xs'>A partir de:</p>
                            <p className='font-medium'>R$ {entrada.vl_entrada},00</p>
                          </div>
                          <div className="flex overflow-hidden h-[8rem] border w-4/12 my-2 rounded-lg justify-end items-center">
                            <div className=''>
                              <img className="scale-125" src={entrada.img_entrada} alt=""/>
                            </div>
                          </div>
                      </div>
                      <hr className='w-full borde border-gray-20'/>
                      <div className='flex justify-end items-end w-full py-2 px-2'>
                        <button className='hover:bg-black  hover:text-white hover:transition-all border border-black bg-white text-black px-3 py-1 rounded-full cursor-pointer '>Adicionar</button>
                      </div>
                  </div>
                  )}
              </div>
              <div className="flex w-full py-5 items-center">
                <div className="flex w-6/12 items-center">
                  <p className='pr-2 text-amber-900 text-2xl'><LuDessert/></p>
                  <p>Sobremesas</p>
                </div>
                <div className="flex w-6/12 justify-end">
                  <a href="#" className=' underline text-red-700'>Ver todas</a>
                </div>
              </div>

              {/* Cardapio sobremesas */}

              <div className='w-full justify-center flex  gap-x-5'>
                {sobremesas.map((sobremesa)   =>
                  <div key={sobremesa.id} className='cardSobremesa flex flex-wrap w-4/12  border border-gray-200 rounded-lg'>
                      <div className="flex w-full justify-between pr-2">
                          <div className=" flex-wrap w-8/12 px-2 py-2">
                            <p className='nmSobremesa font-medium text-lg whitespace-nowrap'>{sobremesa.nm_sobremesa}</p>
                            <p className='dsSobremesa font-normal text-gray-400 text-xs mb-5 h-3.8rem overflow-hidden '>{sobremesa.ds_sobremesa}</p>
                            <p className='font-normal text-gray-400 text-xs'>Por :</p>
                            <p className='font-medium'>R$ {sobremesa.vl_sobremesa},00</p>
                          </div>
                          <div className="flex overflow-hidden h-[8rem] border w-4/12 my-2 rounded-lg justify-end items-center">
                            <div className=''>
                              <img className="scale-150" src={sobremesa.img_sobremesa} alt=""/>
                            </div>
                          </div>
                      </div>
                      <hr className='w-full borde border-gray-20'/>
                      <div className='flex justify-end items-end w-full py-2 px-2'>
                        <button className='hover:bg-black  hover:text-white hover:transition-all border border-black bg-white text-black px-3 py-1 rounded-full cursor-pointer'>Adicionar</button>
                      </div>
                  </div>
                  )}
              </div>
              <div className='w-full flex justify-center items-center h-[6rem]'>
                  <button type="submit" className='w-full bg-white border border-black rounded-full hover:border-4 hover:border-gray-800 h-[3rem]'>Ver cardápio completo</button>
              </div>
            </div>
          </div>
          
          
         
          
          
           <Footer></Footer>
        </div>
        

    )

}

export default Cardapio 
 //</div> <div>
// {pizzas.map((pizza)   => 

// <div key={pizza.id}>
        
//         <Card style={{ width: '18rem' }}>
//         <Card.Body>
//             <Card.Title>{pizza.sabor}</Card.Title>
//             <Card.Subtitle> R${pizza.valor}</Card.Subtitle>
//             <Card.Text>
            
//             </Card.Text>
            
//         </Card.Body>
//         </Card>
// </div>

// </div>

