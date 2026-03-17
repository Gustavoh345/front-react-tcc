import { useState } from 'react'


function App() {

  return (
    //tela de fundo
    <div className='w-screen h-screen bg-black'>
      <div className='p-6'>
        <img src="" alt="Logo omnimarket"/>
        <h1 className='text-white justify-center'>OmniMarket</h1>
        <h4 className='text-white justify-center'>Compre e venda em um só lugar!</h4>
      </div>

      {/*div da parte central(inputs, botoes)*/}
      <div className='bg-[#0f0f0f] rounded-3xl border-gray-950 flex justify-center h-[200] w-[200]'>
        <div className='flex flex-col'>

          <div className='flex flex-col p-2'>
            <label className='flex justify-start'>E-MAIL</label>
            <input type="email" placeholder='Digite o seu email' className=' rounded-2xl p-1 bg-black placeholder-white justify-start'/>
          </div>

          <div className='flex flex-col p-2'>
            <label className='flex justify-start'>SENHA</label>
            <input type="password" placeholder='Digite a sua senha' className='rounded-2xl p-1 bg-black placeholder-white'/>
          </div>

          <div className='flex justify-between gap-12'>
            <label>
              <input type="checkbox" className='accent-black cursor-pointer '/>
              Lembrar-me
            </label>
            <a href="" className='hover:underline text-yellow-400'>Esqueci minha senha</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
