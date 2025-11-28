Feature: Ecommerce Application

  @smokeTest
  Scenario: Login with invalid credentials
    Given User is on the login page of Ecommerce Application
    When User enters invalid username and password
    And User clicks on the login button
    Then User should see an error message indicating invalid credentials

 Scenario: Login with valid credentials
    Given User is on the login page of Ecommerce Application
    When User enters valid username and password
    And User clicks on the login button
    Then User should be redirected to the dashboard page

