import React, { useState } from "react";
import {
  WrapperForm,
  WrpapperAvatarHero,
  AvartarImg,
  WrapperFormAddAvatar,
  Label,
  UploadAvatar,
  InputIcon,
  WrapperBlank,
  MainForm,
  TitleDiscrip,
  TextArea,
  WrapperForButton,
  ButtonSave,
  BlockDiscrip,
  ErrorInfo,
} from "./StyledHeroCreationSheet";

import imageCompression from "browser-image-compression";
import { CreatCard, uploadImage, deletImage } from "../../Redux/HeroAdjust";
import { useDispatch, useSelector } from "react-redux";
import { DOMAIN_NAME } from "../../Helper/api";
const HeroCreationSheet = () => {
  const Dispatch = useDispatch();
  const error = useSelector((state) => state.AdjustHeroDb.error);
  const [initState, setInitState] = useState({
    nickName: "",
    realName: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
    image: "",
  });

  const _onChange = (e) => {
    setInitState({ ...initState, [e.target.name]: e.target.value });
  };

  const onChangeUploadImage = async (e) => {
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      initialQuality: 60,
      useWebWorker: true,
    };
    if (file) {
      const compressedFile = await imageCompression(file, options);
      const resulAction = await Dispatch(uploadImage({ File: compressedFile }));
      console.log(resulAction);

      if (resulAction.meta.requestStatus === "fulfilled") {
        console.log(resulAction);
        setInitState({
          ...initState,
          [e.target.name]: resulAction.payload.ImageName,
        });
        e.target.value = "";
      }
    }
  };

  const handlerSave = async (e) => {
    e.preventDefault();
    const resultAction = await Dispatch(CreatCard({ BodyForm: initState }));
    if (resultAction.meta.requestStatus === "fulfilled") {
      setInitState({
        nickName: "",
        realName: "",
        originDescription: "",
        superpowers: "",
        catchPhrase: "",
        image: "",
      });
      window.location.replace("/");
    }
  };

  const deleteImage = (e) => {
    if (initState.image !== "") {
      Dispatch(deletImage({ imageName: initState.image }));
      setInitState({ ...initState, image: "" });
    }
  };
  return (
    <WrapperForm>
      <WrpapperAvatarHero>
        <AvartarImg
          src={
            initState.image === ""
              ? "https://image.flaticon.com/icons/png/512/37/37543.png"
              : `${DOMAIN_NAME}/${initState.image}`
          }
        />
      </WrpapperAvatarHero>
      <WrapperFormAddAvatar encType="multipart/form-data">
        <Label htmlFor="file-input">
          <UploadAvatar>Upload image</UploadAvatar>
        </Label>
        <Label>
          <UploadAvatar onClick={deleteImage}>Delete image</UploadAvatar>
        </Label>
        <InputIcon
          id="file-input"
          type="file"
          name="image"
          accept="image/*"
          onChange={onChangeUploadImage}
        ></InputIcon>
      </WrapperFormAddAvatar>
      <WrapperBlank>
        <MainForm>
          <BlockDiscrip>
            <TitleDiscrip>NickName</TitleDiscrip>
            <TextArea
              type="text"
              name="nickName"
              value={initState.nickName}
              onChange={_onChange}
            />
          </BlockDiscrip>
          <BlockDiscrip>
            <TitleDiscrip>RealName</TitleDiscrip>
            <TextArea
              type="text"
              name="realName"
              value={initState.realName}
              onChange={_onChange}
            />
          </BlockDiscrip>
          <BlockDiscrip>
            <TitleDiscrip>Origin description</TitleDiscrip>
            <TextArea
              type="text"
              name="originDescription"
              value={initState.originDescription}
              onChange={_onChange}
            />
          </BlockDiscrip>
          <BlockDiscrip>
            <TitleDiscrip>Superpowers</TitleDiscrip>
            <TextArea
              type="text"
              name="superpowers"
              value={initState.superpowers}
              onChange={_onChange}
            />
          </BlockDiscrip>
          <BlockDiscrip>
            <TitleDiscrip>CatchPhrase</TitleDiscrip>
            <TextArea
              type="text"
              name="catchPhrase"
              value={initState.catchPhrase}
              onChange={_onChange}
            />
          </BlockDiscrip>
          {error ? <ErrorInfo>{error}</ErrorInfo> : ""}
          <WrapperForButton>
            <ButtonSave type="submit" onClick={handlerSave}>
              Save
            </ButtonSave>
          </WrapperForButton>
        </MainForm>
      </WrapperBlank>
    </WrapperForm>
  );
};

export default HeroCreationSheet;
