import React from 'react';
import {Upload, Icon, Modal} from 'antd';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    }

    handleCancel() {
        this.setState({
            previewVisible: false
        })
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    handleChange({fileList}) {
        this.setState({
            fileList
        })
    }

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="cloud-upload"/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        );

        return (
            <div className="clearfix">
                <Upload action="//jsonplaceholder.typicode.com/posts/" listType="picture-card" fileList={fileList} onPreview={this.handlePreview}
                        onChange={(e) => this.handleChange(e)}>
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="bg_img" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

export default FileUpload;