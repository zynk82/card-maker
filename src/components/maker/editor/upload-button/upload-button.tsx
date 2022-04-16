import React, {ChangeEvent, useRef} from 'react';
import styles from './upload-button.module.css';

type UploadButtonProps = {
    fileName: string | undefined,
}

const UploadButton = ({fileName}: UploadButtonProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const inputId = `input${Date.now().toString()}`;

    const onButtonClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // @ts-ignore
        // inputRef!.current!.onclick!();
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
    };

    return (
        <div className={styles.container}>
            <input className={styles.input} ref={inputRef} type='file' accept='image/*' name='file' id={inputId}
                   onChange={onFileChange} multiple/>
            <label className={styles.label} htmlFor={inputId}>{fileName || 'No File'}</label>
        </div>
    );
};

export default UploadButton;