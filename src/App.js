import React from 'react';
import './index.scss';
import Modal from './Modal';

function App() {
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open)
  }

  return (
    <div className="App">
      <button onClick={toggleModal} className="open-modal-btn">✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;