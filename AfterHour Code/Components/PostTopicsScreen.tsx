import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import AppStyles from '../StyleSheets';
import { useNavigation, useRoute } from '@react-navigation/native';

const allTopics = [
  { id: '1', name: 'Featured', icon: '⭐' },
  { id: '2', name: 'Contest', icon: '🏆' },
  { id: '3', name: 'YOLO', icon: '💰' },
  { id: '4', name: 'Poll', icon: '📦' },
  { id: '5', name: 'Chart', icon: '📈' },
  { id: '6', name: 'DD', icon: '🧠' },
  { id: '7', name: 'Gain', icon: '🚀' },
  { id: '8', name: 'Loss', icon: '📉' },
  { id: '9', name: 'Funny', icon: '😂' },
  { id: '10', name: 'Crypto', icon: '🤖' },
  { id: '11', name: 'Discuss', icon: '💬' },
  { id: '12', name: 'News', icon: '📰' },
];


const PostTopicsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const initialSelected = route.params?.selectedTopics || [];

  const [selectedTopics, setSelectedTopics] = useState(initialSelected);

  const toggleSelect = (topic) => {
    const exists = selectedTopics.find((t) => t.id === topic.id);
    if (exists) {
      setSelectedTopics((prev) => prev.filter((t) => t.id !== topic.id));
    } else if (selectedTopics.length < 5) {
      setSelectedTopics((prev) => [...prev, topic]);
    }
  };

  const isSelected = (id) => selectedTopics.some((t) => t.id === id);

  const handleDone = () => {
    navigation.navigate('CreatePost', { selectedTopics });
  };

  return (
    <SafeAreaView style={AppStyles.modalOverlay}>
      <View style={AppStyles.modalContainer}>
        <Text style={AppStyles.modalTitle}>Select up to 5 topics</Text>
        <FlatList
          data={allTopics}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => {
            const active = isSelected(item.id);
            return (
              <TouchableOpacity
                style={[
                  AppStyles.topic,
                  active && { backgroundColor: '#333' },
                ]}
                onPress={() => toggleSelect(item)}
              >
                <Text style={AppStyles.topicIcon}>{item.icon}</Text>
                <Text style={AppStyles.topicName}>{item.name}</Text>
                {active && <Text style={{ color: 'lime' }}>✓</Text>}
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity onPress={handleDone} style={{ marginTop: 20 }}>
          <Text style={{ color: 'skyblue', fontSize: 16 }}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PostTopicsScreen;