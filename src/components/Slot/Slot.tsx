import React from 'react';
import './Slot.css';

interface State {
  fruits: ["🍒", "🍋", "🍏", "🍌"]
}

interface Props {
  fruit: string
}

const Slot: React.FunctionComponent<Props> = props => {

  return (
    <div>
      {
        props.fruit
      }
    </div>
  );
};

export default Slot;