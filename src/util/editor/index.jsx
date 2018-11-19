import React from 'react';
import Simditor from 'simditor';

import 'simditor/styles/simditor.scss';

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadEditor();
    }

    loadEditor() {
        let element = this.refs['textarea'];
        new Simditor({
            textarea: $(element),
            defaultValue: this.props.placeholder || '请输入描述',
        })
    }

    render() {
        return (
            <div className="editor">
                <textarea ref="textarea"></textarea>
            </div>
        );
    }
}

export default Editor;