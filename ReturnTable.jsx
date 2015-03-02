﻿//var countries = new Array("DK", "SE", "FI", "NO");
var countries = new Array("SE");
var graphs = new Array("con", "mod", "bal", "gro", "rf", "rf_plus");

var alsoSaveLargeGraphs = true;

#include "destination-folder.jsx";
#include "functions/save-as-png.jsx";


for (var countryCounter = 0; countryCounter < countries.length; countryCounter++) {
  var imgCountry = countries[countryCounter];
  // don't make rf_plus for anyone but norway
  var graphsLength = graphs.length - (imgCountry == "NO" ? 0 : 1);
  for (var graphsCounter = 0; graphsCounter < graphsLength; graphsCounter++) {

    var graph = graphs[graphsCounter];
    #include "values/2015/retail-banking/se/min-exp-max-returns.jsx";

// Graph dimensions
    var leftMostPixel = 60;
    var rightMostPixel = 420;
    var middlePixel = 225; // position of center values

// Do the minReturn dots and text
    app.activeDocument.layers.getByName("maxLoss3YearsText").textItem.contents = Math.round(minReturn[2]) + "%";
    app.activeDocument.layers.getByName("maxLoss6YearsText").textItem.contents = Math.round(minReturn[5]) + "%";
    app.activeDocument.layers.getByName("maxLoss10YearsText").textItem.contents = Math.round(minReturn[9]) + "%";

// Do the expReturn dots and text
    app.activeDocument.layers.getByName("exp3YearsText").textItem.contents = Math.round(expReturn[2]) + "%";
    app.activeDocument.layers.getByName("exp6YearsText").textItem.contents = Math.round(expReturn[5]) + "%";
    app.activeDocument.layers.getByName("exp10YearsText").textItem.contents = Math.round(expReturn[9]) + "%";

// Do the maxReturn dots and text
    app.activeDocument.layers.getByName("maxReturn3YearsText").textItem.contents = Math.round(maxReturn[2]) + "%";
    app.activeDocument.layers.getByName("maxReturn6YearsText").textItem.contents = Math.round(maxReturn[5]) + "%";
    app.activeDocument.layers.getByName("maxReturn10YearsText").textItem.contents = Math.round(maxReturn[9]) + "%";


// Prepare the gradients
    var gradientWidth = 0;
    var gradientHeight = 0;
    app.activeDocument.artLayers.getByName("gradient").visible = false;
// 3 years
    deleteLayer("gradient3Years");
    selectLayer("gradient");
    duplicateLayer("gradient", "gradient3Years");
    if (minReturn[2] < 0) {
      app.activeDocument.artLayers.getByName("gradient3Years").visible = true;
      gradientWidth = (calculateWhereIsZero(minReturn[2], expReturn[2]) - leftMostPixel) * 2;
      gradientHeight = 36;
      resizeLayer("gradient3Years", gradientWidth, gradientHeight);
      positionLayerTopLeft("gradient3Years", leftMostPixel - 2, 81);
    }
// 6 years
    deleteLayer("gradient6Years");
    selectLayer("gradient");
    duplicateLayer("gradient", "gradient6Years");
    if (minReturn[5] < 0) {
      app.activeDocument.artLayers.getByName("gradient6Years").visible = true;
      gradientWidth = (calculateWhereIsZero(minReturn[5], expReturn[5]) - leftMostPixel) * 2;
      gradientHeight = 36;
      resizeLayer("gradient6Years", gradientWidth, gradientHeight);
      positionLayerTopLeft("gradient6Years", leftMostPixel - 2, 163);
    }
// 10 years
    deleteLayer("gradient10Years");
    selectLayer("gradient");
    duplicateLayer("gradient", "gradient10Years");
    if (minReturn[9] < 0) {
      app.activeDocument.artLayers.getByName("gradient10Years").visible = true;
      gradientWidth = (calculateWhereIsZero(minReturn[9], expReturn[9]) - leftMostPixel) * 2;
      gradientHeight = 36;
      resizeLayer("gradient10Years", gradientWidth, gradientHeight);
      positionLayerTopLeft("gradient10Years", leftMostPixel - 2, 245);
    }




    var imgLocale = [];
    switch (imgCountry) {
      case 'DK':
        imgLocale.push('da');
        break;
      case 'SE':
        imgLocale.push('sv');
        break;
      case 'NO':
        imgLocale.push('no');
        break;
      case 'FI':
        imgLocale.push('fi');
        imgLocale.push('sv');
        break;
    }
    imgLocale.push('en');


    for (var i = 0; i < imgLocale.length; i++) {

      // Setup language
      if (imgLocale[i] == 'sv') {
        app.activeDocument.layers.getByName("year3Text").textItem.contents = "3 år";
        app.activeDocument.layers.getByName("year6Text").textItem.contents = "6 år";
        app.activeDocument.layers.getByName("year10Text").textItem.contents = "10 år";
        app.activeDocument.layers.getByName("maxLossText").textItem.contents = "Min. avkastning";
        app.activeDocument.layers.getByName("expReturnText").textItem.contents = "Förväntad avkastning";
        app.activeDocument.layers.getByName("maxReturnText").textItem.contents = "Max. avkastning";
      } else if (imgLocale[i] == 'fi') {
        app.activeDocument.layers.getByName("year3Text").textItem.contents = "3 vuosi";
        app.activeDocument.layers.getByName("year6Text").textItem.contents = "6 vuosi";
        app.activeDocument.layers.getByName("year10Text").textItem.contents = "10 vuosi";
        app.activeDocument.layers.getByName("maxLossText").textItem.contents = "Väh. tuotto";
        app.activeDocument.layers.getByName("expReturnText").textItem.contents = "Odotettu tuotto";
        app.activeDocument.layers.getByName("maxReturnText").textItem.contents = "Enimm. tuotto";
      } else if (imgLocale[i] == 'da') {
        app.activeDocument.layers.getByName("year3Text").textItem.contents = "3 år";
        app.activeDocument.layers.getByName("year6Text").textItem.contents = "6 år";
        app.activeDocument.layers.getByName("year10Text").textItem.contents = "10 år";
        app.activeDocument.layers.getByName("maxLossText").textItem.contents = "Min. afkast";
        app.activeDocument.layers.getByName("expReturnText").textItem.contents = "Forventet afkast";
        app.activeDocument.layers.getByName("maxReturnText").textItem.contents = "Maks. afkast";
      } else if (imgLocale[i] == 'en') {
        app.activeDocument.layers.getByName("year3Text").textItem.contents = "3 year";
        app.activeDocument.layers.getByName("year6Text").textItem.contents = "6 year";
        app.activeDocument.layers.getByName("year10Text").textItem.contents = "10 year";
        app.activeDocument.layers.getByName("maxLossText").textItem.contents = "Min. return";
        app.activeDocument.layers.getByName("expReturnText").textItem.contents = "Expected return";
        app.activeDocument.layers.getByName("maxReturnText").textItem.contents = "Max. return";
      } else if (imgLocale[i] == 'no') {
        app.activeDocument.layers.getByName("year3Text").textItem.contents = "3 år";
        app.activeDocument.layers.getByName("year6Text").textItem.contents = "6 år";
        app.activeDocument.layers.getByName("year10Text").textItem.contents = "10 år";
        app.activeDocument.layers.getByName("maxLossText").textItem.contents = "Min. avkastning";
        app.activeDocument.layers.getByName("expReturnText").textItem.contents = "Forventet avkastning";
        app.activeDocument.layers.getByName("maxReturnText").textItem.contents = "Maks. avkastning";
      }

      saveAsPng(destinationFolder + '/' + countries[countryCounter],
          'RB_capdevb_s_' + graphs[graphsCounter] + '_' + imgLocale[i] + countries[countryCounter] + '.png',
          alsoSaveLargeGraphs);
    }

  }
}

