@ui @foo

Feature: Foo Feature name
        Then Foo Step to execute
    @scene @scene2 @ui
    Scenario: Hello
        Given Foo Step to execute
        # Then something
        # Then I login with username "RAJ" and password "RAJ123" with "ENBD" entity
        # Then I select row number 1
        Then I fill form with following details
            | Name  | <Name>  |
            | Fname | <Fname> |
        Examples:
            | Name   | Fname |
            | Danish | D     |
            | Naveen | N     |

    @scene2
    Scenario: Hello2
        Given Foo Step to execute
        Then something
        Examples:
            | Name   | Fname |
            | Danish | D     |
            | Naveen | N     |