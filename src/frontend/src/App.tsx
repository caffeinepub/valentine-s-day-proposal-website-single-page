import { useState } from 'react';
import { ValentineLayout } from '@/components/ValentineLayout';
import { ValentineProposalView } from '@/components/ValentineProposalView';
import { ValentineSuccessView } from '@/components/ValentineSuccessView';

function App() {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <ValentineLayout>
      {answered ? <ValentineSuccessView /> : <ValentineProposalView onYes={handleYes} />}
    </ValentineLayout>
  );
}

export default App;
