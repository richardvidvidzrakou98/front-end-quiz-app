import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggleButton from '../components/ThemeToggleButton';
import htmlIcon from '../assets/images/html_icon-removebg-preview.png';
import cssIcon from '../assets/images/css_icon.png';
import jsIcon from '../assets/images/js_icon.png';
import accessibilityIcon from '../assets/images/accessibility_icon.png';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const ScoreContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    max-width: 400px;
    margin-top: 0;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  color: #333;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Score = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const PlayAgainButton = styled.button`
  background-color: #a729f5; /* Color for Accessibility */
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;

  &:hover {
    background-color: #8e1dcf; /* Darker shade of Accessibility color */
  }

  @media (min-width: 768px) {
    padding: 1.25rem 3rem;
    font-size: 1.25rem;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const SubjectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const SubjectIcon = styled.img`
  margin-right: 1rem;
  height: 2rem;

  @media (min-width: 768px) {
    height: 2.5rem;
  }
`;

const SubjectTitle = styled.div`
  color: #333;
  font-weight: bold;
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

const QuizCompletedPage: React.FC = () => {
  const navigate = useNavigate();
  const { subject } = useParams<{ subject?: string }>();
  const location = useLocation();
  const { score, total } = location.state as { score: number; total: number };

  const isSubjectValid = (subject: string | undefined): boolean => {
    return typeof subject === 'string' && subject in subjectTitle;
  };

  if (!isSubjectValid(subject)) {
    return (
      <Container>
        <div>
          Invalid subject selected. Please go back and select a valid subject.
        </div>
      </Container>
    );
  }

  const handlePlayAgain = () => {
    navigate('/');
  };

  return (
    <Container>
      <ToggleContainer>
        <ThemeToggleButton />
      </ToggleContainer>
      <Content>
        <SubjectContainer>
          <SubjectIcon
            src={subjectIcons[subject as string]}
            alt={`${subject} icon`}
          />
          <SubjectTitle>{subjectTitle[subject as string]}</SubjectTitle>
        </SubjectContainer>
        <Title>Quiz completed</Title>
        <Subtitle>You scored...</Subtitle>
      </Content>
      <ScoreContainer>
        <SubjectContainer>
          <SubjectIcon
            src={subjectIcons[subject as string]}
            alt={`${subject} icon`}
          />
          <SubjectTitle>{subjectTitle[subject as string]}</SubjectTitle>
        </SubjectContainer>
        <Score>{score}</Score>
        <div>out of {total}</div>
        <PlayAgainButton onClick={handlePlayAgain}>Play Again</PlayAgainButton>
      </ScoreContainer>
    </Container>
  );
};

export default QuizCompletedPage;
