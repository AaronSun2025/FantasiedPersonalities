var f1, f2, f3, f4, f5, f6, f7, i8, f9, f10, f11, f12, f13, f14, f15, f16;
var focused, info, decision, live;
var focusedlvl, infolvl, decisionlvl, livelvl;
var arrayRandomIndex = Math.floor(Math.random()*2);
var results;
var choice;
var SA1, A1, N1, D1, SD1, SA2, A2, N2, D2, SD2, SA3, A3, N3, D3, SD3, SA4, A4, N4, D4, SD4, SA5, A5, N5, D5, SD5, SA6, A6, N6, D6, SD6, SA7, A7, N7, D7, SD7, SA8, A8, N8, D8, SD8, SA9, A9, N9, D9, SD9, SA10, A10, N10, D10, SD10, SA11, A11, N11, D11, SD11, SA12, A12, N12, D12, SD12, SA13, A13, N13, D13, SD13, SA14, A14, N14, D14, SD14, SA15, A15, N15, D15, SD15, SA16, A16, N16, D16, SD16;



Random = function() {
  var rNums = [-1, 1];
  return rNums[arrayRandomIndex];
}

RFocus = function() {
  var rPair1 = ["E", "I"];
  return rPair1[arrayRandomIndex];
}

RInfo = function() {
  var rPair2 = ["S", "N"];
  return rPair2[arrayRandomIndex];
}

RDecision = function() {
  var rPair3 = ["T", "F"];
  return rPair3[arrayRandomIndex];
}

RLive = function() {
  var rPair4 = ["J", "P"];
  return rPair4[arrayRandomIndex];
}


