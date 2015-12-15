Feature: An user delete a contact in the list

Scenario: User delete contact
Given display contact list
When User click and delete a contact
Then the contact is not displayed on the list