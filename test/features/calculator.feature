Feature: Calculator
  In order to avoid silly mistakes
  As a math idiot
  I want to be told the sum of two numbers

  Background:
    Given a calculator

  Scenario: Add two numbers (Simple version)
    Given I have entered a number 50 into the calculator
    And I have entered another number 70 into the calculator
    When I press add
    Then the result should be 120 on the screen

  Scenario Outline: Add two numbers (Table version)
    Given I have entered a number <number1> into the calculator
    And I have entered another number <number2> into the calculator
    When I press add
    Then the result should be <expectedSum> on the screen
    Examples:
    | number1 | number2 | expectedSum |
    | 50      | 70      | 120         |
    | 10      | 10      | 20         |
    | 10      | 20      | 30         |

