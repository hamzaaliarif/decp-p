import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch tasks from the database
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskText}>{item.title}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('EditTask', { taskId: item.id })} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
});

export default TaskList;
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const saveTask = () => {
    // Save the task to the database
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save" onPress={saveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddTask;
