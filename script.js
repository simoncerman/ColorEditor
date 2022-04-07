class ColorEditor {
  constructor() {
    let rangeR = document.getElementById("rangeR");
    let rangeG = document.getElementById("rangeG");
    let rangeB = document.getElementById("rangeB");

    let inputR = document.getElementById("inputR");
    let inputG = document.getElementById("inputG");
    let inputB = document.getElementById("inputB");

    this.ranges = [rangeR, rangeG, rangeB];
    this.values = [inputR, inputG, inputB];

    console.log(this.ranges);
    //updating on change of range input / number input
    this.ranges.map((element) => {
      element.addEventListener("change", () => {
        this.updateValues();
        this.updateColor();
        this.updateReverseColor();
      });
    });
    this.values.map((element) => {
      element.addEventListener("change", () => {
        this.updateRanges();
        this.updateColor();
        this.updateReverseColor();
      });
    });
  }

  //set number range input data to value number inputs
  updateValues() {
    for (let i = 0; i < this.ranges.length; i++) {
      this.values[i].value = this.ranges[i].value;
    }
  }

  //set value number inputs into ranges values
  updateRanges() {
    for (let i = 0; i < this.values.length; i++) {
      this.ranges[i].value = this.values[i].value;
    }
  }

  //change normal color to values in number input
  updateColor() {
    //get all required values from fields
    let values = [...this.values].map((e) => {
      return e.value;
    });

    document.getElementById(
      "normal-color"
    ).style.backgroundColor = `rgb(${values[0]},${values[1]},${values[2]})`;
  }

  //change normal color to reversed values from input computed by server
  updateReverseColor() {
    //get all required values from fields
    let values = [...this.values].map((e) => {
      return e.value;
    });

    var http = new XMLHttpRequest();
    var url = "reverseRequest.php";
    var params = `r=${values[0]}&g=${values[1]}&b=${values[2]}&`;

    //http request to server
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {
      //set color if server respond correctly
      if (http.readyState == 4 && http.status == 200) {
        //reversed color
        let rC = JSON.parse(http.responseText);

        document.getElementById(
          "reversed-color"
        ).style.backgroundColor = `rgb(${rC["R"]},${rC["G"]},${rC["B"]})`;
      }
    };
    http.send(params);
  }
}
let colorEditing = new ColorEditor();
