import React from 'react';
import {Upload, Icon, Modal} from 'antd';

import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class FileUploader extends React.Component {
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
        const formData = new FormData();
        this.setState({fileList});
        fileList.map((file) => {
            formData.append('files[]', file);
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

        const options = {
            action: '/api/upload',
            name: 'image',
        };

        return (
            <div className="clearfix">
                <Upload {...options} listType="picture-card" fileList={fileList}
                        onPreview={(e) => this.handlePreview(e)} onChange={(fileList) => this.handleChange(fileList)}>
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={() => this.handleCancel()}>
                    <img alt="bg_img" style={{width: '100%', height: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

export default FileUploader;