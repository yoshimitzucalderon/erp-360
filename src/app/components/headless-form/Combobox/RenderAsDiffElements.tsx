"use client";
import { forwardRef, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import CardBox from "../../shared/CardBox";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const MyCustomButton = forwardRef<HTMLButtonElement, any>((props, ref) => {
  return <button ref={ref} {...props} />;
});

const RenderingCombobox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <CardBox>
      <h4 className="text-lg font-semibold mb-2">
        Rendering As Different Elements
      </h4>
      <Combobox
        value={selectedPerson}
        onChange={() => setSelectedPerson}
        onClose={() => setQuery("")}
      >
        <span className="flex gap-3">
          <ComboboxInput
            aria-label="Assignee"
            displayValue={(person: any) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full ui-form-control rounded-full"
          />
          <ComboboxButton
            as={MyCustomButton}
            className="ui-button bg-primary text-white"
          >
            Open
          </ComboboxButton>
        </span>
        <ComboboxOptions
          as="ul"
          className="origin-top border transition duration-200 ease-out empty:invisible data-[closed]:scale-95 data-[closed]:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm empty:invisible"
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              as="li"
              key={person.id}
              value={person}
              className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-[focus]:bg-hover data-[focus]:text-primary"
            >
              {person.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </CardBox>
  );
};

export default RenderingCombobox;
