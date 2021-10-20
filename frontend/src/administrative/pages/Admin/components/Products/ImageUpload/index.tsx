import React, { useState } from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import { ReactComponent as UploadPlaceholder } from 'core/assets/images/upload-placeholder.svg';
import './styles.scss';

type Props = {
    onUploadSuccess: (imageURL: string) => void;
    productImageURL: string;
}

const ImageUpload = ({ onUploadSuccess, productImageURL }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0];

        if (selectedImage) {
            uploadImage(selectedImage);
        }
    }

    const [uploadProgress, setUploadProgress] = useState(0);

    const onUploadProgress = (progressEvent: ProgressEvent) => {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);

        setUploadProgress(progress);
    }

    const [uploadedImageURL, setUploadedImageURL] = useState('');

    const uploadImage = (selectedImage: File) => {
        const payload = new FormData();
        payload.append('imageFile', selectedImage);

        makePrivateRequest({
            url: '/products/image',
            method: 'POST',
            data: payload,
            onUploadProgress
        })
            .then(response => {
                setUploadedImageURL(response.data.imageUri);
                onUploadSuccess(response.data.imageUri);
            })
            .catch(() => {
                toast.error("Erro no upload da imagem");
            })
            .finally(() => setUploadProgress(0));
    }

    const imageURL = uploadedImageURL || productImageURL;

    return (
        <div className="row m-t-15">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pl-0">
                <div className="upload-button-container">
                    <input type="file" className="form-control b-r-10" id="upload" accept="image/png, image/jpg" onChange={handleChange} />
                </div>
                <small><i>A imagem deve ser JPG, JPEG ou PNG e não deve ultrapassar 10 MB.</i></small>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 upload-placeholder">
                {uploadProgress > 0 && (
                    <>
                        <UploadPlaceholder />
                        <div className="upload-progress-container">
                            <div className="upload-progress" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                    </>
                )}
                {(imageURL && uploadProgress === 0) && (
                    <img src={imageURL} alt={imageURL} className="uploaded-image" />
                )}
            </div>
        </div>
    )
}

export default ImageUpload;
