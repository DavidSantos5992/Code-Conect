import { Prompt } from 'next/font/google'

import { Aside } from '@/Components/Aside';
import './globals.css'

export const metadata = {
  title: "Code-Conect",
  description: "Uma rede social para devs!",
};

const prompt = Prompt({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>

          <div>
            <Aside />
          </div>
          
          <div className='main-content'>
            {children}
          </div>

        </div>
      </body>
    </html>
  )
}