import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggleButton from '../components/ThemeToggleButton';
import htmlIcon from '../assets/images/html_icon-removebg-preview.png';
import cssIcon from '../assets/images/css_icon.png';
import jsIcon from '../assets/images/js_icon.png';
import accessibilityIcon from '../assets/images/accessibility_icon.png';
import questionsData from '../data/QuizQuestions';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f4f8;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 4rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const QuestionContentContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const QuestionContainer = styled.div`
  text-align: center;
  height: 45vh;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 200px) and (max-width: 765px) {
    text-align: left;
    height: 25vh;
  }
`;

const QuestionTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    margin-bottom: -20%rem;
  }
`;

const AnswerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (min-width: 768px) {
    width: 30%;
    margin-right: 5rem;
  }
  // @media (min-width: 781px) {
  //   width: 60vw;
  //   margin-right: 5rem;
  //   background-color: blue;
  // }
  // @media (min-width: 1111px) {
  //   width: 30vw;
  //   margin-right: 5rem;
  //   background-color: green;
  // }
`;

const AnswerCard = styled.div<{ selected: boolean; correct?: boolean }>`
  background-color: ${(props) =>
    props.correct === true
      ? '#fff'
      : props.correct === false && props.selected
      ? '#fff'
      : props.selected
      ? '#e7e7e7'
      : '#fff'};
  border: ${(props) =>
    props.correct === true
      ? '2px solid #26D782'
      : props.correct === false && props.selected
      ? '1.5px solid red'
      : 'none'};
  border-radius: 16px;
  text-align: center; /* Center the text */
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  display: flex;
  align-items: center;
  // justify-content: center; /* Center content horizontally */
  gap: 1rem; /* Add some space between the label and text */

  &:hover {
    background-color: ${(props) =>
      props.correct === undefined ? '#f0f0f0' : ''};
  }
`;

const AnswerLabel = styled.span<{ correct?: boolean; selected?: boolean }>`
  background-color: ${(props) =>
    props.correct === true
      ? '#26D782'
      : props.correct === false && props.selected
      ? '#EE5454'
      : props.selected
      ? '#b0b0b0'
      : '#EFF0F1'};
  color: ${(props) =>
    props.correct === true
      ? '#fff'
      : props.correct === false && props.selected
      ? '#fff'
      : props.selected
      ? '#fff'
      : '#606060'};
  font-weight: bold;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button<{ subjectColor: string }>`
  background-color: ${(props) => props.subjectColor};
  color: #fff;
  width: 100%;
  border: none;
  border-radius: 16px;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.subjectColor ? props.subjectColor + 'CC' : '#0056b3'};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const ProgressBarContainer = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 10px;
  margin-bottom: 2rem;
  width: 100%;
`;

const ProgressBar = styled.div<{ subjectColor: string }>`
  background-color: ${(props) => props.subjectColor};
  height: 100%;
  width: 0;
  transition: width 0.3s;
`;

const subjectIcons: { [key: string]: string } = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  Accessibility: accessibilityIcon,
};

const subjectTitle: { [key: string]: string } = {
  HTML: 'HTML',
  CSS: 'CSS',
  JavaScript: 'JavaScript',
  Accessibility: 'Accessibility',
};

const subjectColor: { [key: string]: string } = {
  HTML: '#FF7E35',
  CSS: '#2FD887',
  JavaScript: '#306AFF',
  Accessibility: '#A729F5',
};

const isSubjectValid = (
  subject: string,
): subject is keyof typeof questionsData => {
  return subject in questionsData;
};

const QuestionsPage: React.FC = () => {
  const { subject } = useParams<{ subject?: string }>();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    subject && isSubjectValid(subject)
      ? Array(questionsData[subject].length).fill(null)
      : [],
  );
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  if (!subject || !isSubjectValid(subject)) {
    return <div>Invalid subject selected. Please select a valid subject.</div>;
  }

  const questions = questionsData[subject];
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowCorrectAnswers(false);
    } else {
      const score = selectedAnswers.filter(
        (answer, index) => answer === questions[index].correctAnswer,
      ).length;
      navigate(`/quiz-completed/${subject}`, {
        state: { score, total: questions.length },
      });
    }
  };

  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Container>
      <QuestionContentContainer>
        <QuestionContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            {subjectIcons[subject] && (
              <img
                src={subjectIcons[subject]}
                height="24"
                alt={`${subject} icon`}
                style={{ marginRight: '1rem' }}
              />
            )}
            <div>
              {subjectTitle[subject] && (
                <span style={{ color: '#333', fontWeight: 'bold' }}>
                  {subjectTitle[subject]}
                </span>
              )}
            </div>
          </div>
          <QuestionTitle>{currentQuestion.question}</QuestionTitle>
        </QuestionContainer>
        <ProgressBarContainer>
          <ProgressBar
            subjectColor={subjectColor[subject]}
            style={{ width: `${progressPercentage}%` }}
          />
        </ProgressBarContainer>
      </QuestionContentContainer>
      <AnswerList>
        {currentQuestion.options.map((answer, index) => (
          <AnswerCard
            key={index}
            onClick={() => handleAnswerClick(answer)}
            selected={selectedAnswers[currentQuestionIndex] === answer}
            correct={
              showCorrectAnswers
                ? answer === currentQuestion.correctAnswer
                : undefined
            }
          >
            <AnswerLabel
              selected={selectedAnswers[currentQuestionIndex] === answer}
              correct={
                showCorrectAnswers
                  ? answer === currentQuestion.correctAnswer
                  : undefined
              }
            >
              {String.fromCharCode(65 + index)}
            </AnswerLabel>
            {answer}
            {showCorrectAnswers && answer === currentQuestion.correctAnswer && (
              <FaCheckCircle color="#26D782" />
            )}
            {showCorrectAnswers &&
              answer !== currentQuestion.correctAnswer &&
              selectedAnswers[currentQuestionIndex] === answer && (
                <FaTimesCircle color="#EE5454" />
              )}
          </AnswerCard>
        ))}
        <SubmitButton
          onClick={
            selectedAnswers[currentQuestionIndex] !== null
              ? () =>
                  showCorrectAnswers
                    ? handleSubmit()
                    : setShowCorrectAnswers(true)
              : undefined
          }
          disabled={selectedAnswers[currentQuestionIndex] === null}
          subjectColor={subjectColor[subject]}
        >
          {currentQuestionIndex < questions.length - 1
            ? showCorrectAnswers
              ? 'Next Question'
              : 'Submit'
            : 'Submit and View Results'}{' '}
        </SubmitButton>
      </AnswerList>
    </Container>
  );
};

export default QuestionsPage;
