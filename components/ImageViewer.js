import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageViewer = ({placeHolderImageSource, selectedImage}) => {
  const imageSource = selectedImage ? {uri: selectedImage} : placeHolderImageSource;
  return (
    <Image
        source={imageSource}
        style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 400,
        borderRadius: 18,
    },
})

export default ImageViewer