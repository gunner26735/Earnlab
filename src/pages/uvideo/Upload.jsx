import { useCreateAsset } from '@livepeer/react';
import { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import "./upload.css";

export const Upload = () => {
const [video, setVideo] = useState();
  const {
    mutate: createAsset,
    data: asset,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
          sources: [{ name: video.name, file: video }]
        }
      : null,
  );
    
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
      setVideo(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['*.mp4'],
    },
    maxFiles: 1,
    onDrop,
  });

  const progressFormatted = useMemo(
    () =>
      progress?.[0].phase === 'failed'
        ? 'Failed to process video.'
        : progress?.[0].phase === 'waiting'
        ? 'Waiting'
        : progress?.[0].phase === 'uploading'
        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
        : progress?.[0].phase === 'processing'
        ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
        : null,
    [progress],
  );

  return (
    <div className='upload-box'>
      <div className='usection shadow p-3 mb-5 bg-body rounded' {...getRootProps()}>
        <input type="file" class="input-group mb-3" {...getInputProps()} />
        <p>Drag and drop or browse files</p>
      </div>
        {error?.message && <p>{error}</p>}
 
      {video ? <p className='blockquote'>{video.name} is selected!</p> : <p>None Selection...</p>}
      {progressFormatted && <p>{progressFormatted}</p>}
 
      <h1>{asset?.[0]?.playbackId &&  asset[0].playbackId  }</h1>

      <button class={!createAsset? "btn btn-dark":"btn btn-light"}
        onClick={() => {
          createAsset?.();
        }}
        disabled={!createAsset || status === 'loading'}
      >
        Upload
      </button>
    </div>
    );
};

export default Upload; 
