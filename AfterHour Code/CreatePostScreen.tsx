import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import AppStyles from './StyleSheets';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PostTopicsScreen from './Components/PostTopicsScreen';

// Define route params for navigation
type RootStackParamList = {
  CreatePost: { selectedTopics?: Topic[] } | undefined;
  PostTopics: { selectedTopics: Topic[] };
};

type Topic = {
  id: string;
  name: string;
  icon: string;
};

const CreatePostScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'CreatePost'>>();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);

  useEffect(() => {
    if (route.params?.selectedTopics) {
      setSelectedTopics(route.params.selectedTopics);
    }
  }, [route.params?.selectedTopics]);

  const handlePost = () => {
    if (!title.trim()) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    console.log({
      title,
      body,
      topics: selectedTopics.map((t) => t.name),
    });
    // backend logic
  };

  const removeTopic = (id: string) => {
    setSelectedTopics((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={AppStyles.container}
    >
      {/* Header */}
      <View style={AppStyles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text style={AppStyles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={AppStyles.header}>Create post</Text>
        <TouchableOpacity onPress={handlePost}>
          <Text
            style={[
              AppStyles.postButton,
              !title.trim() && AppStyles.disabledPost,
            ]}
          >
            Post
          </Text>
        </TouchableOpacity>
      </View>

      {showAlert && (
        <Text style={AppStyles.alertText}>Add a title to post</Text>
      )}

      <ScrollView contentContainerStyle={AppStyles.contentContainer}>
        {/* Topic Chips */}
        <View style={[AppStyles.userRow, { flexWrap: 'wrap' }]}>
          <View style={AppStyles.userIcon} />
          <View style={AppStyles.selectedTopicsContainer}>
            {selectedTopics.map((topic) => (
              <View key={topic.id} style={AppStyles.topicBubble}>
                <Text style={AppStyles.topicBubbleText}>
                  {topic.icon} {topic.name}
                </Text>
                <TouchableOpacity onPress={() => removeTopic(topic.id)}>
                  <Text style={AppStyles.topicRemove}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
            {selectedTopics.length < 5 && (
              <TouchableOpacity
                style={[AppStyles.topicBubble, AppStyles.addTopicBubble]}
                onPress={() =>
                  navigation.navigate('PostTopics', { selectedTopics })
                }
              >
                <Text style={AppStyles.topicBubbleText}>Add Topics +</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Title */}
        <TextInput
          style={AppStyles.titleInput}
          placeholder="Title"
          placeholderTextColor="#888"
          maxLength={50}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={AppStyles.charCount}>{title.length} / 50</Text>

        {/* Body */}
        <TextInput
          style={AppStyles.bodyInput}
          placeholder="Body text (optional)"
          placeholderTextColor="#666"
          multiline
          maxLength={250}
          value={body}
          onChangeText={setBody}
        />
        <Text style={AppStyles.charCount}>{body.length} / 250</Text>
      </ScrollView>

      {/* Footer Icons */}
      <View style={AppStyles.footer}>
        {['🛡️', '🖼️', '📊'].map((icon, i) => (
          <TouchableOpacity key={i}>
            <Text style={AppStyles.footerIcon}>{icon}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;