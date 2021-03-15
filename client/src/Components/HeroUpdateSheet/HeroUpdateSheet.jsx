import React, { useState, useEffect } from "react";
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
} from "./styledHeroUpdateSheet";
import imageCompression from "browser-image-compression";
import { useGetParametr } from "../../Hooks/useGetParametr";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCardById,
  deletImage,
  uploadImage,
  upDateImg,
  upDateCard,
  DeleteCard,
} from "../../Redux/HeroAdjust";
import { DOMAIN_NAME } from "../../Helper/api";
const HeroUpdateSheet = () => {
  const Dispatch = useDispatch();
  const idCard = useGetParametr("idCard");
  const [OneCard, setOneCard] = useState("");
  const [isDeletedCard, SetIsDeletedCard] = useState(false);
  const error = useSelector((state) => state.AdjustHeroDb.error);
  useEffect(() => {
    let HandlerToGetCard = async () => {
      let resultAction = await Dispatch(GetCardById({ idCard: idCard }));
      if (resultAction.meta.requestStatus === "fulfilled") {
        setOneCard(resultAction.payload.OneCard);
      }
    };
    if (idCard) {
      HandlerToGetCard();
    }
  }, [idCard, Dispatch, isDeletedCard]);

  const deleteImage = (e) => {
    if (OneCard.image !== "") {
      Dispatch(deletImage({ imageName: OneCard.image, idCard: idCard }));
      setOneCard({ ...OneCard, image: "" });
    }
  };

  const _onChange = (e) => {
    setOneCard({ ...OneCard, [e.target.name]: e.target.value });
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
      const resulAction = await Dispatch(
        upDateImg({ idCard: idCard, File: compressedFile })
      );

      if (resulAction.meta.requestStatus === "fulfilled") {
        setOneCard({
          ...OneCard,
          [e.target.name]: resulAction.payload.ImageName,
        });
        e.target.value = "";
      }
    }
  };

  const HandlerUpdateCard = async (e) => {
    e.preventDefault();
    const resultAction = await Dispatch(
      upDateCard({ idCard: idCard, BodyForm: OneCard })
    );
    if (resultAction.meta.requestStatus === "fulfilled") {
      setOneCard({ ...resultAction.payload.card });
      window.location.replace("/");
    }
  };

  const handlerDeletCard = async (e) => {
    e.preventDefault();
    let resultAction = await Dispatch(DeleteCard({ idCard: idCard }));
    if (resultAction.meta.requestStatus === "fulfilled") {
      SetIsDeletedCard(true);
      setOneCard("");
      window.location.replace("/");
    }
  };
  return (
    <>
      {OneCard ? (
        <WrapperForm>
          <WrpapperAvatarHero>
            <AvartarImg
              src={
                OneCard.image === ""
                  ? "https://image.flaticon.com/icons/png/512/37/37543.png"
                  : `${DOMAIN_NAME}/${OneCard.image}`
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
                  value={OneCard.nickName}
                  onChange={_onChange}
                />
              </BlockDiscrip>
              <BlockDiscrip>
                <TitleDiscrip>RealName</TitleDiscrip>
                <TextArea
                  type="text"
                  name="realName"
                  value={OneCard.realName}
                  onChange={_onChange}
                />
              </BlockDiscrip>
              <BlockDiscrip>
                <TitleDiscrip>Origin description</TitleDiscrip>
                <TextArea
                  type="text"
                  name="originDescription"
                  value={OneCard.originDescription}
                  onChange={_onChange}
                />
              </BlockDiscrip>
              <BlockDiscrip>
                <TitleDiscrip>Superpowers</TitleDiscrip>
                <TextArea
                  type="text"
                  name="superpowers"
                  value={OneCard.superpowers}
                  onChange={_onChange}
                />
              </BlockDiscrip>
              <BlockDiscrip>
                <TitleDiscrip>CatchPhrase</TitleDiscrip>
                <TextArea
                  type="text"
                  name="catchPhrase"
                  value={OneCard.catchPhrase}
                  onChange={_onChange}
                />
              </BlockDiscrip>
              {error ? <ErrorInfo>{error}</ErrorInfo> : ""}
              <WrapperForButton>
                <ButtonSave type="submit" onClick={HandlerUpdateCard}>
                  Update
                </ButtonSave>
                <ButtonSave type="submit" onClick={handlerDeletCard}>
                  Delet Card
                </ButtonSave>
              </WrapperForButton>
            </MainForm>
          </WrapperBlank>
        </WrapperForm>
      ) : (
        ""
      )}
    </>
  );
};

export default HeroUpdateSheet;
