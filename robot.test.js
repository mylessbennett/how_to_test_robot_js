const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js")

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  const foreignRobot = newRobot(true, true, false);
  let expectedResult = 1;
  // act
  let result = station(foreignRobot);
  // assert
  expect(result).toBe(expectedResult);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  const vintageRobot = newRobot(true, false, true);
  let expectedResult = 2;
  // act
  let result = station(vintageRobot);
  // assert
  expect(result).toBe(expectedResult);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const standardRobot = newRobot(true, false, false);
  let expectedResult = 3;
  // act
  let result = station(standardRobot);
  // assert
  expect(result).toBe(expectedResult);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const goodConditionRobot = newRobot(false, false, false);
  let expectedResult = 4;
  // act
  let result = station(goodConditionRobot);
  // assert
  expect(result).toBe(expectedResult);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const emptyTodoRobot = newRobot(false, false, false);
  expectedResult = -1;
  // act
  let result = prioritizeTasks(emptyTodoRobot);
  // assert
  expect(result).toBe(expectedResult);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const todosRobot = newRobot(false, false, false);
  todosRobot.todos.push(1, 3, 5);
  expectedResult = Math.max(...todosRobot.todos);
  // act
  let result = prioritizeTasks(todosRobot);
  // assert
  expect(result).toBe(expectedResult);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const testRobot = newRobot(false, false, false);
  testRobot.dayOff = "Sunday";
  expectedResult = false;
  // act
  let result = isWorkday(testRobot, "Sunday");
  // assert
  expect(result).toBe(expectedResult);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  const testRobot = newRobot(false, false, false);
  testRobot.dayOff = "Sunday";
  expectedResult = true;
  // act
  let result = isWorkday(testRobot, "Monday");
  // assert
  expect(result).toBe(expectedResult);
});
