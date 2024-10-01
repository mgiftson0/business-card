// src/App.js

import React from 'react';
import BusinessInsightCard from './components/BusinessInsightCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h6>cards component</h6>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <BusinessInsightCard
              icon="fa-dollar-sign"
              title="Revenue"
              value="$1,200,000"
              change={5.2}
              description="Revenue for the current quarter."
              gradient="linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
            />
          </div>
          <div className="col-md-4 mb-4">
            <BusinessInsightCard
              icon="fa-users"
              title="New Users"
              value="8,430"
              change={-2.4}
              description="New users acquired this month."
              gradient="linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)"
            />
          </div>
          <div className="col-md-4 mb-4">
            <BusinessInsightCard
              icon="fa-smile"
              title="Customer Satisfaction"
              value="89%"
              change={1.8}
              description="Customer satisfaction rate for the last month."
              gradient="linear-gradient(135deg, #4caf50 0%, #81c784 100%)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
