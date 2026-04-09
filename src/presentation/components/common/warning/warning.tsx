'use client'

import { useState } from 'react'

import { ICON } from 'src/presentation/assets'

import S from './warning.module.scss'

const Warning = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className={S.container}>
      <div className={S['box-section']}>
        <h1 className={S.title}>
        Atenção: Não realizamos cobrança de taxas antecipadas para aquisição do seu consórcio. Em caso de dúvidas, fale com nosso time no (19) 99327-3002.
        </h1>
        <ICON.IconX size={30} className={S.icon} onClick={() => setIsVisible(false)} />
      </div>
    </div>
  )
}

export default Warning
