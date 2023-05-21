import { StyleSheet, View } from "react-native";
import AdditionalFile from "./AdditionalFile";
import ButtonAddFile from "./ButtonAddFile";
import { DocumentPickerResponse, pickMultiple, types } from "react-native-document-picker";
import { SetStateAction } from "react";


type Props = {
  files: DocumentPickerResponse[],
  onChangeFiles: (value: SetStateAction<DocumentPickerResponse[]>) => void,
}

const AdditionalFileList = function({ files, onChangeFiles }: Props) {

  const pickDocument = async () => {
    try {
      const res = await pickMultiple({
        type: [types.allFiles],
      })
      const uriSet = new Set(files.map(obj => obj.uri));
      const uniqueObjects = res.filter(obj => !uriSet.has(obj.uri));

      onChangeFiles(currentFiles => [...currentFiles, ...uniqueObjects]);
    } catch (err) {
      console.log(err);
    }
  }

  const removeFile = (uri: string) => {
    onChangeFiles(currentFiles => currentFiles.filter(file => file.uri !== uri));
  }
  return (
    <View style={styles.extendFilesContainer}>
      <ButtonAddFile onPress={pickDocument}/>
      {files.map((file) => (
        <AdditionalFile 
          file={file} 
          key={file.uri} 
          onRemoveFile={removeFile} 
        />
      ))}
    </View>
  );
}

export default AdditionalFileList;

const styles = StyleSheet.create({
  extendFilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
})