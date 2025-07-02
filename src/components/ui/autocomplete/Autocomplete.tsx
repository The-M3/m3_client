import React, { useState } from "react";
import styles from './autocomplete.module.scss'

type Suggestion = {value: string, label: string}

interface AutocompleteProps {
    suggestions: Array<Suggestion>;
    onChange: (value: Suggestion) => void;
    name?: string;
}

export const Autocomplete = ({ suggestions, onChange, name }: AutocompleteProps) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = suggestions.filter((suggestion) =>
      suggestion.label.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setActiveIndex(0);
  };

  const handleClick = (suggestion: Suggestion) => {
    setQuery(suggestion.label);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    onChange(suggestion);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      if (activeIndex + 1 < filteredSuggestions.length) {
        setActiveIndex(activeIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (activeIndex - 1 >= 0) {
        setActiveIndex(activeIndex - 1);
      }
    } else if (e.key === "Enter") {
      if (filteredSuggestions.length > 0) {
        handleClick(filteredSuggestions[activeIndex]);
      }
    }
  };

  return (
    <div className={styles.autocomplete}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        name={name}
        className={styles.input}
      />
      {showSuggestions && query && (
        <ul
          className={styles.dropdownList}
        >
          {filteredSuggestions.length === 0 ? (
            <li style={{ padding: "8px" }}>No suggestions</li>
          ) : (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={suggestion.value}
                onClick={() => handleClick(suggestion)}
                style={{
                  padding: "8px",
                  background:
                    index === activeIndex ? "#eee" : "transparent",
                  cursor: "pointer",
                }}
              >
                {suggestion.label}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};
