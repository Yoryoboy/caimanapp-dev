import Input from "./Input";
import IconButton from "./IconButton";
import { useState } from "react";

import styles from "./SearchBar.module.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <section className={styles.section}>
      <div className={styles.inputWithIcon}>
        <Input
          type="text"
          label="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ backgroundColor: "#111827", width: "100%" }}
          enableValidation={false}
        >
          Busca eventos, grupos, usuarios...
        </Input>
        <IconButton
          iconClass="fi fi-rs-search"
          iconColor="#FAFAFA"
          backgroundColor="#DD8272"
          position="absolute"
        />
      </div>
    </section>
  );
}

export default SearchBar;
