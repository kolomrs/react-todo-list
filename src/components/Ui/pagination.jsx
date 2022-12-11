import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemTodos, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(itemTodos / pageSize);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            className={'page-item' + (page === currentPage ? ' active' : '')}
            key={'page_' + page}>
            <a className="page-link btn" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
