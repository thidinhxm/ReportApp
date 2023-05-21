import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image, View } from 'react-native';
import { Asset, ImageLibraryOptions, ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { GlobalStyles } from '../../constants/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Button from '../UI/Button';
import { useTranslation } from 'react-i18next';


type Props = {
  image: Asset | undefined,
  onChangeImage: (image: Asset | undefined) => void,
}

const ReportCoverImage = ({ image, onChangeImage}: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const { t } = useTranslation(['homeScreen']);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false, 
      quality: 0.8,
      cameraType: 'back',
      allowsEditing: true,
    };
    launchImageLibrary(options as ImageLibraryOptions, (response: ImagePickerResponse) => {
      if (!response.didCancel) {
        if (response.assets && response.assets.length > 0) {
          onChangeImage(response.assets[0]);
          setIsOpened(false);
        }
        
      }
    });
  };

  const openCamera = async () => {
    setIsOpened(false);
    const response = await launchCamera({} as ImageLibraryOptions);
    if (!response.didCancel) {
      if (response.assets && response.assets.length > 0) {
        onChangeImage(response.assets[0]);
      }
    } else {
      setIsOpened(true)
    }
  };

  return (
    <View>
      {image? (<>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.uri }} style={{ width: '100%', height: 230 }} />
        </View>
        <View style={styles.changePhotoButtonContainer}>
          <Button 
            onPress={() => setIsOpened(true)}
            style={styles.buttonChangeCover}
            textStyle={styles.buttonFromCameraText}
          >
            <Feather name='image' size={20} />
            {'  '}{t('homeScreen:changeCover')}
          </Button>
          <Button 
            onPress={() => onChangeImage(undefined)}
            style={styles.buttonRemoveImage}
            textStyle={styles.buttonRemoveImageText}
          >
            <AntDesign name='close' size={20}/>
            {'  '}{t('homeScreen:removePhoto')}
          </Button>
        </View>
      </>)  :
      <Pressable 
        onPress={() => setIsOpened(true)}
        style={styles.imageContainer}
      >
        <Entypo name='plus' size={45} color={GlobalStyles.colors.gray500}/>
        <Text style={styles.imageDescription}>{t('homeScreen:addCover')} <Text style={styles.required}>*</Text></Text>
      </Pressable>
      }
      <Modal visible={isOpened} animationType='none' transparent={true} style={{ flex: 1}}>
        <TouchableOpacity
          style={{ 
              flex: 1, 
              backgroundColor: GlobalStyles.colors.blackOpacity05,
          }}
          activeOpacity={1}
          onPressOut={() => setIsOpened(false)}
        />
        <View style={styles.chooseImageContainer}>
          <View style={styles.textOptionContainer}>
            <Text style={styles.textImageOption}>
              {t('homeScreen:chooseImage')}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              onPress={openCamera} 
              style={styles.buttonFromCamera}
              textStyle={styles.buttonFromCameraText}
            >
              <Feather name='camera' size={20} />
              {'  '}{t('homeScreen:openCamera')}</Button>
            <Button onPress={openImagePicker}>
              <Feather name='image' size={20} />
              {'  '}{t('homeScreen:openLibrary')}</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ReportCoverImage;

const styles = StyleSheet.create({
  imageContainer: {
    height: 235,
    backgroundColor: GlobalStyles.colors.gray100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: GlobalStyles.colors.gray500,
  },
  required: {
    color: GlobalStyles.colors.red,
  },
  chooseImageContainer: {
    backgroundColor: GlobalStyles.colors.white,
  },
  textOptionContainer: {
    marginTop: 20,
  },
  textImageOption: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: GlobalStyles.colors.blue500,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  buttonFromCamera: {
    backgroundColor: GlobalStyles.colors.white,
    borderColor: GlobalStyles.colors.blue500,
    borderWidth: 1,
  },
  buttonFromCameraText: {
    color: GlobalStyles.colors.blue500,
  },
  changePhotoButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonChangeCover: {
    backgroundColor: GlobalStyles.colors.white,
    borderColor: GlobalStyles.colors.blue500,
    borderWidth: 1,
    paddingVertical: 5,
  },
  buttonRemoveImage: {
    backgroundColor: GlobalStyles.colors.white,
    borderColor: GlobalStyles.colors.red,
    borderWidth: 1,
    paddingVertical: 5,
  },
  buttonRemoveImageText: {
    color: GlobalStyles.colors.red,
  },
})
