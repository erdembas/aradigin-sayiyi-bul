import React, { useState } from 'react';
import NumberInput from './components/NumberInput';
import SubsetFinder from './components/SubsetFinder';

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [target, setTarget] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Toplamları Eşleşenleri Bul</h1>
      <NumberInput onSetNumbers={setNumbers} onSetTarget={setTarget} />
      <SubsetFinder numbers={numbers} target={target} />
    </div>
  );
};

export default App;
