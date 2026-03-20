import { useState } from 'react'

import Logo_google from './assets/Logo_google.png'
import Logo_apple from './assets/Logo_apple.webp'
import Logo_omnimarket from './assets/Logo_omnimarket.jpg'
import Logo_apple2 from './assets/Logo_apple2.jpg'

import { Lock, Mail } from "lucide-react";


function App() {

  return (
    //tela de fundo
    <div className='w-screen h-screen bg-black m-0 '>
      <div className='p-6 flex flex-col justify-center'>
        <img src={Logo_omnimarket} alt="Logo omnimarket" className='mx-auto border border-yellow-400 h-[150px] w-[150px] hover:animate-spin'/>
        <h1 className='text-white flex justify-center text-[80px] hover:animate-spin'>OmniMarket</h1>
        <h4 className='text-white flex justify-center text-[20px]'>Compre e venda em um só lugar!</h4>
      </div>

      {/*div da parte central(inputs, botoes)*/}
      <div className="flex items-center justify-center bg-black">
        <div className='bg-[#0f0f0f] rounded-3xl border-gray-950 flex justify-center h-[500px] w-[400px] border border-yellow-400' >
    
          <div className='flex flex-col'>
            <div className='flex flex-col p-3'>
              <label className='text-white'>E-MAIL</label>
              <input type="email" placeholder='Digite o seu email' className='rounded-2xl p-1 bg-black placeholder-[#6b6b6b] text-white border border-[6B6B6B]'/>
          </div>

          <div className='flex flex-col p-3'>
            <label className='text-white'>SENHA</label>
            <input type="password" placeholder='Digite a sua senha' className='rounded-2xl p-1 bg-black placeholder-[#6b6b6b] text-white border border-[6B6B6B]'/>
          </div>

          <div className='flex justify-between gap-12 p-3'>
            <label className='text-[#6b6b6b]'>
              <input type="checkbox" className='accent-black cursor-pointer'/>
              Lembrar-me
            </label>
            <a href="" className='hover:underline text-yellow-400'>Esqueci minha senha</a>
          </div>

          <div className='flex justify-center'>
            <button className='bg-yellow-500 rounded-2xl hover:animate-spin h-[45px] w-[250px] justify-center m-3'>ENTRAR</button> 
          </div> 

          <p className='text-center text-[#6B6B6B] m-3'>------------------------OU------------------------</p>

          <div className='flex justify-center flex-col gap-5'>
            <button className="flex items-center justify-center gap-3 w-full h-[44px] bg-black text-white rounded-xl border border-[#6B6B6B] hover:bg-neutral-900 transition">
              <img src={Logo_google} alt="Logo Google" className="w-5 h-5"/>
              <span className="font-medium">Continuar com o Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 w-full h-[44px] bg-black text-white rounded-xl border border-[#6B6B6B] hover:bg-neutral-900 transition">
              <img src={Logo_apple2} alt="Logo Apple" className="w-5 h-5"/>
              <span className="font-medium">Continuar com a Apple</span>
            </button>
          </div>
      </div>

 

        </div>
      </div>
    </div>
  )
}

export default App
