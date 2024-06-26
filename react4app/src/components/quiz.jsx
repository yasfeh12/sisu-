import React, { useState } from 'react';
import { View, Text, Button, Picker, StyleSheet, ScrollView } from 'react-native';

const courses = [
  // same course data as before
];

const questions = [
  // same questions data as before
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [result, setResult] = useState(null);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const courseCounts = {};
    answers.forEach(answer => {
      if (answer) {
        if (courseCounts[answer]) {
          courseCounts[answer]++;
        } else {
          courseCounts[answer] = 1;
        }
      }
    });

    const bestCourseId = Object.keys(courseCounts).reduce((a, b) => courseCounts[a] > courseCounts[b] ? a : b);
    const bestCourse = courses.find(course => course.id == bestCourseId);
    setResult(bestCourse);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Equity, Diversity, and Inclusion Quiz</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{index + 1}. {question.question}</Text>
          <Picker
            selectedValue={answers[index]}
            style={styles.picker}
            onValueChange={(value) => handleAnswerChange(index, value)}
          >
            <Picker.Item label="Select an answer" value="" />
            {question.options.map(option => (
              <Picker.Item key={option.courseId} label={option.text} value={option.courseId} />
            ))}
          </Picker>
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Recommended Course</Text>
          <Text style={styles.resultName}>{result.title}</Text>
          <Text style={styles.resultDescription}>{result.description}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#343a40',
    color: '#f8f9fa'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8f9fa',
    marginBottom: 20,
    textAlign: 'center'
  },
  questionContainer: {
    marginBottom: 20
  },
  question: {
    fontSize: 18,
    color: '#f8f9fa'
  },
  picker: {
    height: 50,
    color: '#f8f9fa',
    backgroundColor: '#495057'
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#495057',
    borderRadius: 10
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8f9fa',
    marginBottom: 10
  },
  resultName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8f9fa'
  },
  resultDescription: {
    fontSize: 16,
    color: '#ced4da'
  }
});

export default Quiz;
