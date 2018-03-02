import _ from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
    const exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });
    const onChangePage = jest.fn(() => {
        return Promise.resolve('cool!');
    });

    it('renders the component correctly', () => {
        const tree = renderer.create(
            <Pagination items={exampleItems} onChangePage={() => onChangePage()} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // TODO: test the size prop more
    // it('renders the component correctly', () => {
    //     const tree = renderer.create(<Pagination />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});
