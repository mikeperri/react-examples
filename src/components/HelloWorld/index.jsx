import React from 'react';

let messages = {
    'English': 'Hello World',
    'Spanish': 'Hola Mundo',
    'Chinese': '你好世界',
    'German': 'Hallo Welt'
};

export default React.createClass({
    getInitialState: function () {
        return {
            language: 'English'
        };
    },
    handleLanguageChange: function (event) {
        this.setState({
            language: event.target.value
        });
    },
    render: function () {
        let options = Object.keys(messages).map((language, index) => {
            return <option key={index} value={language}>{language}</option>;
        });
        let message = messages[this.state.language];

        return (
            <div>
                <span>{message}</span>
                <select onChange={this.handleLanguageChange}>
                    {options}
                </select>
            </div>
        );
    }
});
