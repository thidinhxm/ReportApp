import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import Video from 'react-native-video';
import { GlobalStyles } from '../../constants/styles';
import { DocumentPickerResponse } from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FileType } from '../../../@type/common';

type Props = {
  file: DocumentPickerResponse,
  onRemoveFile: (uri: string) => void,
}

type PropsFileRender = {
  uri: string,
  name: string | null
  type: FileType,
}

const FileRenderer = ({ uri, type, name }: PropsFileRender) => {
  if (type === 'image') {
    return <Image source={{ uri: uri }} style={styles.image}/>;
  }

  if (type === 'video') {
    return <Video source={{ uri: uri }} style={styles.video} resizeMode='cover' />;
  }

  return (
    <View style={styles.file}>
      <MaterialIcons name='insert-drive-file' size={55} color={GlobalStyles.colors.gray300}/>
      <View style={styles.nameContainer}>
        <Text style={styles.textName} numberOfLines={2} ellipsizeMode='tail'>{name}</Text>
      </View>
    </View>
  );
};

function AdditionalFile({ file, onRemoveFile }: Props) {
  let fileType : FileType = 'other';
  if (file.type && file.type.startsWith('image/'))  {
    fileType= 'image';
  } else if (file.type && file.type.startsWith('video/')) {
    fileType = 'video';
  }
  return (
    <View style={styles.container}>
      <FileRenderer uri={file.uri} type={fileType} name={file.name}/>
      <View style={styles.overlay}>
        <Pressable style={styles.closeIcon} onPress={() => onRemoveFile(file.uri)}>
          <AntDesign name='closecircleo' size={20} color={'white'} />
        </Pressable>
      </View>
    </View>
  )
}

export default AdditionalFile;

const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 115,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: GlobalStyles.colors.gray100,
    borderColor: GlobalStyles.colors.gray300,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: GlobalStyles.colors.gray400,
  },
  video: {
    flex: 1, 
    width: '100%', 
    height: '100%',
    borderRadius: 10,
  },
  image: {
    flex: 1, 
    width: '100%', 
    height: '100%',
    borderRadius: 10,
  },
  file: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  closeIcon: {
    marginTop: 2,
    marginRight: 2,
    backgroundColor: GlobalStyles.colors.gray900,
    borderRadius: 10,
  },
  nameContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    top: '65%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: GlobalStyles.colors.blackAlpha700
  },
  textName: {
    color: 'white',
    marginBottom: 5,
    marginHorizontal: 5,
  }
})