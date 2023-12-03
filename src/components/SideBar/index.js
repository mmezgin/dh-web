import React from 'react'
import './index.scss'
import Logo from '../../assets/images/DH 1.png'
import Anasayfa from '../../assets/images/Sidebar - Anasayfa.png'
import Dersler from '../../assets/images/Sidebar - Dersler.png'
import SoruBankasi from '../../assets/images/Sidebar - Soru Bankası.png'
import DenemeSinavlari from '../../assets/images/Sidebar - Deneme Sınavlari.png'
import RehberlikVideolari from '../../assets/images/Sidebar - Rehberlik Videolari.png'
import Istatistik from '../../assets/images/Sidebar - Istatistik.png'
import OlcmeD from '../../assets/images/Sidebar - Olcme Degerlendirme.png'
import Uygulamlar from '../../assets/images/Uygulamalar.png'
import Gorus from '../../assets/images/Gorus Oneri.png'
export default () => {
  return (
    <div className='sideBar'>
      <img src={Logo} className='bigImg' />
      <img src={Dersler} className='clickable smallImg' />
      <img src={SoruBankasi} className='clickable smallImg' />
      <img src={DenemeSinavlari} className='clickable smallImg' />
      <img src={RehberlikVideolari} className='clickable smallImg' />
      <img src={Istatistik} className='clickable smallImg' />
      <img src={OlcmeD} className='clickable smallImg' />
      <img src={Uygulamlar} style={{ width: '120%', marginTop: '10px' }} />
    </div>
  )
}
