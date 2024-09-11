import React, { useState } from 'react';
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import './BubbleSortCode.css'; // Custom CSS for modern styling

const BubbleSortCode = () => {
  const [activeTab, setActiveTab] = useState('python');

  const tabs = [
    { name: 'Python', id: 'python' },
    { name: 'Java', id: 'java' },
    { name: 'C', id: 'c' },
    { name: 'C++', id: 'cpp' },
  ];

  const codeSnippets = {
    python: `# Bubble sort in Python
def bubbleSort(array):
    for i in range(len(array)):
        for j in range(0, len(array) - i - 1):
            if array[j] &gt; array[j + 1]:
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

data = [-2, 45, 0, 11, -9]
bubbleSort(data)
print('Sorted Array in Ascending Order:')
print(data)`,
    java: `// Bubble sort in Java
import java.util.Arrays;
class Main {
    static void bubbleSort(int array[]) {
        int size = array.length;
        for (int i = 0; i < size - 1; i++)
            for (int j = 0; j < size - i - 1; j++)
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
    }
    public static void main(String args[]) {
        int[] data = { -2, 45, 0, 11, -9 };
        Main.bubbleSort(data);
        System.out.println("Sorted Array in Ascending Order:");
        System.out.println(Arrays.toString(data));
    }
}`,
    c: `// Bubble sort in C
#include <stdio.h>
void bubbleSort(int array[], int size) {
    for (int step = 0; step < size - 1; ++step)
        for (int i = 0; i < size - step - 1; ++i)
            if (array[i] > array[i + 1]) {
                int temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
}
void printArray(int array[], int size) {
    for (int i = 0; i < size; ++i)
        printf("%d  ", array[i]);
    printf("\\n");
}
int main() {
    int data[] = {-2, 45, 0, 11, -9};
    int size = sizeof(data) / sizeof(data[0]);
    bubbleSort(data, size);
    printf("Sorted Array in Ascending Order:\\n");
    printArray(data, size);
}`,
    cpp: `// Bubble sort in C++
#include <iostream>
using namespace std;
void bubbleSort(int array[], int size) {
    for (int step = 0; step < size - 1; ++step)
        for (int i = 0; i < size - step - 1; ++i)
            if (array[i] > array[i + 1]) {
                int temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
}
void printArray(int array[], int size) {
    for (int i = 0; i < size; ++i)
        cout << "  " << array[i];
    cout << "\\n";
}
int main() {
    int data[] = {-2, 45, 0, 11, -9};
    int size = sizeof(data) / sizeof(data[0]);
    bubbleSort(data, size);
    cout << "Sorted Array in Ascending Order:\\n";
    printArray(data, size);
}`
  };

  return (
    <div className="tabbed-editor">
      <div className="tabbed-editor__nodes">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`tabbed-editor__node ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <a href={`#${tab.id}-code`}>{tab.name}</a>
          </div>
        ))}
      </div>

      <div className="code-editor code-editor--tabbed">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`code-editor__area ${activeTab === tab.id ? 'code-editor__area--active' : ''}`}
          >
            <div className="pre-code-wrapper">
              <div title="Click to copy" className="copy-code-button"></div>
              <pre className="exec" style={{ maxHeight: '600px' }}>
                <code className="hljs">
                  {codeSnippets[tab.id]}
                </code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSortCode;
