import React from "react";

const SearchBox = ({ value, onChange, onFilter }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend ">
        <button
          className="btn btn-info dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Sort By
        </button>

        <div className="dropdown-menu">
          <button
            onClick={() => onFilter("asc")}
            className="dropdown-item btn btn-light"
          >
            Ascending Order (A-Z)
          </button>

          <div className="dropdown-divider" />
          <button
            onClick={() => onFilter("desc")}
            className="dropdown-item btn btn-light"
          >
            Descending Order (Z-A)
          </button>
        </div>
      </div>

      <input
        type="text"
        name="query"
        className="form-control "
        placeholder="Search products..."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />

      <div className="input-group-append ">
        <button className="btn btn-info">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
