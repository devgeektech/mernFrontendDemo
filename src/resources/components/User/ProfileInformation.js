import React, { useEffect, useState, useRef } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import "react-image-crop/dist/ReactCrop.css";
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Button,
  Spinner,
  Modal,
  Dropdown,
} from "react-bootstrap";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const ProfileInformation = (props) => {
  const { handleChange, errors, values, touched, setFieldValue } = props;
  const [audioFile, setAudioFile] = useState();

  
  const handleAudio = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.files[0];
    const src = URL.createObjectURL(file);
    setAudioFile(src);
  };

  useEffect(() => {
    if (values){
      if (values.audio) {
        setAudioFile(values.audio);
      }
    }
  }, [values.audio]);

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="form-group">
          <Form.Label className="mb-0">First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            onChange={handleChange}
            value={values ? values.firstName : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.firstName && touched.firstName ? errors.firstName : null}
          </span>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="form-group">
          <label className="mb-0">Last Name</label>
          <Form.Control
            type="text"
            name="lastName"
            onChange={handleChange}
            value={values ? values.lastName : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.lastName && touched.lastName ? errors.lastName : null}
          </span>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="form-group">
          <label className="mb-0">Email</label>
          <Form.Control
            type="text"
            name="email"
            onChange={handleChange}
            value={values ? values.email : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.email && touched.email ? errors.email : null}
          </span>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="form-group">
          <label className="mb-0">Phone</label>
          <Form.Control
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={values ? values.phoneNumber : ''}
          />
          <span className="errorMsg">
            {' '}
            {errors.phoneNumber && touched.phoneNumber
              ? errors.phoneNumber
              : null}
          </span>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="form-group">
          <label className="mb-0">Audio</label>
          <Form.Control
            type="file"
            name="audio"
            onChange={(e) => handleAudio(e)}
            accept=".mp3,audio/*"
          />
          <span className="errorMsg">
            {' '}
            {errors.audio && touched.audio
              ? errors.audio
              : null}
          </span>
          { 
          audioFile && audioFile!='' ?
          <AudioPlayer
            autoPlay
            src={audioFile}
            onPlay={e => console.log("onPlay")}
          />
          :""
          }
        </div>
      </div>
    </div>
    
  );
};

export { ProfileInformation };
