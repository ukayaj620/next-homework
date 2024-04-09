import Head from "next/head";
import { useState } from "react";

const ExpandLessIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
    </svg>
  );
};

const ExpandMoreIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};

const MultiSelect = ({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    const selectedIndex = selectedOptions.indexOf(option);
    if (selectedIndex === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          minWidth: "300px",
          width: "100%",
          border: "1px solid #ababab",
          padding: "10px 12px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={() => setIsOpen((p) => !p)}
      >
        <div>
          <span>{label}: </span>
          {selectedOptions.length === options.length ? (
            <span>All</span>
          ) : (
            <span>{selectedOptions.length}</span>
          )}
        </div>
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isOpen && (
        <div
          style={{
            minWidth: "300px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            border: "1px solid #ababab",
            borderRadius: "8px",
            marginTop: "12px",
            zIndex: "10",
            backgroundColor: "white",
          }}
        >
          {options.map((option, index) => (
            <label
              style={{
                minWidth: "300px",
                padding: "12px",
                borderBottom:
                  options.length - 1 !== index ? "1px solid #ababab" : "",
              }}
              key={option}
            >
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
              />
              <span style={{ marginLeft: "8px" }}>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const InputGroup = ({ label, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "16px 0",
        width: "100%",
      }}
    >
      <label>{label}</label>
      {children}
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button
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
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const SimpleFormPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [showMessage, setShowMessage] = useState(false);

  const categories = [
    "Complaint",
    "Information Request",
    "Questions",
    "Others",
  ];

  const handleSubmit = () => {
    setShowMessage(true);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Simple Form</title>
      </Head>
      <div style={{ width: "360px" }}>
        <InputGroup label="Email">
          <input
            style={{
              minWidth: "300px",
              border: "1px solid #ababab",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "16px",
            }}
            name="email"
            text="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input email"
          />
        </InputGroup>
        <InputGroup label="Message Categories">
          <MultiSelect
            label={"Categories"}
            options={categories}
            selectedOptions={selectedCategories}
            setSelectedOptions={setSelectedCategories}
          />
        </InputGroup>
        <InputGroup label="Message">
          <textarea
            style={{
              minWidth: "300px",
              border: "1px solid #ababab",
              padding: "12px",
              borderRadius: "8px",
              resize: "vertical",
              fontSize: "16px",
            }}
            rows="5"
            name="message"
            text="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Input your message..."
          ></textarea>
        </InputGroup>
        <div style={{ margin: "24px 0" }}>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
      {showMessage && (
        <div style={{ width: "360px" }}>
          <div style={{ margin: "8px 0" }}>Email: {email}</div>
          <div style={{ margin: "8px 0" }}>
            Selected Categories:{" "}
            {selectedCategories.map((s, i) => (
              <p key={`#key-${i}`}>{s}</p>
            ))}
          </div>
          <div style={{ margin: "8px 0" }}>Message: {message}</div>
        </div>
      )}
    </div>
  );
};

export default SimpleFormPage;
