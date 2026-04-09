import { type ReactNode } from 'react'

import { Navbar } from 'src/presentation/components'

import { ICON } from 'src/presentation/assets'

import S from './default.module.scss'
interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div>
    <Navbar />
    <main>{children}</main>

    <a
      href="https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20PRIMORA%20Capital%20e%20gostaria%20de%20saber%20mais%20informações!"
      target="_blank"
      rel="noopener noreferrer"
      className={S['whatsapp-button']}
    >
      <ICON.IconBrandWhatsapp className={S.icon} />
    </a>

  </div>
)

export default DefaultLayout
