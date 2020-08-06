import data from '../DB/firecrackerDB';
import React from 'react';
import queryString from 'query-string';
import Main from '../Main';

export default class extends React.Component {
    contentData = data;
    render() {
        const {
            contentData,
        } = this;
        const queryStr = queryString.parse(this.props.location.search);
        return (
            <React.Fragment>
                <Main
                    contentData={contentData}
                    queryStr={queryStr}
                />
            </React.Fragment>
        )
    }
};