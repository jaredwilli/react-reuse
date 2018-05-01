import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pager: {}
        };
    }

    componentWillMount() {
        // Set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps) {
        // Reset page if items array has changed
        if ( this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage = page => {
        const { items } = this.props;
        let { pager } = this.state;

        if (page < 1 || page > pager.totalPages) return;

        // Get new pager object for specified page
        pager = this.getPager(items.length, page);

        // Get new page of items from items array
        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({
            pager
        });

        this.props.onChangePage(pageOfItems);
    }

    getPager = (totalItems, currentPage = 1) => {
        const totalPages = Math.ceil(totalItems / this.props.pageSize);
        let startPage, endPage;

        // TODO: Modify this so it works based on a prop numPagesToShow = 5
        if (totalPages <= 10) {
            // Show all if less than 10 pages
            startPage = 1;
            endPage = totalPages;
        } else {
            // Calculate start/end pages if more than 10
            /* eslint-disable no-lonely-if */
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
            /* eslint-enable no-lonely-if */
        }

        // Calculate start and end item indexes
        const startIndex = (currentPage - 1) * this.props.pageSize;
        const endIndex = Math.min(startIndex + this.props.pageSize - 1, totalItems - 1);
        const pages = _.range(startPage, endPage + 1);

        return {
            pageSize: this.props.pageSize,
            totalPages,
            currentPage,
            totalItems,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }

    render() {
        const { pager } = this.state;

        // Don't show pagination if only 1 page
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                {pager.currentPage !== 1 && (
                    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        {pager.currentPage !== 1 && <a onClick={() => this.setPage(pager.currentPage - 1)}>&#8592;</a>}
                        {pager.currentPage === 1 && <span style={{padding: '0 13px', margin: '0 6px'}}>&nbsp;</span>}
                    </li>
                )}
                {pager.pages.map((page, index) => (
                    <li
                        key={index}
                        className={pager.currentPage === page ? 'active' : ''}
                    >
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                ))}
                {pager.currentPage !== pager.totalPages && (
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        {pager.currentPage !== pager.totalPages && <a onClick={() => this.setPage(pager.currentPage + 1)}>&#8594;</a>}
                        {pager.currentPage === pager.totalPages && <span style={{padding: '0 13px', margin: '0 6px'}}>&nbsp;</span>}
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = {
    /** The array of items to paginate */
    items: PropTypes.array.isRequired,
    /** The function to call when clicking the pagination buttons to change page */
    onChangePage: PropTypes.func.isRequired,
    /** The initial starting page */
    initialPage: PropTypes.number,
    /** The number of items to show per page */
    pageSize: PropTypes.number,
    /** The number of pages to show between next/prev */
    numPagesToShow: PropTypes.oneOf([5, 10])
};

Pagination.defaultProps = {
    numPagesToShow: 5,
    initialPage: 1,
    pageSize: 10
};

export default Pagination;
