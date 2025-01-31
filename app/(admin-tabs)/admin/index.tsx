import { Button, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Text, View } from '@/components/Themed';
import { Link, router, Stack } from 'expo-router';
import NewJobModal from '@/components/modals/createJobModal';

export default function AdminScreen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [jobData, setJobData] = useState<{ name: string; location: string } | null>(null);

  // Function to close the modal and handle the data
  const handleDone = (data: { name: string; location: string }) => {
    setJobData(data); // Set the job data returned from the modal
    setModalVisible(false); // Close the modal
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Admin Screen Title' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Admin Screen</Text>
        <Button title='Go To Home' onPress={() => router.replace('/(tabs)/home')} />
        <Button title='Open Simple Modal' onPress={() => router.push('/(modals)/modal')} />

        <Button title='Create Job' onPress={() => router.push('/(modals)/createJob')} />

        <Button title='Create New Job (w/o router)' onPress={() => setModalVisible(true)} />

        {/* Show job data if available */}
        {jobData && (
          <Text>
            Created Job Name: {jobData.name}, Location: {jobData.location}
          </Text>
        )}

        {/* Modal to show NewJobModal component */}
        <Modal
          visible={modalVisible}
          animationType='slide'
          transparent={true}
          onRequestClose={() => setModalVisible(false)} // Close modal on back press
        >
          <NewJobModal onDone={handleDone} onCancel={() => setModalVisible(false)} />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
