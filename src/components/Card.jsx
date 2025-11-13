import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Card component for displaying boxed content
 * @param {string} title - The card title
 * @param {React.ReactNode} children - Content inside the card
 * @param {string} className - Additional Tailwind classes
 * @param {boolean} hover - Whether to enable hover effect
 */
const Card = ({ title, children, className = "", hover = true }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-transform ${
        hover ? "hover:shadow-lg hover:scale-[1.01]" : ""
      } ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      )}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;
