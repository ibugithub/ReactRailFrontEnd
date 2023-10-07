import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.greeting.greetingMsg);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="heading">Beautiful Greetings</div>
      <p>Get inspired by these words of wisdom:</p>
      {msg && (
        <div className="message-box">
          <p className="message">{msg.text}</p>
        </div>
      )}
    </div>
  );
};

export default Greeting;
