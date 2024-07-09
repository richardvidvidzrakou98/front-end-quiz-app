import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import htmlIcon from '../assets/images/html_icon-removebg-preview.png';
import cssIcon from '../assets/images/css_icon.png';
import jsIcon from '../assets/images/js_icon.png';
import accessibilityIcon from '../assets/images/accessibility_icon.png';
import SubjectCard from '../components/SubjectCard';
import ThemeToggleButton from '../components/ThemeToggleButton';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f4f8;
  padding: 9rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 4rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const HomeContentContainer = styled.div`
  background-color: #f0f4f8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 5%;
    gap: 1rem;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: white;

  @media (min-width: 810px) {
    text-align: left;
    margin-bottom: 0;
    margin-left: -5%;
    width: 30vw;
    height: 30vh;
    position: relative;
    bottom: 6rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: #313e51;
  font-weight: 100;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const TitleBold = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #313e51;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.i`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  display: block;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const SubjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 400px;
    margin-left: 16%;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: string) => {
    navigate(`/quiz/${subject}`);
  };

  return (
    <Container>
      <ToggleContainer>
        <ThemeToggleButton />
      </ToggleContainer>
      <HomeContentContainer>
        <TitleContainer>
          <Title>Welcome to the </Title>
          <TitleBold>Frontend Quiz!</TitleBold>
          <Subtitle>Pick a subject to get started.</Subtitle>
        </TitleContainer>
        <SubjectList>
          <SubjectCard
            icon={htmlIcon}
            title="HTML"
            onClick={() => handleSubjectClick('HTML')}
            color="red"
          />
          <SubjectCard
            icon={cssIcon}
            title="CSS"
            onClick={() => handleSubjectClick('CSS')}
            color="blue"
          />
          <SubjectCard
            icon={jsIcon}
            title="JavaScript"
            onClick={() => handleSubjectClick('JavaScript')}
            color="green"
          />
          <SubjectCard
            icon={accessibilityIcon}
            title="Accessibility"
            onClick={() => handleSubjectClick('Accessibility')}
            color="orange"
          />
        </SubjectList>
      </HomeContentContainer>
    </Container>
  );
};
export default HomePage;
