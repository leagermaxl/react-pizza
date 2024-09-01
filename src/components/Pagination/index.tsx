import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  dataPagination: any;
  setNewPage: any;
};

const Pagination: React.FC<PaginationProps> = ({ dataPagination, setNewPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => setNewPage(event.selected + 1)}
      pageRangeDisplayed={dataPagination.per_page}
      pageCount={dataPagination.total_pages}
      previousLabel="<"
      forcePage={dataPagination.current_page - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
