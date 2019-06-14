

This is available at https://musing-noyce-84b3fc.netlify.com

Project specs:
A calculator website which logs calculations as they happen and shares those calculations with everyone connected to the website. For example, user A and user B go to your site at the same time. User A calculates "5 + 5", which equals "10". This is logged below the calculator as "5+5 = 10". User B is updated about this calculation right after user A posts it. Now, user B calculates "3x_4". This calculates to 12 and displays "3x_4=12" right below the prior calculation. User A sees this update immediately after user B posts it. Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.


Where I succeeded:

Calculator allows user to enter to numbers and choose an operation.  Upon clicking "calculate", the equation will be evaluated and the entire equation with answer will display below the calculator.

The display will show up to 10 equations, with the newest one displaying at the top and the oldest one at the bottom.

Input fields require a number and are required.

If an operation is not selected, the calculator will default to addition.

Where I failed:
I began setting up Firebase to persist data between sessions and across browsers, but did not get this feature working. For the sake of time, I stopped here, but intend to complete this portion.

My visual design is less than fantastic. 

What I would add:

In addition to completing the specs and persisting the data, I would add test to ensure the calculator works properly and a test to ensure no more than 10 equations display.