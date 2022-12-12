import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://jobs-portal-production.up.railway.app/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="categories">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 mb-4 mt-4">
            <h3>Popular Job Categories</h3>
          </div>
          <div className="row text-center">
            {categories.map((category) => (
              <div className="col-md-4" key={category.id}>
                <div className="card">
                  <FontAwesomeIcon icon={faBriefcase} className="icon"/>
                  <h4 className="main-color">{category.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
