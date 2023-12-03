import React, { useState } from 'react'
import leftArrow from '../../assets/images/arrow-left.png'
import Alert from '../../assets/images/Alert.png'
import Brush from '../../assets/images/Brush.png'
import ZoomIn from '../../assets/images/Zoom-in.png'
import ZoomOut from '../../assets/images/Zoom-out.png'
import Close from '../../assets/images/Close.png'
import Ders from '../../assets/images/Ders Ico.png'
import AlertCircle from '../../assets/images/alert-circle.png'
import Vazgec from '../../assets/images/Button.png'
import Cik from '../../assets/images/Button2.png'
import './index.scss'
import { testData } from '../../questions'
import Selections from './Selections'
import Switch from 'react-switch'
import Optic from './Optic'
import { TestContext } from '../../helpers/context'
import { useEffect } from 'react'

export default () => {
  const [iterator, setIterator] = useState(0)
  const [checked, setChecked] = useState(true)
  const [test, setTest] = useState(testData)
  const [popupState, setPopupState] = useState(false)
  useEffect(() => {
    console.log('qu,z', test)
  }, [test])

  const handleChange = () => {
    setChecked(!checked)
  }
  const contextData = {
    iterator,
    setIterator,
    test,
    setTest,
  }
  const closePopup = () => {
    setPopupState(false)
  }
  return (
    <>
      <TestContext.Provider value={contextData}>
        <div className='quizContainer'>
          <div className='left'>
            <div className='top'>
              <img
                src={leftArrow}
                className='clickable leftArrow'
                alt='Go Back'
              />
              <h3
                style={{
                  margin: 0,
                }}>{`${test.testName} #${test.testOrder}`}</h3>
            </div>
            <div className='content'>
              <div className='top'>
                <div className='questionInfo'>
                  <p>{`Soru: ${test.lesson} #${iterator + 1}`}</p>
                </div>
                <div className='tools'>
                  <img src={Brush} className='clickable toolImg' />
                  <img src={ZoomIn} className='clickable toolImg' />
                  <img src={ZoomOut} className='clickable toolImg' />
                  <img src={Alert} className='clickable toolImg' />
                </div>
              </div>
              <div
                className='questionText noselect'
                dangerouslySetInnerHTML={{
                  __html: test.questions[iterator]?.question,
                }}></div>
              <Selections data={test.questions[iterator]} />
            </div>
            <div className='bottom'>
              {iterator > 0 ? (
                <div
                  className='prev clickable noselect'
                  onClick={() => setIterator(iterator - 1)}>
                  <p>Önceki Soru</p>
                </div>
              ) : (
                <div />
              )}
              {iterator < test.questions.length - 1 ? (
                <div
                  className='next clickable noselect'
                  onClick={() => setIterator(iterator + 1)}>
                  <p>Sonraki Soru</p>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
          <div style={{ width: '40px' }} />
          <div className='right'>
            <div className='top'>
              <div className='switchContainer'>
                <p>Cevapları Göster</p>
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  className='react-switch'
                />
              </div>
              <img
                src={Close}
                className='clickable closeImg'
                onClick={() => setPopupState(true)}
              />
            </div>
            <div className='content'>
              <div className='top'>
                <img src={Ders} className=' toolImg' />
                <div>
                  <h5>{test.lesson}</h5>
                  <p>{`${test.questions.length} Soru`}</p>
                </div>
              </div>
              <Optic data={test.questions} checked={checked} />
            </div>
          </div>
        </div>
      </TestContext.Provider>
      {popupState && (
        <div className='popup'>
          <div className='content'>
            <p
              style={{
                color: '#2c3e50',
                fontSize: 20,
                margin: '10px 20px 0 0',
                alignSelf: 'flex-end',
              }}
              className='noselect clickable'
              onClick={closePopup}>
              x
            </p>
            <img src={AlertCircle} width={50} />
            <h4
              style={{
                color: '#2c3e50',
                width: '70%',
                textAlign: 'center',
                margin: '10px 0',
              }}>
              Ayrılmak istediğinize emin misiniz?
            </h4>
            <p
              style={{
                color: '#2c3e50',
                width: '70%',
                textAlign: 'center',
                margin: '10px 0',
              }}>
              Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam
              edebilirsin.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <img
                src={Vazgec}
                width={'35%'}
                className='clickable'
                onClick={closePopup}
              />
              <img
                src={Cik}
                width={'35%'}
                className='clickable'
                onClick={closePopup}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