function calculateWhereIsZero(minReturn3Year, expReturn3Year) {
  return middlePixel - (expReturn3Year - 0) / (expReturn3Year - minReturn3Year) * (middlePixel - leftMostPixel);
}


function positionLayerTopLeft(lyr, x, y) {// layerObject, Number, Number
  var lyr1 = app.activeDocument.layers.getByName(lyr);
  // if can not move layer return
  if (lyr1.iisBackgroundLayer || lyr.positionLocked) return
  // get the layer bounds
  var layerBounds = lyr1.bounds;
  // get top left position
  var layerX = layerBounds[0].value;
  var layerY = layerBounds[1].value;
  // the difference between where layer needs to be and is now
  var deltaX = x - layerX;
  var deltaY = y - layerY;
  // move the layer into position
  lyr1.translate(deltaX, deltaY);
}

function resizeLayer(layerName, Width, Height) {
  if (!documents.length) return;
  if (activeDocument.activeLayer.isBackgroundLayer) return;
  var startRulerUnits = preferences.rulerUnits;
  preferences.rulerUnits = Units.PIXELS;
  var LB = activeDocument.artLayers.getByName(layerName).bounds;
  var lWidth = 100 / (LB[2].value - LB[0].value);
  var lHeight = 100 / (LB[3].value - LB[1].value);
  var NewWidth = lWidth * Width;
  var NewHeight = lHeight * Height;
  activeDocument.artLayers.getByName(layerName).resize(Number(NewWidth), Number(NewHeight), AnchorPosition.BOTTOMRIGHT);
  app.preferences.rulerUnits = startRulerUnits;
}

