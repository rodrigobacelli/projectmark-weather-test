import * as React from 'react';

import { twMerge } from 'tailwind-merge';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import { Card } from '../Card';
import { Text } from '../Text';

export type DropdownOption = {
  value: string;
  label: string;
  icon?: React.FunctionComponent<{ className?: string }>;
};

export type DropdownProps = {
  className?: string;
  onSelect?: (nextOption: string) => void;
  options: DropdownOption[];
  selectedOption: DropdownOption['value'];
};

export const Dropdown = ({
  className,
  options,
  onSelect,
  selectedOption,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const selectedOptionObject = React.useMemo(
    () => options.find((option) => option.value === selectedOption),
    [options, selectedOption]
  );

  const handleSelect = React.useCallback(
    (nextOption: string) => {
      onSelect?.(nextOption);
      setIsOpen(false);
    },
    [onSelect]
  );

  return (
    <div className={twMerge('relative', className)}>
      <div
        className="hover:cursor-pointer rounded-full px-4 py-2 border border-gray-800 dark:border-gray-200 hover:bg-gray-800/20 hover:dark:bg-gray-200/20"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Text className="flex gap-2 items-center text-sm">
          {selectedOptionObject?.icon ? (
            <selectedOptionObject.icon className="w-4 h-4" />
          ) : null}
          <span className="hidden sm:inline-flex">
            {selectedOptionObject?.label}
          </span>
          {isOpen ? (
            <FaChevronUp className="ml-2 w-3 h-3" />
          ) : (
            <FaChevronDown className="ml-2 w-3 h-3" />
          )}
        </Text>
      </div>
      {isOpen && (
        <Card
          as="ul"
          className="absolute top-12 right-0 z-1 p-0 overflow-hidden"
        >
          {options.map((option) => (
            <li
              className="pl-6 pr-12 py-3 hover:cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 relative"
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              <Text className="flex gap-2 items-center">
                {option.icon ? <option.icon className="w-4 h-4" /> : null}
                {option.label}
                {selectedOption === option.value ? (
                  <FaCheck className="w-4 h-4 ml-4 absolute right-4" />
                ) : null}
              </Text>
            </li>
          ))}
        </Card>
      )}
    </div>
  );
};
