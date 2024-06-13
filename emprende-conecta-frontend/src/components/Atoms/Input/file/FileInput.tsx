import React from 'react';

type FileInputProps = {
    fileInputType?: 'file-input-primary' | 'file-input-secondary' | 'file-input-accent' | 'file-input-success' | 'file-input-warning' | 'file-input-info' | 'file-input-error',
    isDisabled?: boolean,
};

const FileInput: React.FC<FileInputProps> = ({ fileInputType = 'file-input-accent', isDisabled = false }) => {
    const fileInputProps = {
        disabled: isDisabled,
        className: `file-input file-input-bordered ${fileInputType} w-full max-w-xs`
      };
    
      return (
        <input type="file" {...fileInputProps} />
      );
}

export default FileInput;
