import React from 'react';
import FileUpload from 'util/upload/FileUpload.jsx';

class FileUploader extends React.Component {
    render() {
        const options = {
            baseUrl: '/manage/product/upload.do',
            fileFieldName: 'upload_file',
            dataType: 'json',
            chooseAndUpload: true,
            uploadSuccess: (res) => {
                this.props.onSuccess(res.data)
            },
            uploadError: (err) => {
                this.props.onError(err.message || '上传图片失败')
            },
        };

        return (
            <FileUpload options={options}>
                <button className="btn btn-sm btn-primary" ref="chooseAndUpload"><i className="glyphicon glyphicon-cloud-upload"></i> 点击上传图片</button>
            </FileUpload>
        );
    }
}

export default FileUploader;