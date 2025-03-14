import React from 'react';
import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <React.Suspense fallback={<div style={{ height: '100vh', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>loading...코예브 클라우드 무료 서비스는 처음 접속시 인스턴스 자원이 깨어나는데 몇 초가 걸립니다. 잠시만 기다려 주세요^^</div>}>
      <SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyPageWrapper>
    </React.Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
