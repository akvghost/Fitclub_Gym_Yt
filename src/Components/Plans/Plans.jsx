import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className='plans-container' id='plan'>
      <div className='blur blur-plan1'></div>
      <div className='blur blur-plan2'></div>
      <div className='programs-header' style={{ gap: "2rem" }}>
        <span className='stroke-text'>ready to start</span>
        <span>your journey</span>
        <span className='stroke-text'>now with us</span>
      </div>
      {/* Plans cards */}
      <div className='plans'>
        {plansData.map((plan, i) => (
          <div className='plan'>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className='features'>
              {plan.features.map((feature, i) => (
                <div className='feature'>
                  <img src={whiteTick} alt='' />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benefits -{">"}</span>
            </div>
            <button className='btn'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
