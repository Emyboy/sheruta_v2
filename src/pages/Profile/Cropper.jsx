import React, { PureComponent } from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import imageCompression from 'browser-image-compression';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../Firebase';
import firebase from 'firebase';
import { notification } from 'antd';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('state')).auth.user;

class CustomImage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            src: null,
            crop: {
                unit: '%',
                width: 100,
                aspect: this.props.aspect || 4 / 3,
            },
            confirm: false,
            blob: null,
            confirmed: false,
            croped: false
        };

        this.onSelectFile = this.onSelectFile.bind(this);
        this.onImageLoaded = this.onImageLoaded.bind(this);
        this.onCropComplete = this.onCropComplete.bind(this);
        this.onCropChange = this.onCropChange.bind(this);
        this.makeClientCrop = this.makeClientCrop.bind(this);
        this.getCroppedImg = this.getCroppedImg.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.sendToDb = this.sendToDb.bind(this);
    }

    onSelectFile(e) {
        if (e.target.files && e.target.files.length > 0) {
            this.setState({ confirm: false });
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.aspect !== this.props.aspect
        ) {
            this.setState({ aspect: this.props.aspect });
        }
    }

    sendToDb(imageUrl) {
        console.log('SENDING TO DB')
        axios(process.env.REACT_APP_BASE_URL + `/users-permissions/auth/local/edit/${user.user.id}`, {
            method: 'POST',
            data: {
                avatar_url: imageUrl
            },
            headers: {
                Authorization: 'Bearer ' + user.jwt
            },
        })
            .then(res => {
                console.log('RES ----', res);
            })
            .catch(err => {

            })
    }

    componentDidMount() {
        this.sendToDb();
        this.setState({ aspect: this.props.aspect });
    }

    // If you setState the crop in here you should return false.
    onImageLoaded(image) {
        this.imageRef = image;
    }

    onCropComplete(crop) {
        this.makeClientCrop(crop);
        this.setState({ croped: true })
    }

    onCropChange(crop, percentCrop) {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
    }

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newPhoto.jpeg'
            );
            this.setState({ croppedImageUrl });
            console.log('IMG URL ---', croppedImageUrl);
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
        // this.fullQuality = canvas.toDataURL('image/jpeg', 1.0);
        // console.log(this.fullQuality)

        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error('Canvas is empty');
                    return;
                }
                blob.name = fileName;
                this.setState({ blob });
                // console.log(blob)
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, 'image/jpeg');
        });
    }

    async handleConfirm() {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1600,
            maxIteration: 3,
            //useWebWorker: true
        };
        const compressedFile = await imageCompression(this.state.blob, options);
        this.setState({ confirm: true, confirmed: true, src: false });
        // getCroppedImage(compressedFile);
        console.log('CROPED IMAGE ---', compressedFile)
    }

    

    handleImageUpload() {
        var uploadTask = storage.child(`images/profile/${user.user.id}/image_0`).put(this.state.blob);
        uploadTask.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log('UPLOAD ERROR ---', error);
                notification.error({ message: 'Upload Error' })
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    this.sendToDb(downloadURL)
                });
            }
        );
    }

    render() {
        const { crop, croppedImageUrl, src } = this.state;

        return (
            <div>
                <div className="button-wrap">
                    {
                        !this.state.blob ? <div className='text-center'>
                            <label className="new-button" style={{ fontSize: '30px' }} for="upload">
                                Choose Image
                    </label><br />
                            <input
                                id="upload"
                                type="file"
                                accept="image/*"
                                onChange={this.onSelectFile}
                            />
                        </div> : null
                    }
                    {/* {croppedImageUrl && !this.state.confirmed(
                        <button
                            className="confirm-btn"
                            onClick={this.handleConfirm}
                        >
                            Confirm
                        </button>
                    )} */}
                </div>
                {src && !this.state.confirm && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                        style={{ height: '90%', width: '90%' }}
                    />
                )}
                {
                    this.state.blob && this.state.confirmed ? <div className='text-center mt-3'>
                        <img src={URL.createObjectURL(this.state.blob)} style={{ borderRadius: '15px' }} /><br />
                        <button className='btn btn-success rounded mt-3' onClick={this.handleImageUpload.bind(this)}>Upload</button>
                    </div> : null
                }
                <div className='text-center'>
                    {
                        this.state.src ? <button
                            className="confirm-btn btn btn-theme"
                            onClick={this.handleConfirm}
                        >
                            Crop
                        </button> : null
                    }
                </div>
                {/* {this.state.croppedImageUrl &&
                    <img src={this.state.croppedImageUrl}></img>
                } */}
            </div>
        );
    }
}

export default CustomImage
