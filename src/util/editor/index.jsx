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

    componentWillReceiveProps(nextProps) {
        if (this.props.defaultDetail !== nextProps.defaultDetail) {
            this.simditor.setValue(nextProps.defaultDetail);
        }
    }

    loadEditor() {
        let textbox = this.refs.textarea;
        this.simditor = new Simditor({
            textarea: textbox,
            defaultValue: this.props.placeholder || '请输入描述',
            toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color',
                'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr']
            /*upload: {
                url: '/manage/product/richtext_img_upload.do',
                defaultImage: '',
                fileKey: 'upload_file'
            }*/
        });
        this.bindEditorEvent();
    }

    bindEditorEvent() {
        this.simditor.on('valuechanged', e => {
            this.props.onValueChange(this.simditor.getValue());
        });
    }

    render() {
        return (
            <textarea ref="textarea" rows="50"></textarea>
        );
    }
}

export default Editor;