Feature: Login functionality on mobile app
  As a user
  I want to login to the app
  So that I can access my account

  Scenario: Successful login
    Given the app is launched
    When I enter valid credentials
    And I tap the login button
    Then I should see the home screen
