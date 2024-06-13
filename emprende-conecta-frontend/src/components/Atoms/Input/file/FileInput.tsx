import React from 'react';

type FileInputProps = {
    fileInputType?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error',
    isDisabled?: boolean,
};

const FileInput: React.FC<FileInputProps> = ({ fileInputType = 'accent', isDisabled = false }) => {
    const fileInputProps = {
        disabled: isDisabled,
        className: `file-input file-input-bordered file-input-${fileInputType} w-full max-w-xs`
      };
    
      return (
        <input type="file" {...fileInputProps} />
      );
}

export default FileInput;
