// src/components/BusinessInsightCardRow.js

import React from 'react';
import BusinessInsightCard from './BusinessInsightCard';
import './BusinessInsightCardRow.css'; 

const BusinessInsightCardRow = () => {
  return (
    <div className="business-insight-row">
      <div className="business-insight-col">
        <BusinessInsightCard
          icon="fa-dollar-sign"
          title="Revenue"
          value="$1,200,000"
          change={5.2}
          description="Revenue for the current quarter."
          gradient="linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)"
        />
      </div>
      <div className="business-insight-col">
        <BusinessInsightCard
          icon="fa-users"
          title="New Users"
          value="8,430"
          change={-2.4}
          description="New users acquired this month."
          gradient="linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)"
        />
      </div>
      <div className="business-insight-col">
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
  );
};

export default BusinessInsightCardRow;
