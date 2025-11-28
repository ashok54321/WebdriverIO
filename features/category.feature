Feature: Valiate all categories in Ecommerce Application

  Scenario: Login with valid credentials
    Given User is on the login page of Ecommerce Application
    When User enters valid username and password
    And User clicks on the login button
    Then User should be redirected to the dashboard page

  Scenario: Validate all categories listed in the application
    Given User is logged in to the Ecommerce Application
    When User navigates to the categories section
    Then User should see all the categories listed correctly
    And Each category should have the correct details
