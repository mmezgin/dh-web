import React from 'react'
import './index.scss'
import { TestContext, useContext } from '../../../helpers/context'

export default ({ data, checked }) => {
  const { setIterator } = useContext(TestContext)

  let it = 0
  const AnswerLine = ({ line }) => {
    const handleClick = () => {
      console.log('line', line)
      setIterator(line.id - 1)
    }
    return (
      <div className='lineContainer noselect clickable' onClick={handleClick}>
        <p style={{ fontWeight: 900 }}>{`${++it / 2}.Soru`}</p>
        <div
          className={checked && line.isCorrect ? 'choices checked' : 'choices'}>
          {line.answers.map((item) => {
            return (
              <div className={checked && item.isCorrect ? 'true' : 'default'}>
                <p className='noselect'>{item.id}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className='optic'>
      {data.map((item) => {
        return <AnswerLine line={item} />
      })}
    </div>
  )
}
