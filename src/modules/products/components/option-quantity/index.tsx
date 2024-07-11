import React, { useState } from "react";
import { onlyUnique } from "@lib/util/only-unique";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

type OptionQuantityProps = {
  current: string;
  updateOption: (option: Record<string, string>) => void;
  title: string;
  disabled: boolean;
  "data-testid"?: string;
};

const OptionQuantity: React.FC<OptionQuantityProps> = ({
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleUp = () => {
    setQuantity((quantity) => (quantity < 10 ? quantity + 1 : 10));
    updateOption({ quantity: (quantity + 1).toString() });
  };

  const handleDown = () => {
    setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1));
    updateOption({ quantity: (quantity - 1).toString() });
  };

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm text-gray-dark">{title}</span>
      <div className="relative w-[75px] flex items-center">
        <div className="flex items-center bg-ui-bg-subtle text-small-regular h-10 rounded p-2">
        <input
          type="number"
          min="1"
          max="10"
          step="1"
          value={quantity}
          disabled={disabled}
          className="bg-ui-bg-subtle"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 1 && value <= 10) {
              setQuantity(value);
              updateOption({ quantity: value.toString() });
            }
          }}
          data-testid={dataTestId}
        />
        <div className="ml-2 flex flex-col ">
            <FontAwesomeIcon icon={faChevronUp} className='w-2 text-gray'  onClick={handleUp} />
            <FontAwesomeIcon icon={faChevronDown} className='w-2 text-gray' onClick={handleDown} />
          </div>
        </div>
          
        
      </div>
    </div>
  );
};

export default OptionQuantity;