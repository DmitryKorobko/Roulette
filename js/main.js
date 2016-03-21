$(document).ready(function() {

  var canvas = new fabric.Canvas('mainCanvas');

  var tempArr1 = [],
    tempArr2 = [],
    tempArr3 = [],
    i, arrayOfImages = [];

  function randomElement(min, max) {
    var range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }

  function shakeArray(arr) {
    var randomIndex, tempValue;
    for (var i = 0; i < arr.length - 1; i++) {
      randomIndex = randomElement(0, arr.length - 1);
      tempValue = arr[randomIndex];
      arr[randomIndex] = arr[arr.length - 1];
      arr[arr.length - 1] = tempValue;
    }
    return arr;
  }

  for (i = 0; i <= 12; i++) {
    arrayOfImages.push('img/r' + i + '.gif');
  }

  for (i = 0; i <= 12; i++) {
    var tempVar = arrayOfImages[i];
    tempArr1[i] = tempVar;
    tempArr2[i] = tempVar;
    tempArr3[i] = tempVar;
  }

  shakeArray(tempArr1);
  shakeArray(tempArr2);
  shakeArray(tempArr3);

  fabric.Image.fromURL(tempArr1[0], function(img) {
    var img0 = img.set({left: 0, top: 0});
    fabric.Image.fromURL(tempArr1[1], function(img) {
      var img1 = img.set({left: 105, top: 0});
      fabric.Image.fromURL(tempArr1[2], function(img) {
        var img2 = img.set({left: 210, top: 0});
        fabric.Image.fromURL(tempArr1[3], function(img) {
          var img3 = img.set({ left: 315, top: 0});
          fabric.Image.fromURL(tempArr1[4], function(img) {
            var img4 = img.set({left: 420, top: 0});
            fabric.Image.fromURL(tempArr1[5], function(img) {
              var img5 = img.set({  left: 525, top: 0 });
              fabric.Image.fromURL(tempArr1[6], function(img) {
                var img6 = img.set({left: 630, top: 0});
                fabric.Image.fromURL(tempArr1[7], function(img) {
                  var img7 = img.set({left: 735, top: 0});
                  fabric.Image.fromURL(tempArr1[8], function(img) {
                    var img8 = img.set({left: 840, top: 0});
                    fabric.Image.fromURL(tempArr1[9], function(img) {
                      var img9 = img.set({left: 945, top: 0});
                      fabric.Image.fromURL(tempArr1[10], function(img) {
                        var img10 = img.set({left: 1050, top: 0});
                        fabric.Image.fromURL(tempArr1[11], function(img) {
                          var img11 = img.set({left: 1155, top: 0});
                          fabric.Image.fromURL(tempArr1[12], function(img) {
                            var img12 = img.set({left: 1260, top: 0});
                            var group1 = new fabric.Group([img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12], 
                              {left: -465, top: 60});
                            canvas.add(group1);
                            $('#start').click(function() {
                                $('#start').addClass('activeButton');
                                group1.animate('left', 585, {onChange: canvas.renderAll.bind(canvas), duration: 3000, easing: fabric.util.ease.easeInOutQuad}); });
  });});});});});});});});});});});});});

  fabric.Image.fromURL(tempArr2[0], function(img) {
    var img0 = img.set({left: 0, top: 0});
    fabric.Image.fromURL(tempArr2[1], function(img) {
      var img1 = img.set({left: 105, top: 0});
      fabric.Image.fromURL(tempArr2[2], function(img) {
        var img2 = img.set({left: 210, top: 0});
        fabric.Image.fromURL(tempArr2[3], function(img) {
          var img3 = img.set({ left: 315, top: 0});
          fabric.Image.fromURL(tempArr2[4], function(img) {
            var img4 = img.set({left: 420, top: 0});
            fabric.Image.fromURL(tempArr2[5], function(img) {
              var img5 = img.set({  left: 525, top: 0 });
              fabric.Image.fromURL(tempArr2[6], function(img) {
                var img6 = img.set({left: 630, top: 0});
                fabric.Image.fromURL(tempArr2[7], function(img) {
                  var img7 = img.set({left: 735, top: 0});
                  fabric.Image.fromURL(tempArr2[8], function(img) {
                    var img8 = img.set({left: 840, top: 0});
                    fabric.Image.fromURL(tempArr2[9], function(img) {
                      var img9 = img.set({left: 945, top: 0});
                      fabric.Image.fromURL(tempArr2[10], function(img) {
                        var img10 = img.set({left: 1050, top: 0});
                        fabric.Image.fromURL(tempArr2[11], function(img) {
                          var img11 = img.set({left: 1155, top: 0});
                          fabric.Image.fromURL(tempArr2[12], function(img) {
                            var img12 = img.set({left: 1260, top: 0});
                            var group2 = new fabric.Group([img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12], 
                              {left: -465, top: 170});
                            canvas.add(group2);
                            $('#start').click(function() {
                                $('#start').addClass('activeButton');
                                group2.animate('left', 585, {onChange: canvas.renderAll.bind(canvas), duration: 5000, easing: fabric.util.ease.easeInOutQuad}); });
  });});});});});});});});});});});});});

  fabric.Image.fromURL(tempArr3[0], function(img) {
    var img0 = img.set({left: 0, top: 0});
    fabric.Image.fromURL(tempArr3[1], function(img) {
      var img1 = img.set({left: 105, top: 0});
      fabric.Image.fromURL(tempArr3[2], function(img) {
        var img2 = img.set({left: 210, top: 0});
        fabric.Image.fromURL(tempArr3[3], function(img) {
          var img3 = img.set({ left: 315, top: 0});
          fabric.Image.fromURL(tempArr3[4], function(img) {
            var img4 = img.set({left: 420, top: 0});
            fabric.Image.fromURL(tempArr3[5], function(img) {
              var img5 = img.set({  left: 525, top: 0 });
              fabric.Image.fromURL(tempArr3[6], function(img) {
                var img6 = img.set({left: 630, top: 0});
                fabric.Image.fromURL(tempArr3[7], function(img) {
                  var img7 = img.set({left: 735, top: 0});
                  fabric.Image.fromURL(tempArr3[8], function(img) {
                    var img8 = img.set({left: 840, top: 0});
                    fabric.Image.fromURL(tempArr3[9], function(img) {
                      var img9 = img.set({left: 945, top: 0});
                      fabric.Image.fromURL(tempArr3[10], function(img) {
                        var img10 = img.set({left: 1050, top: 0});
                        fabric.Image.fromURL(tempArr3[11], function(img) {
                          var img11 = img.set({left: 1155, top: 0});
                          fabric.Image.fromURL(tempArr3[12], function(img) {
                            var img12 = img.set({left: 1260, top: 0});
                            var group3 = new fabric.Group([img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12], 
                              {left: -465, top: 280});
                            canvas.add(group3);
                            $('#start').click(function() {
                                $('#start').addClass('activeButton');
                                group3.animate('left', 585, {onChange: canvas.renderAll.bind(canvas), duration: 7000, easing: fabric.util.ease.easeInOutQuad}); });
  });});});});});});});});});});});});});

  $('#start').click(function() {
    $('#start').addClass('activeButton');
    setTimeout(function() {
      $('#start').removeClass('activeButton');
    }, 300);
  });

});