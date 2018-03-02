import _ from 'lodash';
import React from 'react';
import Pagination from 'react-reuse/Pagination';

/** Example of pagination */

function Example() {
    const exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });

    function onChangePage(pageOfItems) {
        // this.setState({ pageOfItems: pageOfItems });
    }

    return (
        <div>
            <Pagination items={exampleItems} onChangePage={onChangePage} />
        </div>
    );
};

export default Example;
