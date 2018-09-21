import React from 'react';
import { Pager } from 'react-bootstrap';

const Pagination = props => {
    const { myPrevPageUrl, myNextPageUrl, myFetchPagination } = props;

    const fetchData = url => {
        myFetchPagination(url);
    };

    return (
        <Pager>
            <Pager.Item
                href="#"
                disabled={myPrevPageUrl === null ? true : false}
                onClick={() => fetchData(myPrevPageUrl)}
            >
                Previous
            </Pager.Item>{' '}
            <Pager.Item
                href="#"
                disabled={myNextPageUrl === null ? true : false}
                onClick={() => fetchData(myNextPageUrl)}
            >
                Next
            </Pager.Item>
        </Pager>
    );
};

export default Pagination;
