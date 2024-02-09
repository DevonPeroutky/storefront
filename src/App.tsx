import React, {useState} from 'react';
import './App.css';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      >
        { /* @ts-ignore */}
        {({getScreenshot}) => (
            <button
                onClick={() => {
                  const imageSrc = getScreenshot()
                  console.log("Got screenshot: ", imageSrc);
                  setImageSrc(imageSrc);
                }}
            >
              Capture photo
            </button>
        )}
      </Webcam>
      <br/>
      <ImageDisplay imageSrc={imageSrc}/>
    </div>
  )
};

const ImageDisplay = (props: { imageSrc: string | null }) => {
  const {imageSrc} = props;
  if (!imageSrc) {
    return null;
  }
  return (
      <div>
        <img src={imageSrc} alt="photo"/>
      </div>
  );
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <WebcamCapture/>
          <br/>
        </header>
      </div>
  );
}

export default App;
