import { ProductOption } from "@medusajs/medusa";
import { clx } from "@medusajs/ui";
import React from "react";
import { onlyUnique } from "@lib/util/only-unique";

type OptionSelectProps = {
  option: ProductOption;
  current: string;
  updateOption: (option: Record<string, string>) => void;
  title: string;
  disabled: boolean;
  "data-testid"?: string;
};

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateOption({ [option.id]: event.target.value });
  };

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm text-gray-dark">Type</span>
      <div className="relative">
        <select
          onChange={handleSelectChange}
          value={current}
          className="bg-ui-bg-subtle text-small-regular h-10 rounded p-2 w-[135px]"
          disabled={disabled}
          data-testid={dataTestId}
        >
          <option value="" disabled>
            Select option
          </option>
          {filteredOptions.map((v) => (
            <option key={v} value={v} >
              {v}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray">
          {/* <svg
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default OptionSelect;

