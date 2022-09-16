import React from 'react';
import './index.scss';
import Result from "./components/Result";
import Game from "./components/Game";

const title = 'Цікаві питання з Web';

const questions = [
  {
    title: 'Для чого setInterval?',
    variants: [
      'Затримка в наданні даних з серверу',
      'Виклик функції з затримкою в часі',
      'Щоб повторювати виклик функції через визначений інтервал часу',
    ],
    correct: 2,
  },
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['додаток', 'частина додатку або сторінки', 'те, що я не знаю, що це таке'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той же HTML, але з можливістю виконувати JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Кількість типів даних JS?',
    variants: [
      '7',
      '8',
      'В JS дані не діляться на типи',
    ],
    correct: 1,
  },
  {
    title: 'Який метод є безпечним?',
    variants: [
      'POST',
      'GET',
      'Жоден з цих варіантів',
    ],
    correct: 0,
  },
  {
    title: 'Що таке API?',
    variants: [
      'Це мова програмування',
      'Це посередник між програмами, який задає правила взаємодії',
      'Це веб-сервіс обміну файлами',
    ],
    correct: 1,
  },
  {
    title: 'Хто створив Javascript?',
    variants: [
      'Evan You',
      'Bill Gates',
      'Brendan Eich',
    ],
    correct: 2,
  },
  {
    title: 'Що таке деструктурізація?',
    variants: [
      'Це спосіб, що дозволяє розпакувати масиви і об\'єкти в декілька змінних',
      'Це спосіб очищення кешу',
      'Це те, що зробить SkyNet',
    ],
    correct: 0,
  },
  {
    title: 'Анонімна функція - це...',
    variants: [
      'Це вірус',
      'Функція, що не має унікального ідентифікатора для доступу до неї',
      'Функція, що викликає сама себе',
    ],
    correct: 1,
  },
];

const App = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      {(() => {
        if (step !== questions.length) {
          return (
            <Game step={step} question={question} onClickVariant={onClickVariant} questions={questions} />
          )
        } else {
          return (
            <Result correct={correct} questions={questions} />
          )
        }
      })()}
    </div>
  );
}

export default App;