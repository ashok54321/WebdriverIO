Feature: test file upload and download functionality

    Scenario: Upload file to the application
        Given User is on the file upload page
        When User uploads a file
        Then The file should be uploaded successfully