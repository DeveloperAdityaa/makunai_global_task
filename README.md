#To-Do List App

##Overview

This To-Do List application allows users to manage their tasks effectively. Users can add new tasks, mark them as completed, and delete tasks as needed. The application also utilizes local storage to persist the tasks, ensuring that they remain even after a page refresh.

##Technologies Used

    •	React: For building the user interface and managing component states.
    •	JavaScript: To implement functionality, handle events, and manage local storage.
    •	CSS: To style the application and ensure a responsive layout.

##Features

    •	Add Tasks: Users can input a new task and add it to the list by clicking the “Add” button.
    •	Display Tasks: Each task appears in a list format with the ability to view the task text, completion status, and a delete option.
    •	Delete Tasks: Users can remove tasks from the list by clicking the delete icon.
    •	Mark Tasks as Completed: Users can click on a checkbox to mark tasks as completed. Completed tasks are visually differentiated from pending tasks.

##Approach

    1.	Component Structure:
    •	App Component: The main component responsible for state management and rendering the task list and input form.
    •	ToDoItem Component: A reusable component representing each task, including a checkbox for completion and a delete icon.
    2.	State Management:
    •	Utilized React’s useState hook to manage the list of tasks and input field state.
    •	Implemented local storage to save and retrieve tasks, ensuring data persistence across page reloads.
    3.	Event Handling:
    •	Handled button clicks and checkbox changes to update the task list appropriately.
    •	Implemented a function to add new tasks only if the input field is not empty and to clear the input field after adding a task.
    4.	CSS Styling:
    •	Designed the application to be visually appealing with basic CSS styles, ensuring a clean and user-friendly interface.

##Challenges Faced

    •	Local Storage Management: Implementing the logic to save and retrieve tasks from local storage required careful handling to ensure data persistence. I had to ensure that tasks were correctly loaded on the initial render and updated appropriately when changes occurred.
    •	Event Handling: Managing state changes through event handling posed challenges, especially when ensuring that tasks could be marked as completed or deleted without losing the entire task list.
    •	Responsive Design: Ensuring that the layout was responsive and that task items displayed correctly regardless of text length took additional time and effort.

##Conclusion

This To-Do List app is a practical implementation of core React concepts such as component structure, state management, and event handling. The experience gained from developing this application has enhanced my understanding of React and improved my ability to manage application state effectively.
