Feature: Home Page

  Background:
    Given a calculator page

  Scenario: Initial View of the Home Page
    Given There are 3 widgets to rent
    When I go to the home page
    Then I see a list of 3 widgets for rent.


