Feature: List all messages
  In order to see all the messages created
  As a user I want to list all messages

  Scenario: Basic message list happy path
    When I navigate into the messages view
    Then the view must have 4 messages
