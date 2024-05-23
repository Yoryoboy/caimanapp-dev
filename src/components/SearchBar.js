import "./SearchBar.css";
import Input from "./Input";
import IconButton from "./IconButton";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <section className="search-container">
      <div className="input-with-icon">
        <Input
          type="text"
          label="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ backgroundColor: "#111827" }}
          enableValidation={false}
        >
          Busca eventos, grupos, usuarios...
        </Input>
        <IconButton
          iconClass="fi fi-rs-search"
          iconColor="#FAFAFA"
          backgroundColor="#DD8272"
        />
      </div>
    </section>
  );
}

export default SearchBar;
