import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyCommponent extends Component {
    static defaultProps = {
        name: '기본값'
    }
    static propTypes = {
        name: PropTypes.string
    }
    render() {
        return (
            <div>
                안녕하세요, 제이름은 {this.props.name} 입니다.
            </div>
        );
    }
}
export default MyCommponent