function calculateYAxisPixels(valueInPercent) {
  return highestYPixels + (highestValueInPercent - valueInPercent) / (highestValueInPercent - lowestValueInPercent) * (lowestYPixels - highestYPixels);
}

function positionLayerCenter(lyr, x, y) {// layerObject, Number, Number
  var lyr1 = app.activeDocument.layers.getByName(lyr);
  // if can not move layer return
  if (lyr1.iisBackgroundLayer || lyr1.positionLocked) return
  // get the layer bounds
  var layerBounds = lyr1.bounds;
  // get top left position
  var layerX = (layerBounds[0].value + layerBounds[2].value) / 2;
  var layerY = (layerBounds[1].value + layerBounds[3].value) / 2;
  // the difference between where layer needs to be and is now
  var deltaX = x - layerX;
  var deltaY = y - layerY;
  // move the layer into position
  lyr1.translate(deltaX, deltaY);
}

function DrawLine() {
  var doc = app.activeDocument;
  var y = arguments.length;
  var i = 0;

  var lineArray = [];
  for (i = 0; i < y; i++) {
    lineArray[i] = new PathPointInfo;
    lineArray[i].kind = PointKind.CORNERPOINT;
    lineArray[i].anchor = arguments[i];
    lineArray[i].leftDirection = lineArray[i].anchor;
    lineArray[i].rightDirection = lineArray[i].anchor;
  }

  var lineSubPathArray = new SubPathInfo();
  lineSubPathArray.closed = false;
  lineSubPathArray.operation = ShapeOperation.SHAPEADD;
  lineSubPathArray.entireSubPath = lineArray;
  var myPathItem = doc.pathItems.add(lineName, [lineSubPathArray]);

  makeLayer(lineName + "Temp");

  // Select myPath path
  var idslct = charIDToTypeID("slct");
  var desc6 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref3 = new ActionReference();
  var idPath = charIDToTypeID("Path");
  ref3.putName(idPath, lineName);
  desc6.putReference(idnull, ref3);
  executeAction(idslct, desc6, DialogModes.NO);

  // Turn path to line
  var idStrk = charIDToTypeID("Strk");
  var desc7 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref4 = new ActionReference();
  var idPath = charIDToTypeID("Path");
  var idOrdn = charIDToTypeID("Ordn");
  var idTrgt = charIDToTypeID("Trgt");
  ref4.putEnumerated(idPath, idOrdn, idTrgt);
  desc7.putReference(idnull, ref4);
  var idUsng = charIDToTypeID("Usng");
  var idPcTl = charIDToTypeID("PcTl");
  desc7.putClass(idUsng, idPcTl);
  executeAction(idStrk, desc7, DialogModes.NO);

  // remove line
  myPathItem.remove();

  copyLayerStyle(lineName);
  pasteLayerStyle(lineName + "Temp");
  deleteLayer(lineName);
  renameLayer(lineName + "Temp", lineName);
}

function selectLayer(layerName) {
  // Select layer
  var idslct = charIDToTypeID("slct");
  var desc36 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref26 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref26.putName(idLyr, layerName);
  desc36.putReference(idnull, ref26);
  var idMkVs = charIDToTypeID("MkVs");
  desc36.putBoolean(idMkVs, false);
  executeAction(idslct, desc36, DialogModes.NO);
}

function pasteLayerStyle(layerName) {
  // Select layer
  var idslct = charIDToTypeID("slct");
  var desc36 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref26 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref26.putName(idLyr, layerName);
  desc36.putReference(idnull, ref26);
  var idMkVs = charIDToTypeID("MkVs");
  desc36.putBoolean(idMkVs, false);
  executeAction(idslct, desc36, DialogModes.NO);
  // Paste layer style
  var idPaFX = charIDToTypeID("PaFX");
  var desc37 = new ActionDescriptor();
  executeAction(idPaFX, desc37, DialogModes.NO);
}

function copyLayerStyle(layerName) {
  // Select layer
  var idslct = charIDToTypeID("slct");
  var desc35 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref25 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref25.putName(idLyr, layerName);
  desc35.putReference(idnull, ref25);
  var idMkVs = charIDToTypeID("MkVs");
  desc35.putBoolean(idMkVs, false);
  executeAction(idslct, desc35, DialogModes.NO);
  // Copy layer style
  var idCpFX = charIDToTypeID("CpFX");
  executeAction(idCpFX, undefined, DialogModes.NO);
}

