# react-date-picker
react日期选择器
## Properties
| Name        | Type           | Default  | Description |
| ------------- |:-------------| :-----|:------|
| show      | bool | false | control the show or hide of the datePanel|
| onCancel      | func     |  | the function of handling the event of tapping the cancel button |
| label | string      | | the title of the datePanel|
| minYear | number      | current year minus 100| the start of the range |
| maxYear | number      | current yaer add 100 | the end of the range |
| defaultIndex | array | the index array of current date| the default choice when first open the panel|
| onConfirm | func      | | the function of handling the event of tapping  |
| type | string      |‘year&month&day’ | controling the number of picker items, the value can be 'year&month&day','year&month' and 'year'|
