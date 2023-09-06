import { Task, TodoList } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  it('should correctly add a single new task to the to-do list', () => {
    // Arrange
    const todoList = new TodoList()
    const newTask = new Task('Test task')

    // Act
    todoList.addTask(newTask)
    
    // Assert
    // 💡 Tip: use toEqual() to compare arrays and objects, and toBe() to compare primitive values (like numbers or booleans)
    expect(todoList.tasks).toEqual([newTask])
  })

  it('should correctly add multiple new tasks to the to-do list', () => {
    const todoList = new TodoList()
    const testTask1 = new Task('Test task 1')
    const testTask2 = new Task('Test task 2')

    todoList.addTask(testTask1)
    todoList.addTask(testTask2)

    expect(todoList.tasks).toEqual([testTask1, testTask2])
  })

  it('should not add a task to a list if the task has no name', () => {
    // 🎯 implement test here
    const mockTask = new Task();
    const mockList = new TodoList();

    mockList.addTask(mockTask);

    expect(mockList.tasks.length).toBe(0);
  })

  it('should correctly toggle the completion status of a task', () => {
    // 🎯 implement test here
    const mockTask = new Task("Wash clothes");

    mockTask.toggleCompletion();

    expect(mockTask.isComplete).toEqual(true);
  })

  it('should correctly delete a task from a to-do list', () => {
    // 🎯 implement test here
    const mockTask = new Task("dry clothes");
    const mockTask2 = new Task("read a chapter");
    const mockList = new TodoList();
    mockList.addTask(mockTask);
    mockList.addTask(mockTask2);

    mockList.deleteTask(mockTask);

    expect(mockList.tasks.length).toEqual(1);
  })

  it('should correctly count the amount of tasks in a list', () => {
    const mockTask = new Task("fake task 1");
    const mockTask2 = new Task("fake task 2");
    const mockTask3 = new Task("fake task 3");
    const mockList = new TodoList();

    mockList.addTask(mockTask);
    mockList.addTask(mockTask2);
    mockList.addTask(mockTask3);

    expect(mockList.countTotalTasks()).toEqual(3);
  })

  it('should count the amount of incomplete tasks', () => {
    const mockTask = new Task("fake task 1", true);
    const mockTask2 = new Task("fake task 2", false);
    const mockTask3 = new Task("fake task 3", false);
    const mockList = new TodoList();

    mockList.addTask(mockTask);
    mockList.addTask(mockTask2);
    mockList.addTask(mockTask3);

    const incomplete = mockList.countIncompleteTasks();

    expect(incomplete).toEqual(2);  
  })

  it('should count the amount of complete tasks', () => {
    const mockTask = new Task("fake task 1", true);
    const mockTask2 = new Task("fake task 2", false);
    const mockTask3 = new Task("fake task 3", false);
    const mockList = new TodoList();

    mockList.addTask(mockTask);
    mockList.addTask(mockTask2);
    mockList.addTask(mockTask3);

    const complete = mockList.countCompleteTasks();

    expect(complete).toEqual(1);  
  })

  it('should check if all tasks are complete', () => {
    const mockTask = new Task("fake task 1", true);
    const mockTask2 = new Task("fake task 2", true);
    const mockTask3 = new Task("fake task 3", true);
    const mockList = new TodoList();

    mockList.addTask(mockTask);
    mockList.addTask(mockTask2);
    mockList.addTask(mockTask3);

    const complete = mockList.checkIsEntireListComplete();

    expect(complete).toEqual(true);  
  })


})