function repeatCells() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var newSheet = ss.insertSheet();
  
  var data = sheet.getDataRange().getValues();
  var newData = [];
  
  for (var i = 0; i < data.length; i++) {
    var cellValue = data[i][0];
    var repeatTimes = data[i][1];
    
    for (var j = 0; j < repeatTimes; j++) {
      newData.push([cellValue]);
    }
  }
  
  newSheet.getRange(1, 1, newData.length, 1).setValues(newData);
}
