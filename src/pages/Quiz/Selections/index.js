import React, { useEffect, useState } from 'react'
import { TestContext, useContext } from '../../../helpers/context'
import './index.scss'
export default () => {
  const [selected, setSelected] = useState('')
  const { test, setTest, iterator, setIterator } = useContext(TestContext)

  const Answer = ({ line, userAnswerId, order }) => {
    useEffect(() => {
      if (order === iterator + 1) setSelected(userAnswerId)
      else setSelected('')
    }, [iterator, test])

    const handleClick = (line) => {
      console.log(line)
      setSelected(line)
      let temp = test
      temp.questions[iterator].userAnswer = line
      setTest(temp)
    }
    const getClass = (x) => {
      if (x?.isCorrect) return ' correct'
      else return ' wrong'
    }

    return (
      <div
        className={`answerContainer '  ${
          line.id == selected && getClass(line)
        }`}
        onClick={() => handleClick(line.id)}>
        <p
          className={`answerText '  ${
            line.id == selected && getClass(line)
          }`}>{`${line.id})  `}</p>
        <div dangerouslySetInnerHTML={{ __html: line.text }}></div>
        <p className='answerButton'>Cevapla</p>
      </div>
    )
  }
  return (
    <div className='selections'>
      {test.questions[iterator].answers.map((item) => {
        return (
          <Answer
            line={item}
            userAnswerId={test.questions[iterator].userAnswer}
            order={test.questions[iterator].id}
          />
        )
      })}
    </div>
  )
}
