/* eslint-disable react/no-unknown-property */
import Menu from '../componentes/Menu';
import Footer from '../componentes/Footer'
import './Home.css'
import { BiCurrentLocation } from 'react-icons/bi';

// import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';



function Home(){


    return (
       
            
         <div className="telaHome grid grid-rows flex-row">
         
            <div className="menu">
                <Menu/> 
            </div>
            <div className="divLocalizacao  justify-self-center md:mt-[10rem] md:absolute md:w-6/12 md:h-[50vh] p-16 bg-white">
                <div className="md:text-[1.5rem] text-justify md:w-full py-2 ">
                    <p><b>Peça sua pizza em casa ou retire na loja mais próxima</b></p>
                </div>
                <div className="subTitle md:text-[1rem] py-2 md:w-full">
                    <p>Informe seu endereço para encontrarmos a Pizza Hut mais próxima de você</p>
                </div>
                <div className='w-full py-5'> 
                    <input type="text" className="inputLocalizacao border  bg-slate-50 md:w-[40vw] md:h-[5vh]  md:pl-[2rem] " placeholder="Informe endereço e número " />
                </div>
                <div className="md:w-full py-2 flex items-center justify-center">
                    <p></p>
                    <p className=' text-red-700 underline  underline-offset-1'><a href="/cardapio" className='flex items-center'><BiCurrentLocation/> Usar minha localização atual</a></p>
                </div>
            </div>

            <div className="flex flex-col md:mt-[13rem] md:w-[20rem]  justify-self-center">
                <img src="./src/assets/queijo.svg" alt="" />
            </div>
            <div className="flex flex-col justify-self-center">
                <p className="md:text-[2.5rem] text-center"><b>Temos novidades saindo do forno</b></p>
                <p className="md:text-sm text-center">Aproveite! Peça agora nossas novidades informando seu endereço acima e dê um Hut no seu dia</p>
            </div>
            <div className="flex justify-center md:my-10 md:w-[100vw] md:h-[30vh] " >
                <img src="./src/assets/tartaruga.png" alt="" />
            </div>
           <Footer></Footer>
            
        
            
        </div> 
        
        
    )

}

export default Home