check = function() {

  SA1 = document.getElementById("SA1");
  A1 = document.getElementById("A1");
  N1 = document.getElementById("N1");
  D1 = document.getElementById("D1");
  SD1 = document.getElementById("SD1");

  SA2 = document.getElementById("SA2");
  A2= document.getElementById("A2");
  N2 = document.getElementById("N2");
  D2 = document.getElementById("D2");
  SD2 = document.getElementById("SD2");

  SA3 = document.getElementById("SA3");
  A3= document.getElementById("A3");
  N3 = document.getElementById("N3");
  D3 = document.getElementById("D3");
  SD3 = document.getElementById("SD3");

  SA4 = document.getElementById("SA4");
  A4= document.getElementById("A4");
  N4 = document.getElementById("N4");
  D4 = document.getElementById("D4");
  SD4 = document.getElementById("SD4");



  SA5 = document.getElementById("SA5");
  A5 = document.getElementById("A5");
  N5 = document.getElementById("N5");
  D5 = document.getElementById("D5");
  SD5 = document.getElementById("SD5");

  SA6 = document.getElementById("SA6");
  A6= document.getElementById("A6");
  N6 = document.getElementById("N6");
  D6 = document.getElementById("D6");
  SD6 = document.getElementById("SD6");

  SA7 = document.getElementById("SA7");
  A7= document.getElementById("A7");
  N7 = document.getElementById("N7");
  D7 = document.getElementById("D7");
  SD7 = document.getElementById("SD7");

  SA8 = document.getElementById("SA8");
  A8= document.getElementById("A8");
  N8 = document.getElementById("N8");
  D8 = document.getElementById("D8");
  SD8 = document.getElementById("SD8");



  SA9 = document.getElementById("SA9");
  A9 = document.getElementById("A9");
  N9 = document.getElementById("N9");
  D9 = document.getElementById("D9");
  SD9 = document.getElementById("SD9");

  SA10 = document.getElementById("SA10");
  A10= document.getElementById("A10");
  N10 = document.getElementById("N10");
  D10 = document.getElementById("D10");
  SD10 = document.getElementById("SD10");

  SA11 = document.getElementById("SA11");
  A11= document.getElementById("A11");
  N11 = document.getElementById("N11");
  D11 = document.getElementById("D11");
  SD11 = document.getElementById("SD11");

  SA12 = document.getElementById("SA12");
  A12= document.getElementById("A12");
  N12 = document.getElementById("N12");
  D12 = document.getElementById("D12");
  SD12 = document.getElementById("SD12");



  SA13 = document.getElementById("SA13");
  A13 = document.getElementById("A13");
  N13 = document.getElementById("N13");
  D13 = document.getElementById("D13");
  SD13 = document.getElementById("SD13");

  SA14 = document.getElementById("SA14");
  A14= document.getElementById("A14");
  N14 = document.getElementById("N14");
  D14 = document.getElementById("D14");
  SD14 = document.getElementById("SD14");

  SA15 = document.getElementById("SA15");
  A15= document.getElementById("A15");
  N15 = document.getElementById("N15");
  D15 = document.getElementById("D15");
  SD15 = document.getElementById("SD15");

  SA16 = document.getElementById("SA16");
  A16= document.getElementById("A16");
  N16 = document.getElementById("N16");
  D16 = document.getElementById("D16");
  SD16 = document.getElementById("SD16");

  if (SA1.checked) {
    f1 = SA1.value;
    //console.log(SA1.value);
  } else if (A1.checked) {
    f1 = A1.value;
    //console.log(A1.value);
  } else if (N1.checked) {
    f1 = Random();
    //console.log(Random());
  } else if (D1.checked) {
    f1 = D1.value;
    //console.log(D1.value);
  } else if (SD1.checked) {
    f1 = SD1.value;
    //console.log(SD1.value);
  }
  if (SA2.checked) {
    f2 = SA2.value;
    //console.log(SA2.value);
  } else if (A2.checked) {
    f2 = A2.value;
    //console.log(A2.value);
  } else if (N2.checked) {
    f2 = Random();
    //console.log(Random());
  } else if (D2.checked) {
    f2 = D2.value;
    //console.log(D2.value);
  } else if (SD2.checked) {
    f2 = SD2.value;
    //console.log(SD2.value);
  }
  if (SA3.checked) {
    f3 = SA3.value;
    //console.log(SA3.value);
  } else if (A3.checked) {
    f3 = A3.value;
    //console.log(A3.value);
  } else if (N3.checked) {
    f3 = Random();
    //console.log(Random());
  } else if (D3.checked) {
    f3 = D3.value;
    //console.log(D3.value);
  } else if (SD3.checked) {
    f3 = SD3.value;
    //console.log(SD3.value);
  }
  if (SA4.checked) {
    f4 = SA4.value;
    //console.log(SA4.value);
  } else if (A4.checked) {
    f4 = A4.value;
    //console.log(A4.value);
  } else if (N4.checked) {
    f4 = Random();
    //console.log(Random());
  } else if (D4.checked) {
    f4 = D4.value;
    //console.log(D4.value);
  } else if (SD4.checked) {
    f4 = SD4.value;
    //console.log(SD4.value);
  }
  
  
  
  if (SA5.checked) {
    f5 = SA5.value;
    //console.log(SA5.value);
  } else if (A5.checked) {
    f5 = A5.value;
    //console.log(A5.value);
  } else if (N5.checked) {
    f5 = Random();
    //console.log(Random());
  } else if (D5.checked) {
    f5 = D5.value;
    //console.log(D5.value);
  } else if (SD5.checked) {
    f5 = SD5.value;
    //console.log(SD5.value);
  }
  if (SA6.checked) {
    f6 = SA6.value;
    //console.log(SA6.value);
  } else if (A6.checked) {
    f6 = A6.value;
    //console.log(A6.value);
  } else if (N6.checked) {
    f6 = Random();
    //console.log(Random());
  } else if (D6.checked) {
    f6 = D6.value;
    //console.log(D6.value);
  } else if (SD6.checked) {
    f6 = SD6.value;
    //console.log(SD6.value);
  }
  if (SA7.checked) {
    f7 = SA7.value;
    //console.log(SA7.value);
  } else if (A7.checked) {
    f7 = A7.value;
    //console.log(A7.value);
  } else if (N7.checked) {
    f7 = Random();
    //console.log(Random());
  } else if (D7.checked) {
    f7 = D7.value;
    //console.log(D7.value);
  } else if (SD7.checked) {
    f7 = SD7.value;
    //console.log(SD7.value);
  }
  if (SA8.checked) {
    f8 = SA8.value;
    //console.log(SA8.value);
  } else if (A8.checked) {
    f8 = A8.value;
    //console.log(A8.value);
  } else if (N8.checked) {
    f8 = Random();
    //console.log(Random());
  } else if (D8.checked) {
    f8 = D8.value;
    //console.log(D8.value);
  } else if (SD8.checked) {
    f8 = SD8.value;
    //console.log(SD8.value);
  }
  
  
  
  if (SA9.checked) {
    f9 = SA9.value;
    //console.log(SA9.value);
  } else if (A9.checked) {
    f9 = A9.value;
    //console.log(A9.value);
  } else if (N9.checked) {
    f9 = Random();
    //console.log(Random());
  } else if (D9.checked) {
    f9 = D9.value;
    //console.log(D9.value);
  } else if (SD9.checked) {
    f9 = SD9.value;
    //console.log(SD9.value);
  }
  if (SA10.checked) {
    f10 = SA10.value;
    //console.log(SA10.value);
  } else if (A10.checked) {
    f10 = A10.value;
    //console.log(A10.value);
  } else if (N10.checked) {
    f10 = Random();
    //console.log(Random());
  } else if (D10.checked) {
    f10 = D10.value;
    //console.log(D10.value);
  } else if (SD10.checked) {
    f10 = SD10.value;
    //console.log(SD10.value);
  }
  if (SA11.checked) {
    f11 = SA11.value;
    //console.log(SA11.value);
  } else if (A11.checked) {
    f11 = A11.value;
    //console.log(A11.value);
  } else if (N11.checked) {
    f11 = Random();
    //console.log(Random());
  } else if (D11.checked) {
    f11 = D11.value;
    //console.log(D11.value);
  } else if (SD11.checked) {
    f11 = SD11.value;
    //console.log(SD11.value);
  }
  if (SA12.checked) {
    f12 = SA12.value;
    //console.log(SA12.value);
  } else if (A12.checked) {
    f12 = A12.value;
    //console.log(A12.value);
  } else if (N12.checked) {
    f12 = Random();
    //console.log(Random());
  } else if (D12.checked) {
    f12 = D12.value;
    //console.log(D12.value);
  } else if (SD12.checked) {
    f12 = SD12.value;
    //console.log(SD12.value);
  }
  
  
  
  if (SA13.checked) {
    f13 = SA13.value;
    //console.log(SA13.value);
  } else if (A13.checked) {
    f13 = A13.value;
    //console.log(A13.value);
  } else if (N13.checked) {
    f13 = Random();
    //console.log(Random());
  } else if (D13.checked) {
    f13 = D13.value;
    //console.log(D13.value);
  } else if (SD13.checked) {
    f13 = SD13.value;
    //console.log(SD13.value);
  }
  if (SA14.checked) {
    f14 = SA14.value;
    //console.log(SA14.value);
  } else if (A14.checked) {
    f14 = A14.value;
    //console.log(A14.value);
  } else if (N14.checked) {
    f14 = Random();
    //console.log(Random());
  } else if (D14.checked) {
    f14 = D14.value;
    //console.log(D14.value);
  } else if (SD14.checked) {
    f14 = SD14.value;
    //console.log(SD14.value);
  }
  if (SA15.checked) {
    f15 = SA15.value;
    //console.log(SA15.value);
  } else if (A15.checked) {
    f15 = A15.value;
    //console.log(A15.value);
  } else if (N15.checked) {
    f15 = Random();
    //console.log(Random());
  } else if (D15.checked) {
    f15 = D15.value;
    //console.log(D15.value);
  } else if (SD15.checked) {
    f15 = SD15.value;
    //console.log(SD15.value);
  }
  if (SA16.checked) {
    f16 = SA16.value;
    //console.log(SA16.value);
  } else if (A16.checked) {
    f16 = A16.value;
    //console.log(A16.value);
  } else if (N16.checked) {
    f16 = Random();
    //console.log(Random());
  } else if (D16.checked) {
    f16 = D16.value;
    //console.log(D16.value);
  } else if (SD16.checked) {
    f16 = SD16.value;
    //console.log(SD16.value);
  }
  
  focusedlvl = Number(f1)+Number(f2)+Number(f3)+Number(f4);
  infolvl = Number(f5)+Number(f6)+Number(f7)+Number(f8);
  decisionlvl = Number(f9)+Number(f10)+Number(f11)+Number(f12);
  livelvl = Number(f13)+Number(f14)+Number(f15)+Number(f16);
  
  if(focusedlvl > 0) {
    focused = "E";
  } else if (focusedlvl === 0) {
    focused = RFocus();
  } else if (focusedlvl < 0) {
    focused = "I";
  }
  
  //console.log(focusedlvl);
  //console.log(focused);
  
  if(infolvl > 0) {
    info = "N";
  } else if (infolvl === 0) {
    info = RInfo();
  } else if (infolvl < 0) {
    info = "S";
  }
  
  //console.log(infolvl);
  //console.log(info);
  
  if(decisionlvl > 0) {
    decision = "T";
  } else if (decisionlvl === 0) {
    decision = RDecision();
  } else if (decisionlvl < 0) {
    decision = "F";
  }
  
  //console.log(decisionlvl);
  //console.log(decision);
  
  if(livelvl > 0) {
    live = "J";
  } else if (livelvl === 0) {
    live = RLive();
  } else if (livelvl < 0) {
    live = "P";
  }
  
  //console.log(livelvl);
  //console.log(live);
  
  results = focused + info + decision + live;
  alert(results);
  
}