function makeLayer(layerName) {
  // Make a new layer
  var idMk = charIDToTypeID("Mk  ");
  var desc3 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref1 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref1.putClass(idLyr);
  desc3.putReference(idnull, ref1);
  executeAction(idMk, desc3, DialogModes.NO);
  // Rename layer
  var idsetd = charIDToTypeID("setd");
  var desc4 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref2 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  var idOrdn = charIDToTypeID("Ordn");
  var idTrgt = charIDToTypeID("Trgt");
  ref2.putEnumerated(idLyr, idOrdn, idTrgt);
  desc4.putReference(idnull, ref2);
  var idT = charIDToTypeID("T   ");
  var desc5 = new ActionDescriptor();
  var idNm = charIDToTypeID("Nm  ");
  desc5.putString(idNm, layerName);
  var idLyr = charIDToTypeID("Lyr ");
  desc4.putObject(idT, idLyr, desc5);
  executeAction(idsetd, desc4, DialogModes.NO);
}

function deleteLayer(name) {
  // Select Layer
  var idslct = charIDToTypeID("slct");
  var desc38 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref27 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref27.putName(idLyr, name);
  desc38.putReference(idnull, ref27);
  var idMkVs = charIDToTypeID("MkVs");
  desc38.putBoolean(idMkVs, false);
  executeAction(idslct, desc38, DialogModes.NO);
  // Delete Layer
  var idDlt = charIDToTypeID("Dlt ");
  var desc39 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref28 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  var idOrdn = charIDToTypeID("Ordn");
  var idTrgt = charIDToTypeID("Trgt");
  ref28.putEnumerated(idLyr, idOrdn, idTrgt);
  desc39.putReference(idnull, ref28);
  executeAction(idDlt, desc39, DialogModes.NO);
}

function renameLayer(oldName, newName) {
  // Select Layer
  var idslct = charIDToTypeID("slct");
  var desc40 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref29 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref29.putName(idLyr, oldName);
  desc40.putReference(idnull, ref29);
  var idMkVs = charIDToTypeID("MkVs");
  desc40.putBoolean(idMkVs, false);
  executeAction(idslct, desc40, DialogModes.NO);
  // Rename layer
  var idsetd = charIDToTypeID("setd");
  var desc41 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref30 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  var idOrdn = charIDToTypeID("Ordn");
  var idTrgt = charIDToTypeID("Trgt");
  ref30.putEnumerated(idLyr, idOrdn, idTrgt);
  desc41.putReference(idnull, ref30);
  var idT = charIDToTypeID("T   ");
  var desc42 = new ActionDescriptor();
  var idNm = charIDToTypeID("Nm  ");
  desc42.putString(idNm, newName);
  var idLyr = charIDToTypeID("Lyr ");
  desc41.putObject(idT, idLyr, desc42);
  executeAction(idsetd, desc41, DialogModes.NO);
}

function duplicateLayer(layerName, newLayerName) {
  var idslct = charIDToTypeID("slct");
  var desc53 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref40 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  ref40.putName(idLyr, layerName);
  desc53.putReference(idnull, ref40);
  var idMkVs = charIDToTypeID("MkVs");
  desc53.putBoolean(idMkVs, false);
  executeAction(idslct, desc53, DialogModes.NO);
  var idDplc = charIDToTypeID("Dplc");
  var desc54 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  var ref41 = new ActionReference();
  var idLyr = charIDToTypeID("Lyr ");
  var idOrdn = charIDToTypeID("Ordn");
  var idTrgt = charIDToTypeID("Trgt");
  ref41.putEnumerated(idLyr, idOrdn, idTrgt);
  desc54.putReference(idnull, ref41);
  var idNm = charIDToTypeID("Nm  ");
  desc54.putString(idNm, newLayerName);
  var idVrsn = charIDToTypeID("Vrsn");
  desc54.putInteger(idVrsn, 5);
  executeAction(idDplc, desc54, DialogModes.NO);
}

function savePicture(saveFile) {
  var pngOpts = new ExportOptionsSaveForWeb;
  pngOpts.format = SaveDocumentType.PNG
  pngOpts.PNG8 = false;
  pngOpts.transparency = true;
  pngOpts.interlaced = false;
  pngOpts.quality = 100;
  activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, pngOpts);
}
