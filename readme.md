
# Repeat Cells in Google Sheets

I had to help my mom to create a list on Sheets, the list needed to have the names repeated acording to the number of tickets they had.

## Usage/Examples

![example of code pasted on code.gs](/assets/images/example.png)

### Usage:

- Click on Extensions > Apps Script
- Copy the function code to code.gs
- Click on save button
- Go back to your project
- Click on Extensions > Macros > Import Macros
- Select the function you have just created
- Click on Extensions > Macros > **"Name of the function"**
- Just wait and a new sheet will be created with the list of names

### Example:

| A     | B  |
|-------|----|
| Name1 | 03 |
| Name2 | 01 |
| Name3 | 06 |
| Name4 | 04 |
| Name5 | 04 |
| Name6 | 02 |

### Result:

In a new sheet will be this result.
|A|
|-|
Name1
Name1
Name1
Name2
Name3
Name3
Name3
Name3
Name3
Name3
Name4
Name4
Name4
Name4
Name5
Name5
Name5
Name5
Name6
Name6

