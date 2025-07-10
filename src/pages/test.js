import React, { useState } from "react";

function Dropdown({ options, selectedOptions, onSelectedChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown open/close

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          width: "100%",
          border: "1px solid #ababab",
          padding: "10px 12px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div>
          <span>Categories: </span>
          <span>{selectedOptions.length}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path>
        </svg>
      </div>
      {dropdownOpen && (
        <div
          style={{
            minWidth: "300px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            border: "1px solid rgb(171, 171, 171)",
            borderRadius: "8px",
            marginTop: "12px",
            zIndex: "10",
            backgroundColor: "white",
          }}
        >
          {options.map(function (option, index) {
            return (
              <label
                key={`option-${index}`}
                style={{
                  minWidth: "300px",
                  padding: "12px",
                  borderBottom: "1px solid rgb(171, 171, 171)",
                }}
              >
                <input
                  type="checkbox"
                  value={option}
                  onChange={() => onSelectedChange(option)} // Handle checkbox change
                />
                <span style={{ marginLeft: "8px" }}>{option}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

  const handleDropdownSelectedChange = (value) => {
    // Logic to handle checkbox change
    if (selectedCategories.includes(value)) {
      // If category is already selected, remove it
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    } else {
      // If category is not selected, add it
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    console.log("Submitted!");
    setSubmitted(true); // Set submitted state to true
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "360px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "16px 0",
              width: "100%",
            }}
          >
            <label>Email</label>
            <input
              name="text"
              type="text"
              style={{
                width: "100%",
                border: "1px solid #ababab",
                padding: "12px",
                borderRadius: "8px",
                boxSizing: "border-box",
                fontSize: "16px",
              }}
              placeholder="Input email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "16px 0",
              width: "100%",
            }}
          >
            <label>Message Categories</label>
            <Dropdown
              options={["A", "B", "C", "D"]}
              onSelectedChange={handleDropdownSelectedChange}
              selectedOptions={selectedCategories}
            />
          </div>
        </div>
        <div style={{ width: "360px", margin: "16px 0" }}>
          <label>Message</label>
          <textarea
            style={{
              width: "100%",
              border: "1px solid #ababab",
              padding: "12px",
              borderRadius: "8px",
              resize: "vertical",
              fontSize: "16px",
            }}
            rows="5"
            name="message"
            text="text"
            placeholder="Input your message..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div style={{ margin: "24px 0" }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: "12px 16px",
              backgroundColor: "#171717",
              color: "white",
              borderRadius: "8px",
              outline: "none",
              border: "1px solid #171717",
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </div>
        {submitted && (
          <div style={{ width: "360px", margin: "16px 0" }}>
            <p>Email: {email}</p>
            <p>
              Selected Categories:{" "}
              {selectedCategories.length === 4
                ? "All"
                : selectedCategories.map(function (selectedCategory, index) {
                    return <p key={`#category-${index}`}>{selectedCategory}</p>;
                  })}
            </p>
            <p>Message: {message}</p>
          </div>
        )}
      </div>
    </>
  );
}
