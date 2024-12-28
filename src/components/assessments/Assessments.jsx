import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Assessments.css';

const MOCK_DATA = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Core concepts of JavaScript including variables, functions, and objects',
    score: '95%',
    date: '2024-01-15',
    category: 'Programming'
  },
  {
    id: 2,
    title: 'React Components',
    description: 'Building and managing React components, state, and props',
    score: '88%',
    date: '2024-02-01',
    category: 'Frontend'
  },
  {
    id: 3,
    title: 'API Integration',
    description: 'Working with REST APIs and handling asynchronous operations',
    score: '92%',
    date: '2024-02-15',
    category: 'Backend'
  }
];

const ViewToggle = ({ view, onViewChange }) => (
  <div className="view-toggle">
    <button 
      className={`toggle-btn ${view === 'cards' ? 'active' : ''}`}
      onClick={() => onViewChange('cards')}
      aria-label="Switch to card view"
    >
      <span className="icon">📇</span>
      Cards
    </button>
    <button 
      className={`toggle-btn ${view === 'table' ? 'active' : ''}`}
      onClick={() => onViewChange('table')}
      aria-label="Switch to table view"
    >
      <span className="icon">📊</span>
      Table
    </button>
  </div>
);

const AssessmentCard = ({ item, onClick }) => (
  <motion.div 
    className="assessment-card"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(item)}
    role="button"
    tabIndex={0}
    aria-label={`View details of ${item.title}`}
  >
    <div className="card-header">
      <h3>{item.title}</h3>
      <span className="score">{item.score}</span>
    </div>
    <p className="description">{item.description}</p>
    <div className="card-footer">
      <span className="category">{item.category}</span>
      <span className="date">{new Date(item.date).toLocaleDateString()}</span>
    </div>
  </motion.div>
);

const Modal = ({ item, onClose }) => (
  <motion.div 
    className="modal-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div 
      className="modal-content"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      onClick={e => e.stopPropagation()}
    >
      <button className="close-btn" onClick={onClose} aria-label="Close modal">×</button>
      <h2>{item.title}</h2>
      <div className="modal-score">Score: {item.score}</div>
      <p>{item.description}</p>
      <div className="modal-details">
        <span>Category: {item.category}</span>
        <span>Date: {new Date(item.date).toLocaleDateString()}</span>
      </div>
    </motion.div>
  </motion.div>
);

const Assessments = () => {
  const [view, setView] = useState('cards');
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="assessments-container">
      <header className="assessments-header">
        <h1>My Assessments</h1>
        <ViewToggle view={view} onViewChange={setView} />
      </header>

      {view === 'cards' ? (
        <motion.div 
          className="cards-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {MOCK_DATA.map((item) => (
            <AssessmentCard 
              key={item.id} 
              item={item} 
              onClick={setSelectedItem}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className="table-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <table className="assessments-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Score</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.map((item) => (
                <tr key={item.id} onClick={() => setSelectedItem(item)}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.score}</td>
                  <td>{item.category}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Assessments;