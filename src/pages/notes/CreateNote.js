import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ImageUploading from "react-images-uploading";
import { Link, useLocation } from "react-router-dom";
import style from "../assign_room/roomassign.module.css";
import style2 from "./notes.module.css";

import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../../components/custom_button/CustomButton";

const CreateNote = () => {
  const { state } = useLocation();
  console.log(state);
  const [date, setDate] = useState(new Date());
  const [images, setImages] = React.useState([]);
  console.log(images);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <div>
      <div className={style.info_center}>
        <h2>Student Information</h2>
        <div className={style.info}>
          <p>Issue Date:678</p>
          <p>Room no: esdxfghj</p>
          <p>Issued By: rtyui</p>
          <p>Description:fvgbhjk</p>
        </div>
        <form>
          <label for="e_amnt">Estimated Amount</label>
          <input type="number" id="e_amnt" name="e_amnt" />
          <label for="b_recpt">Bank Reciept NO</label>
          <input type="text" id="b_recpt" name="b_recpt" />
          <label for="date">Note Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
            className={style2.date}
          />
          <label for="date">Upload Image</label>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className={style2.upload__image_wrapper}>
                <CustomButton name = "Click or Drop here" color="blue"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                
                </CustomButton>
                &nbsp;
                <CustomButton color="blue" name="Remove all images" onClick={onImageRemoveAll}></CustomButton>
                {imageList.map((image, index) => (
                  <div key={index} className={style2.image_item}>
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <CustomButton name="Update" color="blue" onClick={() => onImageUpdate(index)}>
                        
                      </CustomButton>
                      <CustomButton name="Remove" color="blue" onClick={() => onImageRemove(index)}>
                      </CustomButton>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </form>

        <p>
         
            <Link to="/issue_list" state={{buttonName :"working"}}>
            <CustomButton name="Forward to Provost" color="brown"></CustomButton>
            </Link>
        
        </p>
      </div>
    </div>
  );
};

export default CreateNote;
